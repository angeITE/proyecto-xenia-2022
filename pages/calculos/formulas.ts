
const harrisBenedict = ({ sexo, peso, talla, edad }: { sexo: any, peso: any, talla: any, edad: any }) => {
    console.log(sexo, peso, talla, edad)
    return sexo === 'male' ? 66.5 + (13.75 * peso) + (5 * talla) - (6.78 * edad) :
        sexo === 'female' ? 655.1 + (9.56 * peso) + (1.85 * talla) - (4.68 * edad) : 0.0
}

export const mifflin = ({ sexo, peso, talla, edad }) => {
    return sexo === 'male' ? (10 * peso) + (6.25 * talla) - (5 * edad) + 5 :
        sexo === 'female' ? (10 * peso) + (6.25 * talla) - (5 * edad) - 161 : 0.0
}

export const oms = ({ sexo, peso, talla }) => {
    return sexo === 'male' ? (11.3 * peso) + (16 * (talla*0.01)) + 901 :
        sexo === 'female' ? (8.7 * peso) - (25 * (talla*0.01)) + 865 : 0.0
}

export const owen = ({ sexo, peso }) => {
    return sexo === 'male' ? 879 + (10.2 * peso) :
        sexo === 'female' ? 795 + (7.18 * peso) : 0.0
}

const valencia = ({ sexo, peso, edad }) => {
    return sexo === 'male' ? ((edad <= 29) ? (13.37 * peso) + 747 : (edad <= 59) ? (13.08 * peso) + 693 : (14.21 * peso) + 429) :
        sexo === 'female' ? ((edad <= 29) ? (11.02 * peso) + 679 : (edad <= 59) ? (10.92 * peso) + 677 : (10.98 * peso) + 520) : 0.0
}

export const Formula = ({ factor, formula, sexo, peso, talla, edad }: { factor: any, formula: any, sexo: any, peso: any, talla: any, edad: any }) => {

    let f = factor === 'sedentario' ? 1.2 : factor === 'ligero' ? 1.3 :
        factor === 'moderado' ? 1.5 : factor === 'activo' ? 1.7 :
            factor === 'vigoroso' ? 1.9 : 0;

            //console.log(factor, formula, sexo, peso, talla, edad, f)

    switch (formula) {
        case 'harris':
            let geb = harrisBenedict({ sexo, peso, talla, edad })
            return (geb * f) + (geb * 0.10)
        case 'mifflin':
            return mifflin({ sexo, peso, talla, edad }) * f
        case 'owen':
            return owen({ sexo, peso }) * f
        case 'oms':
            return oms({ sexo, peso, talla }) * f
        case 'valencia':
            return valencia({ sexo, peso, edad }) * f
        default:
            return 0
    }

}
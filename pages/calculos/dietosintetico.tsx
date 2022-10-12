import { useState } from 'react';
import { Accordion, Box, Stack, Table, NumberInput, Text } from '@mantine/core'
import { Formula } from './formulas';
import React from 'react';


const dietosintetico = ({ sexo, peso, talla, edad, factor, formula }:{ sexo: any, peso: any, talla: any, edad: any, factor: any, formula: any }) => {

  const [percentageProtein, setPercentageProtein] = useState(1)
  const [percentageLipids, setPercentageLipids] = useState(1)
  const [percentageCarbohydrates, setPercentageCarbohydrates] = useState(1)
  const [sumPercentage, setSumPercentage] = useState(percentageProtein + percentageLipids + percentageCarbohydrates)

  const [gKgProtein, setGKgProtein] = useState(0.1)
  const [gKgLipids, setGKgLipids] = useState(0.1)
  const [kgLipids, setkgLipids] = useState(0.0)
  const gramProtein = () => peso * gKgProtein
  const percentageOfProtein = () => (((gramProtein() * 4)/kc())*100)
  const percentageOfLipids = () => (((gramLipids() * 9)/kc())*100)
  const percentageOfCarbohydrates = () => 99.99-(percentageOfProtein()+percentageOfLipids())

  
    const kc = () => Formula({ factor, sexo, peso, talla, edad, formula })
    const gramLipids = () => peso * gKgLipids
    const kcProtein = () => gramProtein() * 4
    const kcLipids = () => gramLipids() * 9
    const kcCarbohydrates = () => kc() - (kcProtein() + kcLipids())
    const verifyIsNaN = (f: any) => isNaN(f) ? '---' : f.toFixed(2)


  return (
    <Stack>
      <Accordion variant="contained" defaultValue='percentage'>
        <Accordion.Item value='percentage'>
          <Accordion.Control>Por porcentage</Accordion.Control>
          <Accordion.Panel>
            <Box>
              <Table>
              <thead>
                        <tr>
                            <th>Macronutrientes</th>
                            <th>%</th>
                            <th>Kcal</th>
                            <th>g</th>
                            <th>g/Kg</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Proteinas</td>
                            <td><NumberInput value={percentageProtein} min={1}
                                variant="filled" sx={{ maxWidth: 100, minWidth: 100 }}
                                stepHoldDelay={500}
                                stepHoldInterval={100}
                                max={100 - percentageLipids - percentageCarbohydrates}
                                step={1}
                                onChange={(val) => {
                                    setPercentageProtein(val)
                                    setSumPercentage(val + percentageLipids + percentageCarbohydrates)
                                }} /></td>
                            <td><Text sx={{ maxWidth: 100, minWidth: 100 }}>{sumPercentage === 100 ? (kc() * percentageProtein / 100).toFixed(2) : '---'}</Text></td>
                            <td><Text sx={{ maxWidth: 100, minWidth: 100 }}>{sumPercentage === 100 ? (kc() * percentageProtein / 100 / 4).toFixed(2) : '---'}</Text></td>
                            <td><Text sx={{ maxWidth: 50, minWidth: 50 }}>{sumPercentage === 100 ? (kc() * percentageProtein / 100 / 4 / peso).toFixed(2) : '---'}</Text></td>


                        </tr>
                        <tr>
                            <td>Lípidos</td>
                            <td><NumberInput value={percentageLipids} min={1}
                                contentEditable={false}
                                variant="filled" sx={{ maxWidth: 100, minWidth: 100 }}
                                stepHoldDelay={500}
                                stepHoldInterval={100}
                                max={100 - percentageProtein - percentageCarbohydrates}
                                step={1}
                                onChange={(val) => {
                                    setPercentageLipids(val)
                                    setSumPercentage(percentageProtein + val + percentageCarbohydrates)

                                }} /></td>
                            <td>{sumPercentage === 100 ? (kc() * percentageLipids / 100).toFixed(2) : '---'}</td>
                            <td>{sumPercentage === 100 ? (kc() * percentageLipids / 100 / 9).toFixed(2) : '---'}</td>
                            <td>{sumPercentage === 100 ? (kc() * percentageLipids / 100 / 9 / peso).toFixed(2) : '---'}</td>

                        </tr>
                        <tr>
                            <td>Carbohidratos</td>
                            <td><NumberInput value={percentageCarbohydrates} min={1}
                                variant="filled" sx={{ maxWidth: 100, minWidth: 100 }}
                                stepHoldDelay={500}
                                stepHoldInterval={100}
                                max={100 - percentageLipids - percentageProtein}
                                step={1}
                                onChange={(val) => {
                                    setPercentageCarbohydrates(val)
                                    setSumPercentage(percentageProtein + percentageLipids + val)
                                }} /></td>
                            <td>{sumPercentage === 100 ? (kc() * percentageCarbohydrates / 100).toFixed(2) : '---'}</td>
                            <td>{sumPercentage === 100 ? (kc() * percentageCarbohydrates / 100 / 4).toFixed(2) : '---'}</td>
                            <td>{sumPercentage === 100 ? (kc() * percentageCarbohydrates / 100 / 4 / peso).toFixed(2) : '---'}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td><Text color={(sumPercentage) === 100 ? 'black' : 'red'}>{sumPercentage}</Text></td>
                            <td>{kc().toFixed(2)}</td>
                        </tr>
                    </tbody>
              </Table>
            </Box>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value='g/kg'>
          <Accordion.Control>Por g/Kg</Accordion.Control>
          <Accordion.Panel>
          <Box>
          <Table>
                        <thead>
                            <tr>
                                <th>Macronutrientes</th>
                                <th>%</th>
                                <th>Kcal</th>
                                <th>g</th>
                                <th>g/Kg</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Proteinas</td>

                                <td><Text sx={{ maxWidth: 50, minWidth: 50 }}> {verifyIsNaN(percentageOfProtein())} </Text></td>
                                <td><Text sx={{ maxWidth: 100, minWidth: 100 }}>{verifyIsNaN(kcProtein())}</Text></td>
                                <td> <Text sx={{ maxWidth: 100, minWidth: 100 }}>{verifyIsNaN(gramProtein())}</Text> </td>
                                <td><NumberInput variant="filled" sx={{ maxWidth: 100, minWidth: 100 }}
                                    value={gKgProtein}
                                    stepHoldDelay={500}
                                    stepHoldInterval={100}
                                    precision={2}
                                    min={0.01}
                                    step={0.01}
                                    onChange={(val: any) => { setGKgProtein(val) }}
                                /></td>
                            </tr>
                            <tr>
                                <td>Lipidos</td>

                                <td> {verifyIsNaN(percentageOfLipids())} </td>
                                <td>{verifyIsNaN(kcLipids())}</td>
                                <td> {verifyIsNaN(gramLipids())} </td>
                                <td><NumberInput variant="filled" sx={{ minWidth: 100, maxWidth: 100 }}
                                    value={gKgLipids}
                                    stepHoldDelay={500}
                                    stepHoldInterval={100}
                                    precision={2}
                                    min={0.01}
                                    step={0.01}
                                    onChange={(val: any) => { setGKgLipids(val) }}
                                /></td>
                            </tr>
                            <tr>
                                <td>Carbohidratos</td>
                                <td>{verifyIsNaN(percentageOfCarbohydrates())}</td>
                                <td>{verifyIsNaN(kcCarbohydrates())}</td>
                                <td>{verifyIsNaN(kcCarbohydrates() / 4)}</td>
                                <td>{verifyIsNaN(kcCarbohydrates() / 4 / peso)}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>{verifyIsNaN(percentageOfCarbohydrates() + percentageOfLipids() + percentageOfProtein())}</td>
                                <td>{kc().toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </Table>
          </Box>
        </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  )
}

export default dietosintetico
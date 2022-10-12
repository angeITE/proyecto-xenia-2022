import { Accordion, Box, Button, Input, Select, Group, Center, ScrollArea, List } from '@mantine/core'
import {React, useState} from 'react'
import Cabecera from './cabecera'

export async function getStaticProps(){
    const url = 'https://smaedbxenia9no-default-rtdb.firebaseio.com/SMAE.json'
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    return{
      props:{
        data: entradas
      }
    } 
  }

const buscador = ({data}) => {
  const [consulta, setConsulta] = useState(false)
  const [alimento, setAlimento] = useState([])
  const [name, setName] = useState("")

  const getAlimentos = () => data.filter( (e) => e.Alimento.toLowerCase().includes(name.toLocaleLowerCase()) )
  
  const showAlimentos = () => {
    setConsulta(true)
    setAlimento((getAlimentos()))
  }

  return (
    <Cabecera>
          <Group position="center">
            <Input value={name} placeholder='   ingrese un alimento' onChange={(e)=>setName(e.target.value)}></Input>
            <Button onClick={() => showAlimentos()}>Buscar</Button>
          </Group>
          <Group position='center'> {consulta == true && name != "" ?
          <Accordion variant='container' defaultValue='lista'>
            <Accordion.Item value='lista'>
              <Accordion.Control>Alimentos</Accordion.Control>
              <Accordion.Panel>
              {alimento.map( (e, Key)=> 
                <Accordion variant='container'>
                  <Accordion.Item value='alimentos'>
                    <Accordion.Control>{e.Alimento}</Accordion.Control>
                    <Accordion.Panel>
                    <ScrollArea style={{ height: 250 }} type="scroll" offsetScrollbars>
                    <List withPadding>
                      <List.Item>{"Azucar: "+e.AzucarPorEquivalenteG}</List.Item>
                      <List.Item>{"Calcio: "+e.Calciomg}</List.Item>
                      <List.Item>{"Cantidad: "+e.Cantidad}</List.Item>
                      <List.Item>{"Carbohidratos: "+e.Carbohidratos}</List.Item>
                      <List.Item>{"Categoria: "+e.Categoría}</List.Item>
                      <List.Item>{"Colesterol: "+e.Colesterolmg}</List.Item>
                      <List.Item>{"Energia: "+e.EnergíaKcal}</List.Item>
                      <List.Item>{"Etanol: "+e.Etanolg}</List.Item>
                      <List.Item>{"Fibra: "+e.Fibra}</List.Item>
                      <List.Item>{"Forforo: "+e.Forforomg}</List.Item>
                      <List.Item>{"Grasa mono insaturada: "+e.GrasaMonoinsaturadag}</List.Item>
                      <List.Item>{"Grasa poli insaturada: "+e.GrasaPoliinsaturadag}</List.Item>
                      <List.Item>{"Grasa saturada: "+e.GrasaSaturadag}</List.Item>
                      <List.Item>{"Hierro: "+e.Hierromg}</List.Item>
                      <List.Item>{"Ic: "+e.IC}</List.Item>
                      <List.Item>{"Ig: "+e.IG}</List.Item>
                      <List.Item>{"Lipidos: "+e.Lipidos}</List.Item>
                      <List.Item>{"Peso bruto: "+e.PesoBrutoG}</List.Item>
                      <List.Item>{"Peso neto: "+e.PesoNetoG}</List.Item>
                      <List.Item>{"Potasio: "+e.Potasiomg}</List.Item>
                      <List.Item>{"Proteina: "+e.Proteina}</List.Item>
                      <List.Item>{"Seleniou: "+e.Selenioug}</List.Item>
                      <List.Item>{"Sodio: "+e.Sodiomg}</List.Item>
                      <List.Item>{"Unidad: "+e.Unidad}</List.Item>
                      <List.Item>{"Vitamina A: "+e.VitaminaAug}</List.Item>
                      <List.Item>{"Acido ascorbico: "+e.AcidoAscorbicomg}</List.Item>
                      <List.Item>{"Acido folico: "+e.AcidoFolicoug}</List.Item>
                    </List>
                    </ScrollArea>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>    
              )}
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion> 
          : '' }
          </Group>
    </Cabecera>
  )
}

export default buscador
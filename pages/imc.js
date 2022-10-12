import { Group, Box, TextInput, Text, Button, Center } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react'
import { useState } from "react"
import Cabecera from './cabecera'


const imc = () => {

  const form = useForm({
    initialValues: {
      Weight: '',
      Height : '',
    },
  });

  const [imc, setimc] = useState('')
  const [level, setLevel] = useState('')

  const calculateIMC = () =>{
    const peso = form.values.Weight;
    const talla = form.values.Height;
    const res = (peso/((talla*0.01)*(talla*0.01)) );
    const lvl = res < 18.5 ? 'low' : res < 22.9 ? 'normal' : res <24.9 ? 'risk to overweight' : res < 29.9 ? 'overweight' : 'obese';
    setimc(res);
    setLevel(lvl);
  }

  return (
    <Cabecera>
      <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => calculateIMC())}>
        <TextInput
          label="Weight"
          placeholder="Enter your weight (Kg)"
          {...form.getInputProps('Weight')}
        />

        <TextInput
          label="Height"
          placeholder="Enter your height (Centimeters)"
          {...form.getInputProps('Height')}
        />

        <Center position="right" mt="md">
          <Button type="submit">Calculate</Button>
        </Center>
      </form>
    </Box>
    <Box sx={{ maxWidth: 350 }} mx="auto">
      <h1>{imc != 0 ? 'Your imc is: '+imc.toFixed(2) : ''}</h1>
      <h1>
      {level != '' ? 'Your level is: '+level : ''}
      </h1>
    </Box>
    </Cabecera>
  )
}

export default imc
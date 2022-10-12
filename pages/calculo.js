import { useState, React } from 'react';
import Cabecera from './cabecera'
import Dietosintetico from './calculos/dietosintetico';
import { TextInput, Checkbox, Button, Group, Box, Chip, Select } from '@mantine/core';
import { useForm } from '@mantine/form';

const calculo = () => {
  const [valores, setValores] = useState()
  const form = useForm({
    initialValues: {
      Weight: '',
      formula: '',
      Height : '',
      age: '',
      gender: '',
      fa: '',
      clickled: false,
    },
  });

  const mostrarValor=()=>{
    form.values.clickled = true;
  }

  return (
    <Cabecera>
      <Group position='center' grow> 
      <form onSubmit={form.onSubmit((values) =>  mostrarValor() )}>
        <Box sx={{maxWidth: 400}} mx="auto">
          <TextInput
          withAsterisk
          label="Enter your weight (Kg)"
          placeholder="80"
          {...form.getInputProps('Weight')}
        />
        <TextInput
          withAsterisk
          label="Enter your height (Centimeters)"
          placeholder="180"
          {...form.getInputProps('Height')}
        />
        <TextInput
          withAsterisk
          label="Enter your age"
          placeholder="18"
          {...form.getInputProps('age')}
        />
        </Box>
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <Group position='center'>
          <Select
            label="select a formula"
              placeholder="Pick one"
                data={[
                { value: 'harris', label: 'HARRIS-BENEDICT' },
                { value: 'oms', label: 'OMS' },
                { value: 'owen', label: 'OWEN' },
                { value: 'valencia', label: 'VALENCIA' },
                { value: 'mifflin', label: 'MIFFLIN ST-JEOR' },
                ]}
                {...form.getInputProps('formula')}
          />

          <Select
            label="select your gender"
              placeholder="Pick one"
                data={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                ]}
                {...form.getInputProps('gender')}
          />

          <Select
            label="select your factor activity"
              placeholder="Pick one"
                data={[
                { value: 'sedentario', label: 'Sedentario' },
                { value: 'ligero', label: 'Ligero' },
                { value: 'moderado', label: 'Moderado' },
                { value: 'activo', label: 'Activo' },
                { value: 'vigoroso', label: 'Vigoroso' },
                ]}
                {...form.getInputProps('fa')}
          />

        </Group>

        <Group position="center" mt="md">
          <Button type="submit">Calculate</Button>
        </Group>
    </Box>
    </form>
    <Box>
      <Dietosintetico sexo={form.values.gender} peso={parseInt(form.values.Weight)} talla={parseInt(form.values.Height)} edad={parseInt(form.values.age)} factor={form.values.fa} formula={form.values.formula} >
      </Dietosintetico>
    </Box>
    </Group>
    <h1></h1>
   
    </Cabecera>
  );
}

export default calculo
import React from 'react'
import Cabecera from '../pages/cabecera'
import { TextInput, Group, Button, Stack, AppShell,Navbar, Header, Anchor } from '@mantine/core';

const Home = () => {
  return (
      <Cabecera>
        <Stack position='center' spacing='xs'>
          <TextInput
          placeholder="Your name"
          description = "Texto de descripcion"
          withAsterisk
          />
          <TextInput
          placeholder="Your phone number"
          style={{
            textEmphasisColor : "blue"
          }}
          description = "Texto de descripcion 2"
          withAsterisk = "false"
          />
        </Stack>
        {/* <Group position="apart" spacing="xl" grow>
      <Button color="cyan" variant="filled">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group> 
    */}
      </Cabecera>
      
  )
}

export default Home
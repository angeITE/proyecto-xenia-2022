import React from 'react'
import Link from 'next/link'
import { TextInput, Group, Button, Stack, AppShell,Navbar, Header, Anchor, Footer, useMantineTheme } from '@mantine/core';

const Cabecera = ({children}) => {
  const theme = useMantineTheme();
  return (
    <div>
        <AppShell
        padding="md"
        children
        navbar={<Navbar width={{ base: 150 }} height={825} p="xs"> 
            <Stack align="center" spacing="sm" justify="center">
            <Link href="/" passHref>
                <Anchor component="a">Inicio</Anchor>
            </Link> 
            <Link href="/imc" passHref>
                <Anchor component="a">IMC</Anchor>
            </Link>
            <Link href="/calculo" passHref>
                <Anchor component="a">Calculo</Anchor>
            </Link>
            <Link href="/buscador" passHref>
                <Anchor component="a">Buscador</Anchor>
            </Link>
            <Link href="/pruebas" passHref>
                <Anchor component="a">Pruebas</Anchor>
            </Link>
            </Stack>
        </Navbar>}
        // header={<Header height={60} p="xs">{/* Header content */}</Header>}
        footer={
            <Footer height={60} p="md">
              <Group position='center'>
                <Link href="/" passHref>
                  <Anchor component="a">Inicio</Anchor>
                </Link> 
                <Link href="/imc" passHref>
                  <Anchor component="a">IMC</Anchor>
                </Link>
                <Link href="/calculo" passHref>
                  <Anchor component="a">Calculo</Anchor>
                </Link>
                <Link href="/buscador" passHref>
                  <Anchor component="a">Buscador</Anchor>
                </Link>
              </Group>
            </Footer>
          }
          styles={{
            main: {
              background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          }}
        >
            {children}
        </AppShell>
    </div>
  )
}

export default Cabecera
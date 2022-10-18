import React from 'react'
import { TextInput, Group, Button, Stack, Box , Container, Center} from '@mantine/core';
import { useState } from 'react';
import app from '../pages/firebase/initFirebase';
import Link from 'next/link';
import { useAuth } from './firebase/authContext';
import { useRouter } from 'next/router';


const Home = () => {

  const router = useRouter()
  const {userlog} = useAuth()
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

   const login = (e) => {
     e.preventDefault();
     let usuario = user;
     let contraseña = password;

     app.auth().signInWithEmailAndPassword(usuario, contraseña).then(u => {})
     .catch(function(error)
     {console.log(error)}
     );
     console.log(app)
   } 

   const signUp = (e) => {
     let usuario = user;
     let contraseña = password;
     app.auth().createUserWithEmailAndPassword(usuario, contraseña).then(u = {})
     .catch(function(error)
   {console.log(error)}
     );
   }

  return (
    <div>
      { userlog ? 
      <Container size={200} px={0}>
      <TextInput
      placeholder="index "
      description = "Texto de descripcion"
      value={user}
      onChange = { (e) => setUser(e.currentTarget.value)}
      withAsterisk
      />
      <TextInput
      placeholder="index 2"
      description = "Texto de descripcion 2"
      value={password}
      onChange= {(e) => setPassword(e.currentTarget.value)}
      withAsterisk = "false"
      />
      <Center>
  <Button onClick={ (e) => login(e)}><Link href='/imc'>Ingresar</Link></Button>
      </Center>
</Container>
:
router.push('/login')
      }
    </div>
  )
}

export default Home
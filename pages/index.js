import React from 'react'
import { TextInput, Group, Button, Stack, Box , Container, Center} from '@mantine/core';
import { useState } from 'react';
import app from './authentification/initFirebase';
import firebase from 'firebase'

const Home = () => {

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
      <Container size={200} px={0}>
          <TextInput
          placeholder="Your username"
          description = "Texto de descripcion"
          value={user}
          onChange = { (e) => setUser(e.currentTarget.value)}
          withAsterisk
          />
          <TextInput
          placeholder="Your password"
          description = "Texto de descripcion 2"
          value={password}
          onChange= {(e) => setPassword(e.currentTarget.value)}
          withAsterisk = "false"
          />
          <Center>
      <Button >Ingresar</Button>
          </Center>
    </Container>
    </div>
       
      
      
  )
}

export default Home
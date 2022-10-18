import { LoadingOverlay } from '@mantine/core'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
// import Home from '../pages';
import auth from './initFirebase'
import { useRouter } from 'next/router';

const authContext = createContext<any>({})
export const authContextProvider = ({children}) => {

const router = useRouter()
const [user, setUser] = useState<any>(null)
const [loading, setLoading] = useState(true)

useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
    if(user) {
    setUser({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    })
    } else {
      setUser(null)
    } 
    setLoading(false)
    })
    return () => unsuscribe()
}, [])

const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

const logout = async () => {
  setUser(null)
  await signOut(auth)
}

const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}
return <authContext.Provider value={{user, login, logout, createUser}}>{user === null ? (loading ? <LoadingOverlay visible={loading} overlayBlur={2}></LoadingOverlay> : router('/imc')) : children}</authContext.Provider>
}

export const useAuth = useContext(authContext)
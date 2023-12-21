'use client'
import { auth } from '@/firebase/firebase.config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export function AuthProvider( { children } ) {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null
  })

const createUser = async (values) => {
  await createUserWithEmailAndPassword(auth, values.email, values.password)
  .catch(error => alert(`No se pudo crear el usuario por el error: ${error.message}`))
}

const loginUser = async (values) => {
  await signInWithEmailAndPassword(auth, values.email, values.password)
  .catch(error => alert(`No se pudo iniciar sesión por el error: ${error.message}`))
}

const logout = () => {
  signOut(auth)
}

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser({
        logged: true,
        email: user.email,
        uid: user.uid
      })} else {
        setUser({
          logged: false,
          email: null,
          uid: null
        })
      }
  })
})
  return(
    <AuthContext.Provider value={{
      user,
      createUser,
      loginUser,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

'use client'
import { useAuthContext } from '@/contexts/AuthContext'
import { Button, Tooltip } from '@nextui-org/react'
import { signout } from '@/styles/icons'

export default function AdminLayout({ children, login }) {
  const { user, logout } = useAuthContext()
  if (user.logged){
  return(
      children
  )
  }
  return(
    login
  )
}
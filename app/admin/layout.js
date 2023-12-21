'use client'
import { useAuthContext } from '@/contexts/AuthContext'

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
'use client'
import { useAuthContext } from '@/contexts/AuthContext'

export default function AdminLayout({ children, login }) {
  const { user } = useAuthContext()
  return(
    user.logged ? children : login
  )
}
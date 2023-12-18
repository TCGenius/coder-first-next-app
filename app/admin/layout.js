export default function AdminLayout({ children, login }) {
  const isLoggedIn = true
  return(
    isLoggedIn ? children : login
  )
}
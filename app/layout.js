import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Message from '@/components/ui/Message'
import { CartProvider } from '@/contexts/CartContext'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Electrodomésticos Capellari',
  description: 'Electrodomésticos Capellari',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-gray-200'>
      <body className={inter.className}>
        <Providers> {/*Necesario para utilizar Next UI*/}
          <AuthProvider>
            <CartProvider>
              <Header />
                {children}
            </CartProvider>
            <Message />
            <Footer />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  )
}

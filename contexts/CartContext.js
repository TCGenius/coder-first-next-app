'use client'
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        let cartSpread = [...cart]
        cartSpread.push.apply(cartSpread, product) //This way, we can push array items into another array
        setCart(cartSpread)
    }

    const removeFromCart = (product) => {
        let cartSpread = [...cart]
        cartSpread.splice(product, 1) //The product param is the index of the item
        setCart(cartSpread)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
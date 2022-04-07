import { createContext } from "react";
import { useState } from "react";



export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const agregarCarrito = (item) => {
        setCart( [...cart, item] )
    }

    const inCart = (id) =>{
        return cart.some((prod) => prod.id === id)
    }  

    const eliminarItem = (id) =>{
        setCart(cart.filter((item)=> item.id !== id))
    }

    const limpiarCarrito = () =>{
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart, agregarCarrito, inCart, eliminarItem, limpiarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}


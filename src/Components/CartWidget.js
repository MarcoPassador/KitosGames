import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const CartWidget = () =>{
    const {cart} = useContext(CartContext)
    return(
        <div>
            <span className="cartnum">{cart.length}</span><i class="fas fa-shopping-cart fa-3x icos"></i>
        </div>
    )
}

export default CartWidget
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";


const CartWidget = () =>{
    const {cart} = useContext(CartContext)


    return(
          
        cart.length === 0?
        <>
        
        </>:
        <>
            <div>
                <Link to="/carrito" className="cartIcon"><span className="cartnum">{cart.length}</span><i class="fas fa-shopping-cart fa-3x icos"></i> </Link>
            </div>
        </>

    )
}

export default CartWidget
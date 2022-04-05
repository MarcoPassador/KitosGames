import React from 'react'
import { useContext } from 'react'
import { CartContext } from './Context/CartContext'

const Cart = () => {

    const {cart, limpiarCarrito} = useContext(CartContext)

    const {eliminarItem} = useContext(CartContext)

    let totalprice = 0

    cart.map((item) => totalprice= item.subtot + totalprice)


  return (

      <div className='cartDiv'>

          <h2>Carrito de compras</h2>
            {
              cart.map((item)=>
              <>
                <div className='cartItem'>
                    <img src={item.img} alt="miniatura"/>
                    <div className='cartCont'>
                        <h3>{item.name}</h3>
                        <h4>Precio $ {item.prices}</h4>
                        <h4>Cantidad: {item.count}</h4>
                        <h4>Subtotal: $ {item.subtot}</h4>

                    </div>
                    <button onClick={()=>eliminarItem(item.id)} className='btnCart'>X</button>
                </div>
              </>
              )
            }

          <div>
              <h3>Total:$ {totalprice}</h3>
          </div>
          <div>
            <button className='counterCart' onClick={()=> limpiarCarrito()}>Borrar todo</button>
          </div>

        </div>
      
  )
}

export default Cart
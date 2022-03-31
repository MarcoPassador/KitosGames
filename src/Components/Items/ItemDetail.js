import React, { useContext } from 'react'
import ItemCounter from './ItemCounter'
import { useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({name, img, detail, stock, prices, id}) => {
  

  const [count, setCount] = useState(1);

  const {agregarCarrito, inCart} = useContext(CartContext)

  const agregar = () =>{
    if (count === 0) return

    if (!inCart(id)){
      const itemCart = {
        name,
        id,
        img,
        prices,
        count,
        subtot: prices * count,
      
      }
      
      agregarCarrito(itemCart)
    }

  }
    



  return (
    <div className='detailPage'>
      <div className='itemDetail'>
        <img src={img} alt="portada"/>
        <div className='detailCont'>
          <h2>{name}</h2>
          <h4 className='detailPrice'>$ {prices}</h4>
          <p>{detail}</p>
          
          {
            inCart(id)?
              <>
                <Link className='comprado' to="/carrito"><button className='counterCart'>Ver en el carrito</button></Link>
              
              </>
              :
              <>
                <div className='counterDetail'>
                  <ItemCounter max={stock} count={count} setCount={setCount} agregar={agregar}/>
                </div>
              </>
          }

        </div>
      </div>
    </div>
  )
}

export default ItemDetail
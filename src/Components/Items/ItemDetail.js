import React, { useContext } from 'react'
import ItemCounter from './ItemCounter'
import { useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({name, img, detail, stock, prices, id}) => {
  

  const [count, setCount] = useState(1);

  const { inCart} = useContext(CartContext)
    

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
                  <ItemCounter max={stock} count={count} setCount={setCount} name={name} prices={prices} img ={img} id={id}/>
                </div>
              </>
          }

        </div>
      </div>
    </div>
  )
}

export default ItemDetail
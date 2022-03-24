import React from 'react'
import ItemCounter from './ItemCounter'
import { useState } from 'react';

const ItemDetail = ({name, img, detail, stock, prices}) => {
  

  const [count, setCount] = useState(1);

  const agregar = () =>{
    const itemCart = {
      name,
      img,
      prices,
      count
    }
    console.log(itemCart)
  }
    



  return (
    <div className='detailPage'>
      <div className='itemDetail'>
        <img src={img} alt="portada"/>
        <div className='detailCont'>
          <h2>{name}</h2>
          <h4 className='detailPrice'>$ {prices}</h4>
          <p>{detail}</p>
          <div className='counterDetail'>
            <ItemCounter max={stock} count={count} setCount={setCount} agregar={agregar}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
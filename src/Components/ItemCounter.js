import React, {useState} from 'react'
import { Link } from 'react-router-dom'



const ItemCounter = ({max, count=1, setCount, agregar}) => {


  const restar = () =>{
    count > 1 && setCount(count-1)
  }

  const sumar = () =>{
    count < max && setCount(count+1)
  }

    


  return (
      <div className='counter'>
        <div className='counterDiv'>
            <button className='counterBtn' onClick={restar}>-</button>
            <label className='counterNum'>{count}</label>
            <button className='counterBtn' onClick={sumar}>+</button>
        </div>
        <i>Stock:{max}</i>
        <Link to="/cart"><button className='counterCart' onClick={agregar}>Agregar al carrito</button></Link>
    </div>
  )
}

export default ItemCounter
import React, {useState} from 'react'



const ItemCounter = (props) => {

    const [count, setCount] = useState(1);


  return (
      <div>
        <div className='counterDiv'>
            <button className='counterBtn' onClick={()=>count > 0 ? setCount(count-1) : count}>-</button>
            <label className='counterNum'>{count}</label>
            <button className='counterBtn' onClick={()=>count < props.stock ? setCount(count+1) : count}>+</button>
        </div>
        <i>Stock:{props.stock}</i>
        <button className='counterCart'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCounter
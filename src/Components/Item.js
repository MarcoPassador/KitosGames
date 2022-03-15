import React from 'react'
import ItemCounter from './ItemCounter'



function Item ({name, price, img, stocks}) {

  return (
    <div className="itemDiv">
            <img src={img} alt="placeholder"/>
            <h3>{name}</h3>
            <p>$ {price}</p>
            <ItemCounter stock={stocks}/>
    </div>
  )
}

export default Item
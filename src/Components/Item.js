import React from 'react'
import ItemCounter from './ItemCounter'
import ItemDetailContainer from './ItemDetailContainer'



function Item ({name, price, img, stocks, detail}) {
  console.log(img)
  

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
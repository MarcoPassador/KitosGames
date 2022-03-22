import React from 'react'
import ItemCounter from './ItemCounter'

const ItemDetail = ({item}) => {
  console.log(item.img)
    



  return (
    <div className='detailPage'>
      <div className='itemDetail'>
        <img src={item.img} alt="portada"/>
        <div className='detailCont'>
          <h2>{item.name}</h2>
          <h4 className='detailPrice'>$ {item.price}</h4>
          <p>{item.detail}</p>
          <div className='counterDetail'>
            <ItemCounter stock={item.stock}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
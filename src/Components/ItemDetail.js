import React from 'react'
import ItemCounter from './ItemCounter'

const ItemDetail = ({item}) => {
    



  return (
    <div className='detailPage'>
        <img src={item.img}/>
        <div className='detailCont'>
            <h2>{item.name}</h2>
            <h4>$ {item.price}</h4>
            <p>{item.detail}</p>
            <div className='counterDetail'>
                <ItemCounter stock={12}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
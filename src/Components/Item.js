import React from 'react'
import { Link } from 'react-router-dom'
import ItemCounter from './ItemCounter'


function Item ({name, price, img, stocks, detail, id}) {
  

  return (
    <div className="itemDiv">
            <img src={img} alt="portada"/>
            <h3>{name}</h3>
            <p>$ {price}</p>
            <ItemCounter max={stocks} />
            <Link  className='detailLink' to={`/detalle/${id}`}><span>Ver más</span></Link>
            
    </div>
  )
}

export default Item
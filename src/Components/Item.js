import React from 'react'
import ItemCounter from './ItemCounter'
import jg1 from './img/juego1.jpg'
import jg2 from './img/juego2.jpg'
import jg3 from './img/juego3.png'
import jg4 from './img/juego4.png'

const Items = () => {
  return (
      <>
        <div className="itemDiv">
            <img src={jg1} alt="placeholder"/>
            <h3>God of War</h3>
            <p>Precio: $5000</p>
            <ItemCounter stock={7}/>
        </div>
        <div className="itemDiv">
            <img src={jg3} alt="placeholder"/>
            <h3>Skyrim</h3>
            <p>Precio: $5600</p>
            <ItemCounter stock={10}/>
        </div>
        <div className="itemDiv">
            <img src={jg2} alt="placeholder"/>
            <h3>Elden Ring</h3>
            <p>Precio: $7300</p>
            <ItemCounter stock={8}/>
        </div>
        <div className="itemDiv">
            <img src={jg4} alt="placeholder"/>
            <h3>Horizon Forbidden West</h3>
            <p>Precio: $7000</p>
            <ItemCounter stock={5}/>
        </div>
      
      </>
    
  )
}

export default Items
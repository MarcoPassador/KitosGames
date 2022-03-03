import React from "react"

import placeholder from "./img/placeholder.jpg"

const ItemlistContainer = () =>{
    return(
        <div className="listContainer">
            <div className="itemDiv">
                <img src={placeholder} alt="placeholder"/>
                <h3>Juego</h3>
            </div>
            <div className="itemDiv">
                <img src={placeholder} alt="placeholder"/>
                <h3>Juego</h3>
            </div>
            <div className="itemDiv">
                <img src={placeholder} alt="placeholder"/>
                <h3>Juego</h3>
            </div>
            <div className="itemDiv">
                <img src={placeholder} alt="placeholder"/>
                <h3>Juego</h3>
            </div>
            
        </div>
    )
}

export default ItemlistContainer
import React from "react";
import CartWidget from "./CartWidget.js"

import logo from "./img/logo.png"

const NavBar = () =>{
    return (
        <>
        <header className='headers'>
        <div className="banner">
          <img src={logo} alt=""/>
          <h1>KITOS GAMES</h1>
          <CartWidget/>
        </div>
        <nav className='nave'>
          <ul>
            <li className="navlink"><span><a href='#'>Inicio</a></span></li>
            <li className="navlink"><span> <a href='#'>Pc</a></span></li>
            <li className="navlink"> <span><a href='#'>Ps4</a></span></li>
            <li className="navlink"> <span> <a href='#'>Xbox One</a></span></li>
          </ul>
        </nav>
      </header>
        </>
    )
}

export default NavBar
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div>
            <label>CopyrightÂ©</label>
        </div>
        <div>
            <Link to="/"><label>Volver al Inicio</label></Link>
        </div>
        <div>
            <a href='#'><label>Terminos y Condiciones</label></a>
        </div>
    </footer>
  )
}

export default Footer
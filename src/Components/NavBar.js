
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.js"
import logo from "./img/logo.png"


const NavBar = () =>{



    return (
        <>
          <header className='headers'>
            <div className="banner">
              {/* <h1>KITOS GAMES</h1> */}
              <img src={logo} alt="banner"/>
              <CartWidget/>
            </div>
            <nav className='nave'>
              <ul>
                <li className="navlink"><span><Link to='/'>Inicio</Link></span></li>
                <li className="navlink"><span> <Link to='/juegos/pc'>Pc</Link></span></li>
                <li className="navlink"> <span><Link to='/juegos/ps4'>Ps4</Link></span></li>
                <li className="navlink"> <span> <Link to='/juegos/xbox'>Xbox One</Link></span></li>
              </ul>
            </nav>
        </header>
        </>
    )
}

export default NavBar

import './App.css';
import ItemlistContainer from './Components/Items/ItemlistContainer';
import NavBar from './Components/NavBar';
import ItemDetailContainer from './Components//Items/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CartContext } from './Components/Context/CartContext';
import { useState } from 'react';
import Cart from './Components/Cart';

function App() {

  // CartContext

  const [cart, setCart] = useState([])

  const agregarCarrito = (item) => {
    setCart( [...cart, item] )
  }

  const inCart = (id) =>{
    return cart.some((prod) => prod.id === id)
  }  

  const eliminarItem = (id) =>{
    setCart(cart.filter((item)=> item.id !== id))
  }

  const limpiarCarrito = () =>{
    setCart([])
  }

  
  return (
    <CartContext.Provider value= {{cart,agregarCarrito, inCart, eliminarItem, limpiarCarrito}}>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemlistContainer/>}/>
            <Route path='/carrito' element={<Cart/>}/>
            <Route path='/juegos/:gameCat' element={<ItemlistContainer/>}/>
            <Route path='detalle/:gameId' element={<ItemDetailContainer/>}/>

            <Route path='*' element={<Navigate to="/"/>}/>
          </Routes>
        
          
          <footer>

          </footer>
          

        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;

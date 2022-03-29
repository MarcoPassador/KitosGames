
import './App.css';
import ItemlistContainer from './Components/ItemlistContainer';
import NavBar from './Components/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CartContext } from './Components/CartContext';
import { useState } from 'react';

function App() {

  // CartContext

  const [cart, setCart] = useState([])

  const agregarCarrito = (item) => {
    setCart( [...cart, item] )
  }

  const inCart = (id) =>{
    return cart.some((prod) => prod.id === id)
  }  

  
  return (
    <CartContext.Provider value= {{cart,agregarCarrito, inCart}}>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemlistContainer/>}/>
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

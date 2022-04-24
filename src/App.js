
import './App.css';
import ItemlistContainer from './Components/Items/ItemlistContainer';
import NavBar from './Components/NavBar/NavBar.js';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {  CartProvider } from './Components/Context/CartContext.js';
import Cart from './Components/Cart/Cart.js';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/Footer/Footer';

function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemlistContainer/>}/>
            <Route path='/carrito' element={<Cart/>}/>
            <Route path='/juegos/:gameCat' element={<ItemlistContainer/>}/>
            <Route path='detalle/:gameId' element={<ItemDetailContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}/>

            <Route path='*' element={<Navigate to="/"/>}/>
          </Routes>
        
          <Footer/>
          
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

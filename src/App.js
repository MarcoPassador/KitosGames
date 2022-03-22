
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

function App() {
  
  return (
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
  );
}

export default App;

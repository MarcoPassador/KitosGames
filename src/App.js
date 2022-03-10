
import './App.css';
import ItemlistContainer from './Components/ItemlistContainer';
import NavBar from './Components/NavBar';
import banner from "./Components/img/banner.jpg"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <body>
        <img className='bannerimg' src={banner} alt="banner"/>
      <ItemlistContainer/>
      </body>
      
      <footer>
        

      </footer>
      

    </div>
  );
}

export default App;


import './App.css';
import ItemlistContainer from './Components/ItemlistContainer';
import NavBar from './Components/NavBar';
import banner from "./Components/img/banner.jpg"
import ItemDetailContainer from './Components/ItemDetailContainer';
import imgs from "./Components/img/juego1.jpg"

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <main>
        <img className='bannerimg' src={banner} alt="banner"/>
        <ItemlistContainer/>
        <div className='itemDetail'>
        <ItemDetailContainer name="God of War" price={5000} img={imgs} detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec justo odio. Fusce ultricies ipsum et purus finibus porttitor. Integer gravida sagittis dui sed blandit. Etiam ultrices ligula sed nisl vehicula commodo. Integer ac sapien mi. Pellentesque erat purus, semper id risus aliquam, commodo semper enim. In viverra scelerisque tincidunt. Sed et accumsan enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut faucibus turpis."/>
        </div>
      </main>
      
      <footer>
        

      </footer>
      

    </div>
  );
}

export default App;

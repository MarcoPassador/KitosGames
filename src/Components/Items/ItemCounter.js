import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom";
import swal from 'sweetalert';


const ItemCounter = ({max, name, id, img, prices}) => {

  const [count, setCount] = useState(1);

  const {agregarCarrito, inCart} = useContext(CartContext)


  const restar = () =>{
    count > 1 && setCount(count-1)
  }

  const sumar = () =>{
    count < max && setCount(count+1)
  }

  const agregar = () =>{
    if (count === 0) return

    if (!inCart(id)){
      const itemCart = {
        name,
        id,
        img,
        prices,
        count,
        subtot: prices * count,
      
      }
      
      agregarCarrito(itemCart)

      swal({
        title:`${name} agregado al carrito`,
        icon:"success",
        button:"¡Genial!"
      })
    }

  }

  return (

    
      inCart(id)?
        <>
          <Link className='compradoItem' to="/carrito"><button className='counterCart'>Ver en el carrito</button></Link>
        </>
        :
        <>
          <div>
            <div className='counter'>
              <div className='counterDiv'>
                  <button className='counterBtn' onClick={restar}>-</button>
                  <label className='counterNum'>{count}</label>
                  <button className='counterBtn' onClick={sumar}>+</button>
              </div>
              <i>Stock:{max}</i>
              <button className='counterCart' onClick={agregar}>Agregar al carrito</button>
            </div>
          </div>
        </>
    

      
  )
}

export default ItemCounter
import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { db } from '../../firebase/config'
import { CartContext } from '../Context/CartContext'

const Checkout = () => {


    const {cart, limpiarCarrito} = useContext(CartContext)

    let totalprice = 0

    let idOrder = ""

    cart.map((item) => totalprice= item.subtot + totalprice)

    

    const [datos, setDatos] = useState({
        nombre: "",
        apellido:"",
        email:""
})

const generarOrden = () =>{
    const orden = {
        comprador: {datos},
        item: cart,
        total: totalprice
    }

    const orderRef = collection(db, "ordenes")

    addDoc(orderRef, orden)
    .then((doc)=> doc.id = idOrder)
    
}

    const enviarDatos = (e) =>{
        e.preventDefault()

        if (datos.nombre.length < 2){
            alert("Nombre invalido")
            return
        }

        if (datos.apellido.length < 2){
            alert("Apellido invalido")
            return
        }

        if(datos.email.length < 5){
            alert("Email invalido")
            return
        }

        generarOrden()

        alert(`Gracias por elegirnos ${datos.nombre}, tu id de orden es ${idOrder}`)
        limpiarCarrito()
}
    

    const inputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })

    }

    if(cart.length === 0){
        return <Navigate to="/"/>
    }




  return (
    <div className='divCheck'>
        <h2>Checkout</h2>
        <div className='divForm'>
            <h3 className='tituCheck'>Ingrese sus datos</h3>
            <form action="" className="formCheck" onSubmit={enviarDatos}>
                <div className="inputCheck">
                    {/* <label>Nombre</label> */}
                    <input type="text" name='nombre' placeholder="Ingresar nombre" className="inputsCheck" value={datos.name} onChange={inputChange}/>
                </div>
                 <div className="inputCheck">
                    {/* <label>Apellido</label> */}
                    <input type="text" name="apellido" placeholder="Ingresar apellido" classname="inputsCheck" value={datos.apellido} onChange={inputChange}/>
                </div>
                <div className="inputCheck">
                    {/* <label>Email</label> */}
                    <input type="email" name="email" placeholder="Ingresar email" className="inputsCheck" value={datos.email} onChange={inputChange}/>
                </div>
                    <input type="submit" value="Finalizar" className="btnCheck" id="btnCheck"/>
            </form>
            <div>
                <h3>Su resumen de compra:</h3>
                {cart.map((el)=>
                    <>
                        <div className='resuCheck'>
                            <label><b>Nombre :</b>{el.name}</label>
                            <label><b>Cantidad: </b>{el.count}</label>
                            <label><b>Subtotal: </b>$ {el.subtot}</label>
                        </div>
                    
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Checkout
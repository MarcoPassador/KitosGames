import React, { useEffect, useState } from "react"
import Item from "./Item"
import img1 from "./img/juego1.jpg"
import img2 from "./img/juego2.jpg"
import img3 from "./img/juego3.png"
import img4 from "./img/juego4.png"



function ItemlistContainer  () {

    const [itemlist, setItem] = useState ([])

    function Cargar(){

        let listgames = [
            {
                name:"God of War",
                price: 5000,
                img: {img1},
                stock:7
            },
            {
                name:"Skyrim",
                price: 3800,
                img: {img3},
                stock:10
            },
            {
                name:"Elden Ring",
                price: 7000,
                img: {img2},
                stock:15
            },
            {
                name:"Horizon Forbbiden West",
                price: 6000,
                img: {img4},
                stock: 11
            }
        ]
        
        return new Promise ((resolve, reject) =>{
            setTimeout(()=>{
                if(listgames.length===0){
                    reject("No se pudo traer la lista de juegos")
                }else{
                    resolve(listgames)
                }
            },5000)
        })
    }

    useEffect(()=>{
        Cargar().then((lista)=>setItem(lista)).catch((error)=>console.log(error))
    })


    
    return(
        <div className="listContainer">
            {
                itemlist.map((item)=><Item name={item.name} price={item.price} img={item.img} stocks={item.stock} />)
            }
        </div>
    )
}

export default ItemlistContainer
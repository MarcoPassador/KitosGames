import React, { useEffect, useState } from "react"
import { listgames } from "../stock"
import Item from "./Item"
import banner from "../img/banner.jpg"
import { useParams } from "react-router-dom"




function ItemlistContainer  () {

    const [itemlist, setItem] = useState ([])

    const {gameCat} = useParams()

    function Cargar(){

       
        
        return new Promise ((resolve, reject) =>{
            setTimeout(()=>{
                if(listgames.length===0){
                    reject("No se pudo traer la lista de juegos")
                }else{
                    resolve(listgames)
                }
            },2000)
        })
    }

    useEffect(()=>{
        Cargar().then((lista)=>{
            if(!gameCat){
                setItem(lista)
            }else{
                setItem(lista.filter((games)=> games.category === gameCat))
            }
            })
            .catch((error)=>console.log(error))
    },[gameCat])


    
    return(
        <div className="listContainer">
            <img className='bannerimg' src={banner} alt="banner"/>
            {
                itemlist.map((item)=><Item name={item.name} price={item.price} img={item.img} stocks={item.stock} detail={item.detail} id={item.id} />)
            }
        </div>
    )
}

export default ItemlistContainer
import React, { useEffect, useState } from "react"
import { listgames } from "../stock"
import Item from "./Item"
import banner from "../img/banner.jpg"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import {db} from "../../firebase/config"




function ItemlistContainer  () {

    const [itemlist, setItem] = useState ([])

    const {gameCat} = useParams()






    // function Cargar(){

       
        
    //     return new Promise ((resolve, reject) =>{
    //         setTimeout(()=>{
    //             if(listgames.length===0){
    //                 reject("No se pudo traer la lista de juegos")
    //             }else{
    //                 resolve(listgames)
    //             }
    //         },2000)
    //     })
    // }

    useEffect(()=>{
        
        const gamesRef = collection(db, "juegos")
        const q = gameCat? query(gamesRef, where("category", "==", gameCat)) : gamesRef

        getDocs(q)
        .then((resp) => {
            setItem(resp.docs.map((doc)=>{
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
        
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
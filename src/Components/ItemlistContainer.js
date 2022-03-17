import React, { useEffect, useState } from "react"
import Item from "./Item"



function ItemlistContainer  () {

    const [itemlist, setItem] = useState ([])

    function Cargar(){

        let listgames = [
            {
                name:"God of War",
                price: 5000,
                img: "./img/juego1.jpg",
                stock:7,
                detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec justo odio. Fusce ultricies ipsum et purus finibus porttitor. Integer gravida sagittis dui sed blandit. Etiam ultrices ligula sed nisl vehicula commodo. Integer ac sapien mi. Pellentesque erat purus, semper id risus aliquam, commodo semper enim. In viverra scelerisque tincidunt. Sed et accumsan enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut faucibus turpis."
            },
            {
                name:"Skyrim",
                price: 3800,
                img: "./img/juego3.png",
                stock:10,
                detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec justo odio. Fusce ultricies ipsum et purus finibus porttitor. Integer gravida sagittis dui sed blandit. Etiam ultrices ligula sed nisl vehicula commodo. Integer ac sapien mi. Pellentesque erat purus, semper id risus aliquam, commodo semper enim. In viverra scelerisque tincidunt. Sed et accumsan enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut faucibus turpis."
            },
            {
                name:"Elden Ring",
                price: 7000,
                img: "./img/juego2.jpg",
                stock:15,
                detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec justo odio. Fusce ultricies ipsum et purus finibus porttitor. Integer gravida sagittis dui sed blandit. Etiam ultrices ligula sed nisl vehicula commodo. Integer ac sapien mi. Pellentesque erat purus, semper id risus aliquam, commodo semper enim. In viverra scelerisque tincidunt. Sed et accumsan enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut faucibus turpis."
            },
            {
                name:"Horizon Forbbiden West",
                price: 6000,
                img: "./img/juego4.png",
                stock: 11,
                detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec justo odio. Fusce ultricies ipsum et purus finibus porttitor. Integer gravida sagittis dui sed blandit. Etiam ultrices ligula sed nisl vehicula commodo. Integer ac sapien mi. Pellentesque erat purus, semper id risus aliquam, commodo semper enim. In viverra scelerisque tincidunt. Sed et accumsan enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut faucibus turpis."
                
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
    },[])


    
    return(
        <div className="listContainer">
            {
                itemlist.map((item)=><Item name={item.name} price={item.price} img={item.img} stocks={item.stock} detail={item.detail} />)
            }
        </div>
    )
}

export default ItemlistContainer
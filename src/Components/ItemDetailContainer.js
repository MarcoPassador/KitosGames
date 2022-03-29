import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { listgames } from './stock'

const ItemDetailContainer = () => {

    

    const [itemdet, setList] = useState ([])

    const {gameId} = useParams()

    function GetList (){
        
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                if(listgames.length === 0){
                    reject("Error, no se pudieron traer los datos")
                } else{
                    resolve(listgames)
                }

            }, 2000)

        })

    }

    useEffect(()=>{
        GetList().then((res)=>{
            setList(res.find((item)=> item.id === Number(gameId)))
        })
        .catch((error)=>console.log(error))
    },[])

    return (
      <div className='containerDetail'>
        <ItemDetail name ={itemdet.name} price={itemdet.price} img={itemdet.img} prices={itemdet.price} detail={itemdet.detail} stock = {itemdet.stock} id ={itemdet.id}/>
      </div>
      
  )
}

export default ItemDetailContainer
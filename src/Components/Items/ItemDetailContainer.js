import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { db } from '../../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    

    const [itemdet, setList] = useState ([])

    const {gameId} = useParams()

    useEffect(()=>{
        
        const gameRef = doc(db, "juegos", gameId)

        getDoc(gameRef)
        .then((doc)=>{
            setList({id: doc.id, ...doc.data()})
        })

    },[])

    console.log(itemdet)

    return (
      <div className='containerDetail'>
        <ItemDetail name ={itemdet.name} price={itemdet.price} img={itemdet.img} prices={itemdet.price} detail={itemdet.detail} stock = {itemdet.stock} id ={itemdet.id}/>
      </div>
      
  )
}

export default ItemDetailContainer
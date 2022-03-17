import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({name, price, img, detail}) => {

    const detailsReady={price, img, name, detail}

    const [itemdetails, setDetails] = useState ([])

    function GetDetails (){
        
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                if(detailsReady.length === 0){
                    reject("Error, no se pudieron traer los datos")
                } else{
                    resolve(detailsReady)
                }

            }, 2000)

        })

    }

    useEffect(()=>{
        GetDetails().then((res)=>setDetails(res)).catch((error)=>console.log(error))
    },[])

    return (
      <>
      <ItemDetail item={itemdetails}/>
      </>
  )
}

export default ItemDetailContainer
import React, { useEffect, useState } from 'react'
import { mFetch } from '../../helpers/mFetch'
import { useParams } from 'react-router-dom'

import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const {pid} = useParams()

    useEffect(()=>{
        mFetch(pid)///llamando api
        .then(resultado =>setProduct(resultado))
        .catch(error => console.log(error))

    }, [])


  return (

    <div>
        <ItemDetail product={product} />    
    </div>
 
  )
}

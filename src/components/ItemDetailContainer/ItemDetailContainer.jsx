import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom'
import { FaSpinner } from "react-icons/fa6";
import { ItemDetail } from '../ItemDetail/ItemDetail'


import "./ItemDetailContainer.css"


const Loading = () => {

  useEffect(()=>{
    return() =>{
      console.log('desmontaje loading')
    }
  })

  return <div className='spinner'> <FaSpinner/> </div>

}

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {pid} = useParams()

     /// Llamando base de datos firebase
    useEffect(()=>{
      const baseDatosFirestore = getFirestore()
      const queryDoc = doc(baseDatosFirestore, 'libros', pid)
      getDoc(queryDoc)
      .then(res => setProduct({id: res.id, ...res.data()}))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }, [])

  return (

    <div>
      <>
      {
        loading ? 
        <Loading/>
      :
      <ItemDetail product={product} />   
      }
      </>
         
    </div>
 
  )
}

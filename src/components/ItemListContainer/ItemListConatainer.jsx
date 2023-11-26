import { useEffect, useState } from "react"
import{collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import { useParams } from "react-router-dom"
import { FaSpinner } from "react-icons/fa6";
import { ItemList } from "../ItemList/ItemList"

import "./ItemListConatainer.css"

const Loading = () => {
  useEffect(()=>{
    return() =>{
      console.log('desmontaje loading')
    }
  })
  return <div className="spinner" ><FaSpinner/></div>
}

const ItemListConatainer = ({greeting='Bienvenido a Caja de Libros'}) => {

  const [products, setProducts]= useState([])
  const [loading, setLoading] = useState(true)
  const {cid} = useParams()

  ///LLamado firestore

  useEffect(()=>{
    const baseDatosFirestore = getFirestore()
    const queryCollection = collection(baseDatosFirestore, 'libros')

    if(cid){
      ///llamando base de datos por filtro usando query para filtrar
    
      ///query para hacer filtrado
      const queryFilter = query(queryCollection, where('category', '==', cid))

      getDocs(queryFilter)
      .then(res=> setProducts( res.docs.map(product => ({id: product.id, ...product.data()}))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

    }else{

       //// Llamando a la base de datos  firestore
  
      getDocs(queryCollection)
      .then(res=> setProducts( res.docs.map(product => ({id: product.id, ...product.data()}))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

    }

  },[cid])


  console.log('REnder ItemListContainer')

  return (

    <>
          
      { loading ? 
          <Loading/>
        :

        <ItemList products={products}/>
      }
       
    </>
  
  )
}

export default ItemListConatainer
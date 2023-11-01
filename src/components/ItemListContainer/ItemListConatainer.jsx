import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"

import "./ItemListConatainer.css"

const ItemListConatainer = ({greeting='Bienvenido a Caja de Libros'}) => {

  const [products, setProducts]= useState([])
  const [loading, setLoading] = useState(true)
  const {cid} = useParams()

  //Llamando API (fetch)
  useEffect(()=>{

    if(cid){
      mFetch()
      .then(resultado => setProducts(resultado.filter(product => product.category === cid)))
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))

    }else{
      mFetch()
      .then(resultado => setProducts(resultado))
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))
    }
  }, [cid])


  return (

    <>
     <div className="alineacion">
         {greeting}
     </div>

     <div className="row">
    { loading ? <h2>loading</h2>
      :
      <ItemList products={products}/>
    }
       </div>
    </>
   
  
  )
}

export default ItemListConatainer
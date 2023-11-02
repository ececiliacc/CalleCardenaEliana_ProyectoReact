import React from 'react'
import { Link } from 'react-router-dom'

import "./ItemList.css"

export const ItemList = ({products}) => {
  return (
    <>
    <div className='row-container'>
          { 
            products.map(product =>  <div key={product.id} className="card card-product">
                                   
                                        <img src={product.imageUrl} className="card-img-top card-imagen" />
                                        <div className="card-body">
                                            <p className='card-titulo'>{(product.title).toUpperCase()}</p>
                                            <p className='card-autor'>Autor: <p>{product.author}</p> </p>
                                            <p className='card-autor'>Categoria: <p>{product.category}</p></p>
                                            <p className='card-autor'>Precio: <p>{(product.price).toFixed(2)}€</p></p>
                                        </div>

                                        <div className="card-footer">
                                        <Link to={`/description/${product.id}`}>
                                            <button className="btn btn-outline-dark w-100">Descripción</button>
                                        </Link>                                        
                                        </div>

                                     </div>

            )
        }
      </div>
    </>
  )
}

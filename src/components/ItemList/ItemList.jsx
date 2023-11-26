import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import "./ItemList.css"

export const ItemList = memo(({products}) => {

  return (
    <>
    <div className='row-container'>
          { 
            products.map(product =>  <div key={product.id} className="card  card-product">
                                   
                                        <img src={product.imageUrl} className="card-img-top card-image" />
                                        <div className="card-body card-bodyFormat">
                                            <p className='card-title'>{(product.title).toUpperCase()}</p>
                                            <p className='card-author'>Autor: <p>{product.author}</p> </p>
                                            <p className='card-author'>Categoria: <p>{product.category}</p></p>
                                            <p className='card-author'>Precio: <p>{(product.price).toFixed(2)}€</p></p>
                                        </div>

                                        <div className="card-footer card-footerFormat">
                                        <Link to={`/description/${product.id}`}>
                                            <button className="btn btn-outline-dark w-100 button-list">Descripción</button>
                                        </Link>                                        
                                        </div>

                                     </div>

            )
        }
      </div>
    </>
  )
}
)
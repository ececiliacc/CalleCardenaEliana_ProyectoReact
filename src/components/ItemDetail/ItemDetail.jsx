import React from 'react'
import { ItemCounter } from '../ItemCounter/ItemCounter'

import "./ItemDetail.css"

export const ItemDetail = ({product}) => {

    const onAdd= cant => {
        console.log('cantidad seleccionada: ', cant)
       }
   
  return (
    <>
    <div className='detalles'>
        
        <div>
            <img src={product.imageUrl}  alt='libro' className='contenedor'/>
        </div>
        <div className='col-6 mt-5 detail-description'>
            <p className='detail-titulo'> {product.title}</p>
            <p className='detail-contenido'>Autor: <p>{product.author}</p></p>
            <p className='detail-contenido'>Categoria: <p>{product.category}</p></p>
            <p className='detail-contenido' >Precio: <p>{product.price}€</p></p>
            <p className='detail-contenido'>Descripcion: <p>{product.description}</p></p>
            <ItemCounter initial={1} stock={5} onAdd={onAdd}/>
        </div>
    </div>
    </>
  )
}

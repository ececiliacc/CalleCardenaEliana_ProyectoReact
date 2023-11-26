import React, {useState } from 'react'
import { ItemCounter } from '../ItemCounter/ItemCounter'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

import "./ItemDetail.css"

export const ItemDetail = ({product}) => {
    const [isCounter, setIsCounter] = useState(true)
    const {addCart, cartList} = useCartContext()

    const onAdd= cant => {
        console.log('cantidad seleccionada: ', cant)
        setIsCounter(false)
        addCart ({...product, cant})
       } 
           
  return (
    <>
    <div className='details'>
        
        <div className='image-container'>
            <img src={product.imageUrl}  alt='libro' className='contenedor'/>
        </div>
        <div className='col-6 mt-5 detail-description'>
            <p className='detail-title'> {product.title}</p>
            <p className='detail-content'>Autor: <p>{product.author}</p></p>
            <p className='detail-content'>Categoria: <p>{product.category}</p></p>
            <p className='detail-content' >Precio: <p>{product.price}€</p></p>
            <p className='detail-content'>Descripcion: <p>{product.description}</p></p>
            <p className='detail-content'>Stock: <p>{product.stock} unidades</p></p>      
        
            <div className='cart-add'>

                {
                    isCounter ? 
                    <ItemCounter initial={1} stock={product.stock} onAdd={onAdd}/>
                    :
                    <>   

                    <div className='cart-add2'>

                        <Link to={'/cart'}>
                            <button className="btn btn-outline-dark button-go" >Ir al Carrito</button>
                        </Link>

                        <Link to={'/'}>
                            <button className="btn btn-outline-dark button-init">Inicio</button>
                        </Link>

                    </div>        
                    
                    </>
            }

            </div>
           
        </div>

    </div>
    </>
  )
}

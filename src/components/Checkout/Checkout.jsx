import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../context/CartContext'

import "./Checkout.css"

export const Checkout = () => {

    const [isId, setIsId] = useState('')
    const [formData, setformData]=useState({
        name: '',
        phone: '',
        email: ''
    })

    const {cartList, emptyCart, totalPrice} = useCartContext()

          ///estructura para ingresar los datos de compra a la base de datos firestore

          const handleOrders = (evt) =>{
            evt.preventDefault()
            const order = {}
            order.customer = formData
            order.items = cartList.map(({id, price, cant, title}) => ({id: id, price: price, title: title, cant: cant}))
            order.total = totalPrice()

            const dataBase = getFirestore()

            ///creando la nueva coleccion (pedidos) en firestore
            const queryCollection = collection(dataBase, 'orders')
            addDoc(queryCollection, order)
            .then(({id}) => setIsId (id))
            .catch(err => console.log(err))
            .finally(()=>{
                setformData({
                name: '',
                phone: '',
                email: ''
            })
            emptyCart()
            
            })
         }

        const handleOnChange = (evt)=>{
            setformData({
                ...formData,
                [evt.target.name]:evt.target.value
            })
         }
       
    return(
       
        <>

         {cartList.length === 0 ?
            <>
            <div className='container-form '>
                <div className='congrats'>
                    <h2>Muchas gracias por su compra</h2>
                    <p>Su número de pedido es: {isId}</p>
                </div>
        
            </div>
            
            </>
         :

        <div className='container container-form' >
            <h2 className='title-form'> Datos de Cliente</h2>
            <form className='text-center  form-cuad form' onSubmit={handleOrders}>
                <input className='form-control' placeholder='Ingrese su nombre' type="text" name='name' required onChange={handleOnChange} value={formData.name} />
                <input className='form-control' placeholder='Ingrese su telefono'  type="tel" name='phone' required onChange={handleOnChange} value={formData.phone} />
                <input className='form-control' placeholder='Ingrese su email'  type="email" name='email' required onChange={handleOnChange} value={formData.email} />
                <input className='form-control' placeholder='Repita su email'  type="email" name='email' required onChange={handleOnChange} value={formData.email} />
                <button className="buy" type="submit" >Realizar Compra</button>
            </form>   
        
        </div>
        }
        
        </>
    )

}

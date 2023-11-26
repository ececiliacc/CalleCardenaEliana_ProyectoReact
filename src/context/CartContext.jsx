import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);



////creando componente que servira para vincular el contexto enmascarando

export const CartContextProvider = ({children})=>{

    ///definiendo estados globales

    const [cartList, setCartList] = useState([])

    const isProduct = (id) => cartList.findIndex(prod => prod.id === id)

    const addCart = (product) =>{

        const index = isProduct(product.id)

        if(index !== -1){
            cartList[index].cant += product.cant
            setCartList([...cartList])
        }else{
            setCartList([
                ...cartList,
                product
            ])///si ya esta el producto cambiar cantidad y si no esta agregar
        }
    }

    ///cantidad todal que se muestra en el cart widget
    const accumCart = () => cartList.reduce(
        (accumCart, selectProduct) => accumCart += selectProduct.cant , 0)

    ///suma total del carrito

    const totalPrice = () => cartList.reduce(
        (totalPrice, selectProduct) => totalPrice += (selectProduct.price * selectProduct.cant), 0)

    ///eliminar producto del carrito

    const deleteProductCart = (pid) => setCartList(cartList.filter(prod=> prod.id !== pid))

    //vaciar carrito
    const emptyCart = ()=>{
        setCartList([])
    }


    return(
        <CartContext.Provider value={{
            cartList,
            addCart,
            emptyCart,
            accumCart,
            totalPrice,
            deleteProductCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
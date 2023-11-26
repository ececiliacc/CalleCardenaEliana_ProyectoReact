import { useCartContext } from "../../context/CartContext"
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

import "./CartContainer.css"

export const CartContainer = () =>{

    const {cartList, emptyCart, totalPrice, deleteProductCart} = useCartContext()

    return(
        <div className="cart-container">

            <div className="item-container">    
                {
                    cartList.map(product => <div className="cart-items">
                                                <img className="image-mini" src={product.imageUrl}></img>
                                                {/* <div className="detalle-items"> */}
                                                <div className="detail-item-title">
                                                        <small>Título</small>
                                                        <div>{product.title}</div>
                                                </div>

                                                <div className="detail-item-cant">
                                                        <small>Cantidad</small>
                                                        <div>{product.cant}</div>
                                                    </div>
                                               
                                                <div className="detail-item-price">
                                                        <small>Precio</small>
                                                        <div>{(product.price*product.cant).toFixed(2)}€</div>
                                                </div>
                                                
                                                
                                                <button className="button-deleteCart" onClick={()=> deleteProductCart(product.id)}><FaRegTrashAlt /></button>
                                            </div>)
                }
            </div>

            {
                cartList.length > 0 ?
                <>
                <div className="total-cart">Precio total: {(totalPrice()).toFixed(2)}€</div>
                <div className="buttons-cart">
                    <button className="button-empty" onClick={emptyCart}>Vaciar carrito</button>   
                    <Link to={'/checkout'}>                
                        <button className="button-buyr">Terminar compra</button>
                    </Link> 
                </div>
                </>:
                <div className="icon-remove">
                    <h2>No tiene productos en el carrito</h2>
                    <MdOutlineRemoveShoppingCart />
                    <Link to={'/'} className="returnCart">                
                        <button className="button-returnCart" >seguir comprando</button>
                    </Link> 
                </div>
            }       
            
            
        </div>


    )
}
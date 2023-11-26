import { BiCart } from "react-icons/bi";
import { useCartContext } from '../../context/CartContext';

import "./CartWidget.css"
// componente funcional
export const CartWidget = () => {
 
  const{accumCart}= useCartContext()

  return (    
     <div className="cartWidget">
        <span className="number">{accumCart()}</span>
        <BiCart size={40}/>
        
    </div>
  )
}

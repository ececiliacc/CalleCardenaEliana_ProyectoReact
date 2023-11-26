import { useCounter } from '../hooks/useCounter'

import './ItemCounter.css'

export const ItemCounter = ({initial=1, stock=10, onAdd}) => {

    const{count, handleSubs, handleAdd} = useCounter(initial, stock)
    const handleOnAdd=()=>{
        onAdd(count)
    }

    
  return (
<>
    <div className='text-center' >
        <div>
            <button className='button-subs' onClick={handleSubs}>-</button>
            <label className='label'>{count}</label>
            <button className='button-adition' onClick={handleAdd}>+</button>
            <button  className='button-add' onClick={handleOnAdd}>Añadir al carrito</button>           
        </div>
    </div>
    </>
  )
}



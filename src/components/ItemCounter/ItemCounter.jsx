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
        {/* <div>
            <p>{count}</p>
        </div> */}

        <div>
            <button className='boton-resta' onClick={handleSubs}>-</button>
            <label className='label'>{count}</label>
            <button className='boton-suma' onClick={handleAdd}>+</button>
            <button  className='boton-añadir' onClick={handleOnAdd}>Añadir al carrito</button>
        </div>

    </div>
    </>
  )
}



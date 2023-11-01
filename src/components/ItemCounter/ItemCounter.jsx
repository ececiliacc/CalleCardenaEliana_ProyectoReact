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
            <button className='btn btn-danger' onClick={handleSubs}>-</button>
            <label className='label'>{count}</label>
            <button className='btn btn-success' onClick={handleAdd}>+</button>
            <button  className='btn btn-outline-dark w-100' onClick={handleOnAdd}>Añadir al carrito</button>
        </div>

    </div>
    </>
  )
}



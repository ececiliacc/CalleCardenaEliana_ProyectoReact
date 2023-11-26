//libreria
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
//componentes
import NavBar from './components/NavBar/NavBar'
import ItemListConatainer from './components/ItemListContainer/ItemListConatainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';
import { Checkout } from './components/Checkout/Checkout';
//clases
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer/Footer';



function App() {

  return (
    <CartContextProvider>
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element ={<ItemListConatainer greeting='Bienvenidos a la libreria Cajón de Libros'/>}/> 
          <Route path='/category/:cid' element ={<ItemListConatainer/>}/>          
          <Route path='/description/:pid' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element = {<Navigate to='/' />} />
      </Routes>      
      <Footer/>
    </BrowserRouter>
    </>
    </CartContextProvider>
  )
  
}

export default App

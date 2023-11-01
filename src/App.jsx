//libreria
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
//componentes
import NavBar from './components/NavBar/NavBar'
import ItemListConatainer from './components/ItemListContainer/ItemListConatainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

//clases
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element ={<ItemListConatainer greeting='Bienvenidos a la libreria Cajón de Libros'/>}/> 
          <Route path='/category/:cid' element ={<ItemListConatainer/>}/>          
          <Route path='/description/:pid' element={<ItemDetailContainer/>}/>
          <Route path='*' element = {<Navigate to='/' />} />
      </Routes>      
    </BrowserRouter>
    </>
  )
}

export default App

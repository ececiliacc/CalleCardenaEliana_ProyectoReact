
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";

const categories =[
  {id: '1', name: 'Literatura', category:'Literatura'},
  {id: '2', name: 'Infantil', category:'Infantil'},
  {id: '3', name: 'Anime/Manga', category:'Anime'},
  {id: '4', name: 'Viajes', category:'Viajes'},
  {id: '5', name: 'Ciencia', category:'Ciencia'}
]

// componente funcional
const NavBar = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="navbar-contenedor text-white ">
            <Container>
                <Link to="/">
                  <img
                     src="https://res.cloudinary.com/dv3jsid6j/image/upload/v1700970378/caja-libros/logo1_kkukct.png"
                     width="100"
                     height="100"
                     className="d-inline-block align-top"
                     alt="logo"
                  />               
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="texto edit" >
                  <Nav className="me-auto ">
                      <NavLink className={({isActive}) => isActive ? 'btn btn-outline-light' : ' btn btn-color' } to="/">Inicio</NavLink>                    
                      
                      {categories.map(category => <NavLink
                                                    key={category.id}
                                                    className={({isActive}) => isActive ? 'btn btn-outline-light' : ' btn btn-color'}
                                                    to={`/category/${category.category}`}
                                                  >
                                                    {category.name}

                                                  </NavLink>)}
                  </Nav>
                  <Nav >
                    <Link className='cart-edit' to='/cart'>
                    <CartWidget/> 
                    </Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
      
    </>
  )
}

export default NavBar
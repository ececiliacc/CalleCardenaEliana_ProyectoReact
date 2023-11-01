
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CartWidget } from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";


// componente funcional
const NavBar = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="navbar-contenedor text-white ">
            <Container>
                <Link to="/">
                  <img
                     src="/src/assets/logo1.png"
                     width="100"
                     height="100"
                     className="d-inline-block align-top"
                     alt=""
                  />               
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="texto edit" >
                  <Nav className="me-auto ">
                      <NavLink className={({isActive}) => isActive ? 'btn btn-outline-light' : ' btn btn-color' } to="/">Inicio</NavLink>                    
                      <NavLink className={({isActive}) => isActive ? 'btn btn-outline-light' : 'btn btn-color' } to = '/category/literatura' href="#action/3.1">Literatura</NavLink>             
                      <NavLink className={({isActive}) => isActive ? 'btn btn-outline-light' : 'btn btn-color'} to = '/category/infantil' href="#action/3.2">Infantil</NavLink>               
                      <NavLink className={({isActive}) => isActive ? 'btn btn-outline-light' : 'btn btn-color'} to = '/category/anime' href="#action/3.3">Anime/Manga</NavLink>
                      <NavLink className={({isActive}) => isActive ? 'btn btn-outline-light' : 'btn btn-color'} to = '/category/viajes' href="#action/3.4">Viajes</NavLink>                  
                      <NavLink className={({isActive}) => isActive ? 'btn btn-outline-light' : 'btn btn-color'} to = '/category/ciencia' href="#action/3.5">Ciencia</NavLink>
                    {/* <Nav.Link  href="#club">Club de Lectura</Nav.Link> */}
                  </Nav>
                  <Nav>
                    <CartWidget/> 
                  </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
      
    </>
  )
}

export default NavBar
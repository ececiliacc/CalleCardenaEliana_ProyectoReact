import React from 'react'
import Container from 'react-bootstrap/Container';
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

import "./Footer.css"

export const Footer = () => {
  return (
    <div className='footer-class'>

    <Container fluid >
        <div className='title-footer'>&copy; Líbreria Caja de Libros, reserved 2023</div>
        <div className='social-media'>
            <ul>
                <li><a href='https://www.facebook.com'><FaFacebookF /></a></li>
                <li><a href='https://www.twitter.com'><FaXTwitter /></a></li>
                <li><a href='https://www.instagram.com'><FaInstagram /></a></li>
                <li><a href='https://www.tiktok.com'><FaTiktok /></a></li>
            </ul>
        </div>
    </Container>
    </div>
  )
}

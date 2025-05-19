import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbarr = () => {
  let cartle =JSON.parse(localStorage.getItem("cartitems") || [])
  let favle =JSON.parse(localStorage.getItem("favitems") || [])

  // console.log(cartle);
  
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='nav-links'>
        <Container>
          <Link to="/"><Navbar.Brand >TastyBite</Navbar.Brand></Link>
          <Nav className="ms-auto nav-links" >
            <Link to="/recipes" >Recipes</Link>
            <Link to="/cart" ><HiMiniShoppingCart /> <Badge bg="secondary">{cartle.length}</Badge></Link>
            <Link to="/favs" ><FaRegHeart /> <Badge bg="secondary">{favle.length}</Badge></Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Navbarr
import React from 'react';
import {Navbar, Container, Nav,Button} from 'react-bootstrap';
import styles from './Header.module.css';
import CustomButton from '../CustomButton/customButton';

const Header = () => {
    return (
      <>
 <Navbar collapseOnSelect expand="lg"  variant="dark" className={styles.navBarStyle}>
    <Container style={{marginLeft:10}}> 

     
      <Navbar.Brand href="#home" className={styles.navbarBrandStyle, "me-5"}>
       <h1>{'Logo'}</h1>
      
      </Navbar.Brand>
 
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

      <Nav className="me-auto mr-5">
        <Nav.Link className=" me-5 " style={{color:'white'}} href="#home">News</Nav.Link>
        <Nav.Link className="me-5" style={{color:'white'}} href="#link">Gaming</Nav.Link>
        <Nav.Link className="me-5" style={{color:'white'}} href="#link">Reviews</Nav.Link>
        <Nav.Link className="me-5" style={{color:'white'}} href="#link">Drama</Nav.Link>
        <Nav.Link className="me-5" style={{color:'white'}} href="#link">Merch</Nav.Link>
       
      </Nav>
      
      </Navbar.Collapse>
   </Container>



<Button className="d-none  d-lg-block" style={{marginRight:10, borderRadius:100}} variant="light">Instagram</Button>
<Button className="d-none  d-lg-block" style={{marginRight:10, borderRadius:100}} variant="light">Twitter</Button>
   <Button className="d-none  d-lg-block "  style={{marginRight:15, borderRadius:100}} variant="light">Facebook</Button>

  
  </Navbar>


 
      </>
    )
}

export default Header

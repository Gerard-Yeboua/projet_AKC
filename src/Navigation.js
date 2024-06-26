import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


function Navigation() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
         <Container>
           <Navbar.Brand href="/src/Main.js">
             <Image src="https://img.freepik.com/psd-premium/icone-javascript-codage-rendu-3d_568120-2036.jpg?w=2000" width={50}
              height={50} className="logo" alt="" roundedCircle></Image>
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="me-auto">
               <Nav.Link href="#"></Nav.Link>
             </Nav>
             <Nav>
               <Nav.Link href="/" >Accueil</Nav.Link>
               <Nav.Link href="#">Services</Nav.Link>
               <Nav.Link eventKey={2} href="/src/Pages/Projects.js">
                 Projets
               </Nav.Link>
               <Nav.Link href="/src/Pages/Contact.js">Contact</Nav.Link>
             </Nav>
           </Navbar.Collapse>
         </Container>
       </Navbar>
  );
}

export default Navigation;
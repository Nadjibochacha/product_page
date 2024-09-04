import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div id='header' className='bg-body-secondary'>
        <Navbar expand="md">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                    <Nav className="w-100 justify-content-center">
                    <Nav.Link className="link me-4" href="#about">الصفحة الرئيسية</Nav.Link>
                    <Nav.Link className="link me-4" href="#skills">التصنيفات</Nav.Link>
                    <Nav.Link className="link me-4" href="#port">اتصل بنا</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
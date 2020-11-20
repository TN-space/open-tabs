import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const generalOptions = (
    <Fragment>
        <Nav.Link className='nav-links' href="/">Home</Nav.Link>
        <Nav.Link className='nav-links' href="/about">About</Nav.Link>

    </Fragment>
)

const Header = () => (
    <Navbar className='header-container'>
        <Navbar.Brand className='welcome-logo' href="/">
            <h2>Welcome...!!</h2>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse>
            <Nav className="nav-links">
                {generalOptions}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header
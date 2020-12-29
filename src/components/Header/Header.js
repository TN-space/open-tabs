import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const generalOptions = (
    <Fragment>
        <Nav.Link className='nav-link' href="/">Home</Nav.Link>
        <Nav.Link className='nav-link' href="/about">About</Nav.Link>

    </Fragment>
)

const Header = () => (
    <Navbar className='header-container'>
        <Navbar.Brand className='welcome-logo' href="/">
            {/* <h2>Welcome to Open Tabs!!</h2> */}
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse>
            <Nav className="nav-links">
                {generalOptions}
            </Nav>
        </Navbar.Collapse>
        <h2 className='welcome'>
            Welcome to <span className='o'>O</span><span>pen</span> <span className='t'>T</span><span>abs</span>
        </h2>
    </Navbar>
)

export default Header
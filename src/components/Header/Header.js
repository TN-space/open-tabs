import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const generalOptions = (
    <Fragment>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>

    </Fragment>
)

const Header = () => (
    <Navbar>
        <Navbar.Brand href="/">
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
import React, { useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import AppLogo from "../assets/img/navbar-logo.svg";

const Navigation = () => {

    const [headerClassName, setHeaderClassName] = useState('');

    const handleScroll = (headerClassName) => {
        if (headerClassName !== 'navbar-shrink' && window.pageYOffset >= 100) {
            setHeaderClassName('navbar-shrink');
        } else if (headerClassName === 'navbar-shrink' && window.pageYOffset < 100) {
            setHeaderClassName('');
        }
    }

    React.useEffect(() => {
        window.onscroll = () => handleScroll(headerClassName);
    }, [headerClassName]);

    return (
        <>
            <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="lg" className={`${headerClassName}`} id="mainNav">
                <Container>
                    <a className="navbar-brand" href="#page-top"><img src={AppLogo} alt="..." /></a>
                    <Navbar.Toggle aria-controls="navbarResponsive" />
                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarResponsive">
                        <Nav className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <Nav.Link className="nav-link" href="#services">Services</Nav.Link>
                            <Nav.Link className="nav-link" href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link className="nav-link" href="#about">About</Nav.Link>
                            <Nav.Link className="nav-link" href="#team">Team</Nav.Link>
                            <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </>
    );
}

export default Navigation;
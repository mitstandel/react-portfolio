import React, { useState } from "react";
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
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${headerClassName}`} id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top"><img src={AppLogo} alt="..." /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
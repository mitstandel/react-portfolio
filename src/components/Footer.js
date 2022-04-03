import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2022</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
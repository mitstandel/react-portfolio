import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Person = (props) => {
    return (
        <div className="col-lg-4">
            <div className="team-member">
                <img className="mx-auto rounded-circle" src={require(`../assets/img/team/${props.person.image}`)} alt="..." />
                <h4>{props.person.name}</h4>
                <p className="text-muted">{props.person.designation}</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><FontAwesomeIcon icon={faTwitter} /></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
        </div>
    );
}

export default Person;
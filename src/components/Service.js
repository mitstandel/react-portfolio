import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Service = (props) => {
    return (
        <div className="col-md-4">
            <span className="fa-stack fa-4x">
                <FontAwesomeIcon icon={faCircle} className="fa-stack-2x text-primary" />
                <FontAwesomeIcon icon={props.icon} className="fa-stack-1x" inverse />
            </span>
            <h4 className="my-3">{props.title}</h4>
            <p className="text-muted">{props.content}</p>
        </div>
    );
}

export default Service;
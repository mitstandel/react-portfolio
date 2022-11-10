import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faShoppingCart, faLaptop, faLock } from "@fortawesome/free-solid-svg-icons";

const Service = (props) => {
  const [ icons, setIcons ] = useState({});

  useEffect(() => {
    let icons = {
      'faShoppingCart': faShoppingCart,
      'faLaptop': faLaptop,
      'faLock': faLock
    }
    setIcons(icons);
  }, []);

  return (
    <div className="col-md-4">
      <span className="fa-stack fa-4x">
        <FontAwesomeIcon icon={faCircle} className="fa-stack-2x text-primary" />
        { icons[props.icon] && (
          <FontAwesomeIcon icon={icons[props.icon]} className="fa-stack-1x" inverse />
        )}
      </span>
      <h4 className="my-3">{props.title}</h4>
      <p className="text-muted">{props.content}</p>
    </div>
  );
}

export default Service;
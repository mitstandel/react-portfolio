import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PortfolioBox = (props) => {
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><FontAwesomeIcon icon={faPlus} className="fa-3x" /></div>
                    </div>
                    <img className="img-fluid" src={require(`../assets/img/portfolio/${props.content.image}`)} alt="..." />
                </a>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{props.content.client}</div>
                    <div className="portfolio-caption-subheading text-muted">{props.content.category}</div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioBox;
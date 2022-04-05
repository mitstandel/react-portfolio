import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class PortfolioBox extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="col-lg-4 col-sm-6">
                <div className="portfolio-item">
                    <div className="portfolio-link" data-bs-toggle="modal" onClick={() => this.props.open(this.props.content)}>
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><FontAwesomeIcon icon={faPlus} className="fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src={require(`../assets/img/portfolio/${this.props.content.image}`)} alt="..." />
                    </div>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{this.props.content.client}</div>
                        <div className="portfolio-caption-subheading text-muted">{this.props.content.category}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioBox;
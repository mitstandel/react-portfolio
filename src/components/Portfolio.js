import React, { Component } from "react";
import PortfolioBox from "./PortfolioBox";
import CloseIcon from "../assets/img/close-icon.svg"

class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: 'none',
            class: '',
            post: {}
        };
    };

    onOpenModal = (postData) => {
        this.setState({
            open: 'block',
            class: 'show',
            post: postData
        });
    }

    onCloseModal = () => {
        this.setState({open:'none', class: '', post: {}});
    }

    renderModal() {
        const { post } = this.state;

        if(typeof(post.id) != 'undefined') {
            return (
                <>
                    <h2 className="text-uppercase">{post.name}</h2>
                    <p className="item-intro text-muted">{post.short}</p>
                    <img className="img-fluid d-block mx-auto" src={require(`../assets/img/portfolio/${post.image}`)} alt="..." />
                    <p>{post.description}</p>
                    <ul className="list-inline">
                        <li>
                            <strong>Client:</strong>
                            {post.client}
                        </li>
                        <li>
                            <strong>Category:</strong>
                            {post.category}
                        </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button" onClick={() => this.onCloseModal()}>
                        <i className="fas fa-xmark me-1"></i>
                        Close Project
                    </button>
                </>
            );
        }
    }

    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {
                            this.props.portfolio.map((portfolio, i) => {
                                return <PortfolioBox key={i} content={this.props.portfolio[i]} open={this.onOpenModal} />
                            })
                        }
                    </div>
                    <div className={`portfolio-modal modal fade ${this.state.class}`} role="dialog" style={{display:this.state.open}}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="close-modal" data-bs-dismiss="modal"><img src={CloseIcon} alt="Close modal" onClick={() => this.onCloseModal()} /></div>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div className="modal-body">
                                                {this.renderModal()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
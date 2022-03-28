import React from "react";

const Post = (props) => {
    return (
        <li className={props.cls}>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src={require(`../assets/img/about/${props.content.image}`)} alt="..." /></div>
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>{props.content.year}</h4>
                    <h4 className="subheading">{props.content.name}</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">{props.content.description}</p></div>
            </div>
        </li>
    );
}

export default Post;
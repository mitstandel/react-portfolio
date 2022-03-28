import React from "react";
import Post from "./Post";

const Timeline = ({ timeline }) => {
    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul className="timeline">
                    {
                        timeline.map((data, i) => {
                            const className = (i%2) !== 0 ? 'timeline-inverted' : '';
                            return <Post key={i} content={timeline[i]} cls={className} />
                        })
                    }
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Timeline;
import React, { Component } from "react";
import Navigation from './components/Navigation';
import Header from './components/Header';
import Services from "./components/Services";
import './fonts/mellogoth/style.css';
import './css/App.css';

import { content } from "./content";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Team from "./components/Team";

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="tc">
                <Navigation />
                <Header />
                <Services services={content.services} />
                <Portfolio portfolio={content.portfolio} />
                <Timeline timeline={content.about} />
                <Team team={content.team} />
            </div>
        );
    }
}

export default App;
import React, { Component } from "react";
import Navigation from './components/Navigation';
import Header from './components/Header';
import Services from "./components/Services";
import './fonts/mellogoth/style.css';
import './css/App.css';

import { content } from "./content";
import Portfolio from "./components/Portfolio";

class App extends Component {

    constructor() {
        super();

        this.state = {
            robots: [],
            searchField: ''
        };
    }

    onSearchChange = (e) => {
        this.setState({
            searchField: e.target.value
        });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        }).then(users => {
            this.setState({
                robots: users
            });
        });
    }

    render() {
        return (
            <div className="tc">
                <Navigation />
                <Header />
                <Services services={content.services} />
                <Portfolio portfolio={content.portfolio} />
            </div>
        );
    }
}

export default App;
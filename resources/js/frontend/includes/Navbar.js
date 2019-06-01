import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Navbar extends Component
{
    componentDidMount()
    {
        fetch('/api/')
            .then()
            .then();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <a href="/" class="navbar-brand">{{ app_name() }}</a>

            </nav>
        );
    }
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './includes/Navbar';
import { ClipLoader } from 'react-spinners';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

export default class Frontend extends Component
{
    componentDidMount()
    {
        fetch('/api/config')
            .then(response => {
                return response.json();
            })
            .then(response => {
                this.setState(response);
            });
    }

    render() {
        // Frontend Page
        return (this.state === null) ? (
                <div className="container-fluid">
                <div className="row justify-content-center">
                <div className="text-center align-middle" style={{ position:'fixed',top:'50%',left:'50%',transform: 'translate(-50%, -50%)' }}>
                    <ClipLoader size={200} />
                    <h4>Loading...</h4>
                </div>
                </div>
                </div>
            ) : (

                <div className="container-fluid">
                    <Navbar data={this.state} />
                    <div className="row justify-content-center">
                        <Router>
                            <Route exact path="/" component={() => {
                                return <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header">
                                            Example Component
                                        </div>

                                        <div className="card-body">
                                            I'm an example component!
                                        </div>
                                        <div className="card-footer">
                                            Footer
                                        </div>
                                    </div>
                                </div>}
                            }>
                            </Route>
                            <Route path="/register"></Route>
                            <Route path="/login"></Route>
                            <Route path="/user/dashboard"></Route>
                            <Route path="/user/profile"></Route>
                        </Router>
                    </div>
                </div>
            )
    }
}

if (document.getElementById('frontend')) {
    ReactDOM.render(<Frontend />, document.getElementById('frontend'));
}

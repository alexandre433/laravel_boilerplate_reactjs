import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './includes/Navbar';
import { ClipLoader } from 'react-spinners';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Register from './Register';

//mport Loader from '../resources/Loader';

/**
 * localStorage is used for client-side reading, so, because i'm using
 * ReactJS I do need to store most of my data into the localstorage so that i can
 * manipulate it, with ReactJS
 */
class Frontend extends Component
{
    // Frontend Page
        /* return (this.state === null) ? (
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
                            }/>
                            <Route path="/register" />
                            <Route path="/login" />
                            <Route path="/user/dashboard" />
                            <Route path="/user/profile" />
                        </Router>
                    </div>
                    <div className="fixed-bottom m-0 p-0 justify-content-end border l-0 r-0" style={{backgroundColor: 'black', color:'white'}}>
                        footer
                    </div>
                </div>
            ) */

    render()
    {
        return(
            <Provider store={store}>
                <Register />
                <Navbar />
                <h1>
                    Hello
                </h1>
            </Provider>
        );
    }
}

export default Frontend;

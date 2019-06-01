import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Frontend extends Component
{
    componentDidMount()
    {
        fetch('/api/')
            .then()
            .then();
    }

    render() {
        return (
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
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
                </div>
            </div>
            </div>
        );
    }
}

if (document.getElementById('frontend')) {
    ReactDOM.render(<Frontend />, document.getElementById('frontend'));
}

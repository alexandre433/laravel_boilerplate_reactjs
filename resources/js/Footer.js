import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component
{

    render() {
        return (
            /**
             * Make a footer that only loads after the main page loads
             * or
             * make the footer always appear with a default value of a language (en)
             *  and change it once the page is fully loaded
             *
             */
            <div></div>
        );
    }
}

if (document.getElementById('footer')) {
    ReactDOM.render(<Footer />, document.getElementById('footer'));
}

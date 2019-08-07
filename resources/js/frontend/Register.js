import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getConfig } from './actions/config';

class Register extends Component
{
    componentWillMount()
    {
        this.props.getConfig();
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default connect(null, { getConfig })(Register);

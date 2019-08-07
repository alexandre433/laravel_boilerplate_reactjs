import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { getConfig } from '../actions/config';

class Navbar extends Component
{
    constructor(props)
    {
        super(props);

        this.props.getConfig();
    }

    render() {

        if (this.props.config == null) { 
            return (
                <h1>
                    asd
                </h1>
            );
        } else {
            this.app = this.props.config.app;
            this.lang = this.props.config.lang;
            this.user = this.props.config.user;
            return (
                <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                    <Link to="/" className="navbar-brand">{this.app.name}</Link>

                    <button
                        className="navbar-toggler navbar-toggler-right"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label={this.lang.labels.general.toggle_navigation}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownLanguageLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.app.languages.picker} ({this.app.current_language.toUpperCase()})
                                </a>
                            </li>

                            { (this.user.guest === true) ? (
                                <React.Fragment>p
                                    <li className="nav-item"><Link to="/login" className="nav-link {{ active_class(Active::checkRoute('frontend.auth.login')) }}">{this.lang.navs.frontend.login}</Link></li>
                                    <li className="nav-item"><Link to="/register" className="nav-link {{ active_class(Active::checkRoute('frontend.auth.register')) }}">{this.lang.navs.frontend.register}</Link></li>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <li className="nav-item">
                                        {/* { active_class(Active::checkRoute('frontend.user.dashboard')) } */}
                                        <Link to="/user/dashboard" className="nav-link">{this.lang.navs.frontend.dashboard}</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuUser" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">{ /* $logged_in_user->name */ }</a>

                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuUser">
                                            {/* @can('view backend') */}
                                                <a href="{{ route('admin.dashboard') }}" className="dropdown-item">{this.lang.navs.frontend.user.administration}</a>
                                            {/* @endcan */}

                                            <Link to="/user/account" className="dropdown-item {{ active_class(Active::checkRoute('frontend.user.account')) }}">{this.lang.navs.frontend.user.account}</Link>
                                            <Link to="/logout" className="dropdown-item">{this.lang.navs.general.logout}</Link>
                                        </div>
                                    </li>
                                </React.Fragment>
                            ) }


                        <li className="nav-item"><Link to="/contact" className="nav-link {{ active_class(Active::checkRoute('frontend.contact')) }}">{this.lang.navs.frontend.contact}</Link></li>

                        </ul>
                    </div>
                </nav>
                </Router>
            );

        }

    }
}

Navbar.propTypes = {
    getConfig: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    config: state.posts.payload
});


export default connect(mapStateToProps, { getConfig })(Navbar);

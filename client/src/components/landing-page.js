import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="landing-page">
            <h2>Welcome to Giphy Comic!</h2>
            <p className='text bottom-right'> Giphy Comic is a site that allows you to create your very own comics using the giphy.com api.
                It is super easy to use! Once you register with an email and password, you will be taken to the comic
                creation page. From here you will be able to search gifs to use in your comic, write text for each cell,
                 and decide on the width for each. Sign up or login and get started creating!</p>
            <LoginForm />
            <Link to="/register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

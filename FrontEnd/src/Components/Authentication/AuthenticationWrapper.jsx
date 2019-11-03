import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import "../../style/AuthorizationWrapper.css"
import GoogleSignIn from './GoogleComponent';

class AuthorizationWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onSignInForm: true
        }
    }
    render() {
        //TODO: write else statement to redirect to authentication

        return (

            <GoogleSignIn/>
        )
    }
}

export default AuthorizationWrapper;
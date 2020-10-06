import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import logo from '../../logos/Group 1329.png'
import './Login.css'
import google from '../../logos/google.png'
import firebase from 'firebase'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import  firebaseConfig from './firebase.config';
const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email:email} 
            setLoggedInUser(signedInUser);
            
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div className='login__page'>
            <Link to="/"><img className='login__logo' src={logo} alt=""/></Link>
            <div className="login__box">
            <h4>To Continue</h4>
                <div className="google">
                    
                    <Button onClick={handleGoogleSignIn} className="google__sign__button"><img className="google__icon" src={google} alt=""/>Sign in with Google</Button>
                    <p>Don't have an account? <Link>create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
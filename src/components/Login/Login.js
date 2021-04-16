import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import LoginBg from '../../imgs/login-logo.jpg';
import { UserContext } from '../../App';
import './Login.css'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || {
        from: { pathname: "/" }
    }

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            setToken();
            history.replace(from);
            // ...
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const setToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken)
        }).catch(function (error) {
            // Handle error
        });
    }
    return (
        <div className="login-page">
            <div className="container">
                <div className="row align-items-center" style={{ height: "100vh" }}>
                    <div className="col-md-6 d-none d-md-block">
                        <img className="img-fluid" src={LoginBg} alt="" />
                    </div>
                    <div className="col-md-6 shadow bg-light p-5">
                        <div className="form-group">
                            <label htmlFor="">User Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-danger">Forgot your password?</label>
                        </div>
                        <div className="from-group mt-5">
                            <button className="btn color-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
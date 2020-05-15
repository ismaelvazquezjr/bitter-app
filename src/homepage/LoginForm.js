import React from 'react';
import useToggleState from '../hooks/useToggleState';
import './LoginForm.css';
import BitterLogo from '../media/bitter-logo.png';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

function LoginForm() {
    const [isLoginShowing, toggleLogin] = useToggleState();
    const [isSignupShowing, toggleSignup] = useToggleState();
    return (
        <div className="LoginForm">
            <div className="LoginForm-container">
                <img className="LoginForm-logo" src={BitterLogo} alt="Bitter App logo."/>
                <h1 className="LoginForm-header">See who's complaining in the world right now</h1>
                <h2>Join Bitter today.</h2>
                <button className="LoginForm-signup-button" onClick={toggleSignup}>Sign up</button>
                <button className="LoginForm-login-button" onClick={toggleLogin}>Log in</button>
                <LoginModal 
                    isShowing={isLoginShowing}
                    hide={toggleLogin} />
                <SignupModal
                    isShowing={isSignupShowing}
                    hide={toggleSignup}/>
            </div>
        </div>
    );
}

export default LoginForm;
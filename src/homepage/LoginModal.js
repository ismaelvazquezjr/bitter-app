import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import useInputState from '../hooks/useInputState';
import { LoggedInContext } from '../context/LoggedInContext';
import './LoginModal.css';
import './Modal.css';
import BitterLogo from '../media/bitter-logo.png';

function LoginModal({isShowing, hide}) {
    const {toggleLoggedInState} = useContext(LoggedInContext);
    const [email, emailStateChange] = useInputState("");
    const [password, passwordStateChange] = useInputState("");
    const history = useHistory();

    const validateUser = function () {
        // TODO: Send request to endpoint to validate whether credentials were
        // accepted
        if (true) {
            toggleLoggedInState();
            history.push("/feed");
        }
    }

    if (isShowing) {
        return (
            <div className="Modal">
                <div className="modal-overlay">
                    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                        <div className="modal">
                            <div className="modal-header">
                                <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="inner-modal-container">
                                <img className="LoginForm-logo" src={BitterLogo} alt="Bitter App logo."/>
                                <h2>Log in to Bitter</h2>
                                <TextField
                                    autoFocus
                                    label="Email" 
                                    value={email}
                                    onChange={emailStateChange}
                                    id="email" 
                                    type="email" 
                                    fullWidth />
                                <TextField
                                    label="Password" 
                                    value={password}
                                    onChange={passwordStateChange}
                                    id="password" 
                                    type="password" 
                                    fullWidth />
                                <button className="LoginModal-modal-button LoginForm-signup-button" onClick={validateUser}>Log in</button>
                                <div className="LoginModal-extra-links">
                                    <Link to="/" className="LoginModal-link">Forgot password?</Link>
                                    <span className="LoginModal-separator"> · </span>
                                    <Link to="/" className="LoginModal-link">Sign up for Bitter</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }

    return null;
}

export default LoginModal;
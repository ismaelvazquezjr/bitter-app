import React from 'react';
import './SignupModal.css';
import './Modal.css';
import BitterLogo from '../media/bitter-logo.png';

function SignupModal({isShowing, hide}) {
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
                                <h2 className="">Create your account</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}

export default SignupModal;
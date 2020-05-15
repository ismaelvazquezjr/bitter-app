import React from 'react';
import './SignupModal.css';
import './Modal.css';

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
                            <p>Hello, I'm a modal.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}

export default SignupModal;
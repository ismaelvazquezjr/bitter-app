import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <div className="Banner">
            <div className="Banner-text-container">
                <p><i className="fal fa-search"></i>Follow the gossip.</p>
                <p><i className="fal fa-user-friends"></i>Hear what people are ranting about.</p>
                <p><i className="fal fa-comments-alt"></i>Join the fight.</p>
            </div>
        </div>
    );
}

export default Banner;
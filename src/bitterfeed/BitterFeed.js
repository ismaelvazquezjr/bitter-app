import React from 'react';
import NewBeech from './NewBeech';
import './BitterFeed.css';

function BitterFeed() {
    document.title = "Home / Bitter";
    return (
        <div className="BitterFeed">
            <NewBeech />
        </div>
    )
}

export default BitterFeed;
import React from 'react';
import Banner from './Banner';
import LoginForm from './LoginForm';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <Banner />
            <LoginForm />
        </div>
    );
}

export default Home;
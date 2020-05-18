import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import Banner from './Banner';
import LoginForm from './LoginForm';
import {LoggedInContext} from '../context/LoggedInContext';
import './Home.css';

function Home() {
    const {isLoggedIn} = useContext(LoggedInContext);
    if (isLoggedIn) return <Redirect to="/feed" />;
    return (
        <div className="Home">
            <Banner />
            <LoginForm />
        </div>
    );
}

export default Home;
import React from 'react';
import logo from '../../logo.PNG';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'><img src={logo} alt="" /></div>
            <div className='title'>Pro Player</div>
            <div>
            <nav>
                <a href="/home">Home</a>
                <a href="/news">News</a>
                <a href="/player">Player</a>
                <a href="/more">More</a>
                <a href="/about">About</a>
            </nav>
            </div>
        </div>
    );
};

export default Header;
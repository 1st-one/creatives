import React from 'react';
import logo from '@/assets/img/header/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} alt="" width="78px" height="75px"/>
                <ul className="header__nav">
                    <li className="header__nav-item active">
                        <a href="#">Home</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#">Pages</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#">Features</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#">Extensions</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#">Tutorials</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#">Contact us</a>
                    </li>
                </ul>
                <div className="header__link">
                    <a href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-skype"></i>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
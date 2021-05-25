import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/img/header/logo.png';

const Header = () => {
    const [activeMode, setActiveMode] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <img src={logo} alt="" width="78px" height="75px" />
                <div className={activeMode ? "header__burger active" : "header__burger"} onClick={() => setActiveMode(!activeMode)}></div>
                <ul className={activeMode ? "header__nav active" : "header__nav"}>
                    <li className="header__nav-item active">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to='/pages'>Pages</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to='/features'>Features</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to='/extensions'>Extensions</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to='/tutorials'>Tutorials</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to='/contact'>Contact us</Link>
                    </li>
                </ul>
                <div className="header__link">
                    <a href="https://twitter.com/?lang=ru" target="_blank">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.skype.com/" target="_blank">
                        <i className="fab fa-skype"></i>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
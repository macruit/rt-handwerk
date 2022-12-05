import React from 'react';
import logo from './logo.png';
import "../../App.css"

const Navbar = () => {
    return (
            <div className="container">
                <div className="header_body">
                    <div className="logo">
                        <a href="#" className="header__logo">
                            <img src={logo} alt="logo"/>
                        </a>
                        <div className="header__burger">
                            <span></span>
                        </div>
                    <nav className="header__menu">
                        <ul className="header__list">
                            <li>
                                <a href="#" className="header__link">Startseite</a>
                                <a href="#" className="header__link">Über uns</a>
                                <a href="#" className="header__link">Leistungen</a>
                                <a href="#" className="header__link">Karriere</a>
                                <a href="#" className="header__link">Kontakt</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                </div>
            </div>
    );
};

export default Navbar;

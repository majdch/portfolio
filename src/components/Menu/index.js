import React, { useState } from 'react';
import { NavLink, useLocation, withRouter } from "react-router-dom";
import './index.scss';
import DownloadCV from "../DownloadCV";

const Menu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <div className="navbar__monogram">MC</div>
                    <span className="navbar__name">Majd Chagroufi</span>
                </div>
                
                <button className="navbar__hamburger" onClick={toggleMenu}>
                    <span className="navbar__hamburger-icon">☰</span>
                </button>

                <nav className={`navbar__nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="navbar__links">
                        <li>
                            <NavLink exact to="/" isActive={() => location.pathname === '/'} activeClassName="active" onClick={closeMenu}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume" isActive={() => location.pathname === '/resume'} activeClassName="active" onClick={closeMenu}>Resume</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" isActive={() => location.pathname === '/contact'} activeClassName="active" onClick={closeMenu}>Contact</NavLink>
                        </li>
                        <li className="navbar__download">
                            <DownloadCV />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default withRouter(Menu);

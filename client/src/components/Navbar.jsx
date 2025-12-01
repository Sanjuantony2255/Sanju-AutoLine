import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ theme, toggleTheme }) {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">Sanju AutoLine</Link>
            <div className="nav-right">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/showroom">Showroom</Link></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
                    <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? 'dark' : ''}>
            <img src="/assets/react.svg" className="nav--logo_icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            {/* <Link to="/card" className="toggler--light_btn">
                Go to card{' '}
            </Link> */}
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    );
}

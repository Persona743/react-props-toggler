import React from 'react';
import { Link } from 'react-router-dom';
import Info from './Info';
import AboutInterest from './AboutInterest';
import Footer from './Footer';

export default function Card() {
    return (
        <div className="card--container">
            <Info />
            <AboutInterest />
            <Footer />
            {/* <Link to="/">Go Back </Link> */}
        </div>
    );
}


// this page is for the task purpose
import React from 'react';
import Info from './Info';
import AboutInterest from './AboutInterest';
import Footer from './Footer';

export default function Card() {
    return (
        <div className="card--container">
            <Info />
            <AboutInterest />
            <Footer />
        </div>
    );
}

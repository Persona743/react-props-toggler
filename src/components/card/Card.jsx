import React from 'react';
import Info from './Info';
import About from './About';
import Interest from './Interest';
import Footer from './Footer';

export default function Card() {
    return (
        <div>
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    );
}

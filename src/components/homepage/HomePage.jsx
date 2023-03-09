import React, { useState } from 'react';
import Navbar from './Navbar';
import Main from './Main';

export default function HomePage() {
    const [darkMode, setDarkMode] = useState(true);

    function toggleDarkMode() {
        setDarkMode((prevMode) => !prevMode);
    }

    return (
        <div className="container">
            <Navbar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode} 
                />
            <Main darkMode={darkMode} />
        </div>
    );
}

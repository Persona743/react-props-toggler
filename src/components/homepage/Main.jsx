import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <main>
            <h1 className="main--title">Fun Facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created bt Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>
                    powers thousands of enterprise apps, including mobile apps
                </li>
            </ul>

            <Link to="/card">Go to card </Link>
        </main>
    );
}

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './components/homepage/HomePage';
import Card from './components/card/Card';

import './App.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/card" element={<Card />} />
            </Routes>
        </BrowserRouter>
    );
}

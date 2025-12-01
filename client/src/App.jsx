import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Showroom from './pages/Showroom';
import CarDetails from './pages/CarDetails';
import './index.css';

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.setAttribute('data-theme', savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    return (
        <Router>
            <div className="app">
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/showroom" element={<Showroom />} />
                    <Route path="/car/:id" element={<CarDetails />} />
                </Routes>
                <footer>
                    <p>&copy; 2025 Sanju AutoLine. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;

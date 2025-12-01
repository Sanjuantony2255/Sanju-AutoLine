import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim()) {
            navigate(`/showroom?search=${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <section className="hero">
            <div className="hero-bg">
                {/* Note: Ensure assets are moved to public folder or imported */}
                <img src="/assets/images/hero.png" alt="Car Background" />
                <div className="overlay"></div>
            </div>
            <div className="hero-content">
                <h1>Find your right car</h1>
                <div className="search-widget">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Type to select car name, e.g. Honda City"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="search-btn" onClick={handleSearch}>Search</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;

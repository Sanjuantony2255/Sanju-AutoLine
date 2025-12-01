import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { allCars } from '../data/cars';

function Showroom() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedCompany = queryParams.get('company');
    const searchQuery = queryParams.get('search');

    const [cars, setCars] = useState([]);

    useEffect(() => {
        let filteredCars = allCars;

        if (selectedCompany) {
            filteredCars = filteredCars.filter(car => car.company === selectedCompany);
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filteredCars = filteredCars.filter(car =>
                car.name.toLowerCase().includes(query) ||
                car.company.toLowerCase().includes(query)
            );
        }

        setCars(filteredCars);
    }, [selectedCompany, searchQuery]);

    return (
        <section className="showroom" style={{ marginTop: '80px' }}>
            <div className="section-header">
                <h2>
                    {searchQuery
                        ? `Search Results for "${searchQuery}"`
                        : (selectedCompany ? `${selectedCompany} Cars` : 'Featured Cars')
                    }
                </h2>
                <p>Explore our premium collection</p>
            </div>
            <div className="car-grid">
                {cars.length > 0 ? (
                    cars.map(car => (
                        <Link to={`/car/${car.id}`} key={car.id} className="car-card" style={{ textDecoration: 'none' }}>
                            <div className="card-image">
                                <img src={car.image} alt={car.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="card-info">
                                <h3>{car.name}</h3>
                                <p className="price">{car.priceStr}</p>
                                <button className="action-btn">Check On-Road Price</button>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>No cars found for this category.</p>
                )}
            </div>
        </section>
    );
}

export default Showroom;

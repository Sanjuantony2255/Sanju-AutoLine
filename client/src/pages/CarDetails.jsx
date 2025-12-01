import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { allCars } from '../data/cars';

function CarDetails() {
    const { id } = useParams();
    const car = allCars.find(c => c.id === parseInt(id));

    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(9.5);
    const [tenure, setTenure] = useState(5);
    const [downPayment, setDownPayment] = useState(0);
    const [emi, setEmi] = useState(0);

    useEffect(() => {
        if (car) {
            const initialDownPayment = car.price * 0.2; // 20% down payment default
            setDownPayment(initialDownPayment);
            setLoanAmount(car.price - initialDownPayment);
        }
    }, [car]);

    useEffect(() => {
        calculateEmi();
    }, [loanAmount, interestRate, tenure]);

    const calculateEmi = () => {
        const principal = loanAmount;
        const rate = interestRate / 12 / 100;
        const time = tenure * 12;

        if (principal > 0 && rate > 0 && time > 0) {
            const emiValue = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
            setEmi(Math.round(emiValue));
        } else {
            setEmi(0);
        }
    };

    const handleDownPaymentChange = (e) => {
        const val = parseFloat(e.target.value) || 0;
        setDownPayment(val);
        setLoanAmount(car.price - val);
    };

    if (!car) {
        return <div style={{ marginTop: '100px', textAlign: 'center' }}>Car not found</div>;
    }

    return (
        <div className="car-details-page" style={{ marginTop: '80px', padding: '2rem 5%' }}>
            <div className="details-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
                <div className="car-visuals" style={{ flex: '1', minWidth: '300px' }}>
                    <img src={car.image} alt={car.name} style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <div className="specs" style={{ marginTop: '2rem', background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Specifications</h3>
                        <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <li><strong>Engine:</strong> {car.specs.engine}</li>
                            <li><strong>Power:</strong> {car.specs.power}</li>
                            <li><strong>Mileage:</strong> {car.specs.mileage}</li>
                            <li><strong>Fuel:</strong> {car.specs.fuel}</li>
                        </ul>
                    </div>
                </div>

                <div className="car-info-section" style={{ flex: '1', minWidth: '300px' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{car.name}</h1>
                    <p style={{ fontSize: '1.5rem', color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '2rem' }}>{car.priceStr}</p>

                    <div className="emi-calculator" style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>EMI Calculator</h3>

                        <div className="form-group">
                            <label>Car Price</label>
                            <input type="text" value={`₹ ${car.price.toLocaleString()}`} disabled style={{ background: 'var(--bg-body)', cursor: 'not-allowed' }} />
                        </div>

                        <div className="form-group">
                            <label>Down Payment (₹)</label>
                            <input type="number" value={downPayment} onChange={handleDownPaymentChange} />
                        </div>

                        <div className="form-group">
                            <label>Loan Amount (₹)</label>
                            <input type="number" value={loanAmount} disabled style={{ background: 'var(--bg-body)' }} />
                        </div>

                        <div className="form-group" style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ flex: 1 }}>
                                <label>Interest Rate (%)</label>
                                <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} step="0.1" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label>Tenure (Years)</label>
                                <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} />
                            </div>
                        </div>

                        <div className="emi-result" style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(217, 48, 37, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Monthly EMI</p>
                            <h2 style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>₹ {emi.toLocaleString()}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarDetails;

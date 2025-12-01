import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios'; // We will use fetch for now to avoid dependency issues if axios isn't installed

function CompanyList() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        setCompanies([
            { id: 1, name: 'Maruti Suzuki', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/10/brands/logos/maruti-suzuki.jpg' },
            { id: 2, name: 'Hyundai', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/8/brands/logos/hyundai.jpg' },
            { id: 3, name: 'Tata', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/16/brands/logos/tata.jpg' },
            { id: 4, name: 'Mahindra', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/9/brands/logos/mahindra.jpg' },
            { id: 5, name: 'Toyota', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/17/brands/logos/toyota.jpg' },
            { id: 6, name: 'Kia', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/11/brands/logos/kia.jpg' },
            { id: 7, name: 'Honda', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/19/brands/logos/honda.jpg' },
            { id: 8, name: 'MG', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/66/brands/logos/mg.jpg' },
            { id: 9, name: 'Renault', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/12/brands/logos/renault.jpg' },
            { id: 10, name: 'Volkswagen', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/20/brands/logos/volkswagen.jpg' },
            { id: 11, name: 'Skoda', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/15/brands/logos/skoda.jpg' },
            { id: 12, name: 'Nissan', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/13/brands/logos/nissan.jpg' },
            { id: 13, name: 'Citroen', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/156/brands/logos/citroen.jpg' },
            { id: 14, name: 'Jeep', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/26/brands/logos/jeep.jpg' },
            { id: 15, name: 'Audi', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/1/brands/logos/audi.jpg' },
            { id: 16, name: 'BMW', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/2/brands/logos/bmw.jpg' },
            { id: 17, name: 'Mercedes-Benz', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/7/brands/logos/mercedes-benz.jpg' },
            { id: 18, name: 'Volvo', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/21/brands/logos/volvo.jpg' },
            { id: 19, name: 'Jaguar', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/5/brands/logos/jaguar.jpg' },
            { id: 20, name: 'Land Rover', logo: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/6/brands/logos/land-rover.jpg' }
        ]);
    }, []);

    return (
        <section className="company-list-section">
            <div className="section-header">
                <h2>Browse by Company</h2>
            </div>
            <div className="company-grid">
                {companies.map(company => (
                    <Link to={`/showroom?company=${company.name}`} key={company.id} className="company-card" style={{ textDecoration: 'none' }}>
                        <img src={company.logo} alt={company.name} className="company-logo" />
                        <p className="company-name">{company.name}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default CompanyList;

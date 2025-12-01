import React from 'react';
import Hero from '../components/Hero';
import CompanyList from '../components/CompanyList';
import ContactForm from '../components/ContactForm';

function Home() {
    return (
        <div>
            <Hero />
            <CompanyList />
            <section id="contact" className="contact">
                <div className="contact-container">
                    <div className="contact-info">
                        <h2>Begin Your Journey</h2>
                        <p>Leave your details and our concierge will contact you to schedule a private viewing or test drive.</p>
                        <ul className="info-list">
                            <li><span>📍</span> 123 Luxury Lane, Beverly Hills, CA</li>
                            <li><span>📞</span> +1 (800) 555-0199</li>
                            <li><span>✉️</span> concierge@velocita.com</li>
                        </ul>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}

export default Home;

import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert(`Thank you, ${formData.name}! We will contact you shortly.`);
                setFormData({ name: '', email: '', phone: '' });
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please check your connection.');
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required placeholder="+1 (555) 000-0000" />
            </div>
            <button type="submit" className="submit-btn">Request Consultation</button>
        </form>
    );
}

export default ContactForm;

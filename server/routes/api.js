const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const Company = require('../models/Company');
const Contact = require('../models/Contact');

// Get all cars
router.get('/cars', async (req, res) => {
    try {
        const cars = await Car.find().populate('company');
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all companies
router.get('/companies', async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Submit contact form
router.post('/contact', async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });

    try {
        const newContact = await contact.save();

        // Append to Google Sheet
        try {
            const { appendToSheet } = require('../services/googleSheetsService');
            await appendToSheet({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            });
        } catch (sheetError) {
            console.error("Failed to save to Google Sheet:", sheetError);
            // Continue execution, don't fail the request just because sheet failed
        }

        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

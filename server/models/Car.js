const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    emi: { type: String },
    image: { type: String, required: true },
    modelUrl: { type: String }, // URL for the 3D model
    description: { type: String },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }
});

module.exports = mongoose.model('Car', carSchema);

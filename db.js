const mongoose = require('mongoose'); 
const mongoURL = 'mongodb://localhost:27017/hotels';

console.log("Nodemon is running...");

// Set up MongoDB connection (No deprecated options)
mongoose.connect(mongoURL)
    .then(() => console.log('✅ Connected to MongoDB server'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

const db = mongoose.connection;

// MongoDB event listeners
db.on('disconnected', () => {   
    console.warn('⚠️ MongoDB disconnected');
});

module.exports = db;


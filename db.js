const mongoose = require('mongoose'); 
require('dotenv').config();
// MongoDB connection string (Update with your actual password and database name)
//const mongoURL = 'mongodb://localhost:27017/hotelDB';
const mongoURL = 'mongodb+srv://gokulsant684:santg@cluster0.vc010.mongodb.net/mydatabase?retryWrites=true&w=majority';

console.log("🚀 Nodemon is running...");

// Connect to MongoDB (No deprecated options)
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ Connected to MongoDB server'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Get default connection
const db = mongoose.connection;

// MongoDB event listeners
db.on('error', (err) => console.error('❌ MongoDB connection error:', err));
db.on('disconnected', () => console.warn('⚠️ MongoDB disconnected'));

// Export the database connection
module.exports = db;


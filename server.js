const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));


// Health check endpoint for Render
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    try {
        // Here you would typically set up nodemailer to send emails
        // For demonstration purposes, we'll just log the data
        console.log('Contact form submission:', { name, email, subject, message });
        
        // Send success response
        res.status(200).json({ success: true, message: 'Message received! We will contact you soon.' });
    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({ success: false, message: 'An error occurred. Please try again later.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

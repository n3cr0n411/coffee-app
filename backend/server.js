const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/coffeeDB');

// Import Routes
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');
const chatbotRoutes = require('./routes/chatbot');
const paymentRoutes = require('./routes/payment');

app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/payment', paymentRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

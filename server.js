// server.js
require('dotenv').config();

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoURI = require('./config/database');
const bookRoutes = require('./route/bookroute');
const cartRoutes = require('./route/cartroute');
const orderRoutes = require('./route/orderoute');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

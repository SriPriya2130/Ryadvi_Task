// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
let cart = [];

// Add book to cart
router.post('/add', (req, res) => {
  const { book, quantity } = req.body;
  const itemExists = cart.find(item => item.book._id === book._id);

  if (itemExists) {
    itemExists.quantity += quantity;
  } else {
    cart.push({ book, quantity });
  }
  res.json(cart);
});

// Remove book from cart
router.post('/remove', (req, res) => {
  const { bookId } = req.body;
  cart = cart.filter(item => item.book._id !== bookId);
  res.json(cart);
});

// Get current cart
router.get('/', (req, res) => {
  res.json(cart);
});

module.exports = router;

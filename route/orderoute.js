// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../model/ordermodel');
const Book = require('../model/bookmodel');

// Place an order
router.post('/confirm', async (req, res) => {
  const { user, cart } = req.body;
  
  // Create order
  const order = new Order({ user, cart, totalPrice: calculateTotal(cart) });
  await order.save();
  
  // Mark books as unavailable
  for (let item of cart) {
    const book = await Book.findById(item.book._id);
    book.available = false;
    await book.save();
  }

  res.json({ message: 'Order confirmed', order });
});

const calculateTotal = (cart) => {
  return cart.reduce((acc, item) => acc + item.book.price * item.quantity, 0);
};

module.exports = router;

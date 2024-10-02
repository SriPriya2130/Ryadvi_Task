// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const Book = require('../model/bookmodel');

// Get all featured books
router.get('/featured', async (req, res) => {
  const books = await Book.find({ available: true }).limit(6);
  res.json(books);
});

// Get book details by ID
router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

module.exports = router;

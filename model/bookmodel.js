// models/bookModel.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  available: { type: Boolean, default: true },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;

const mongoose = require('mongoose');

// create a schema for the book model

// fields: title, isbn, author, description, published_date, publisher, updated_date

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    published_date: {
        type: Date,
        // required: true
    },
    publisher: {
        type: String,
        required: true
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('book', BookSchema);
const express = require('express');
// use router to define routes in express
const router = express.Router();

// load Book model

const Book = require('../../models/Book');


// test book route
router.get('/test', (req, res) => res.json({msg: 'Books works'}));

// show all the books

router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({
            nobooksfound: 'No books found'
        }));
});

// add a book

router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({msg: 'Book added successfully'}))
        .catch(err => res.status(400).json({
            error: 'Unable to add this book'
        }));
});

module.exports = router;
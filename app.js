const express = require('express');
const dotenv = require('dotenv');

// load env vars
dotenv.config();

const connectDB = require('./config/db');

// routes
const books = require('./routes/api/books');

// instantiate express
const app = express();



// connect to database
connectDB();

// welcome route

app.get('/', (req, res) => res.send('Hello World!'));

// use books route

app.use('/api/books', books)

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
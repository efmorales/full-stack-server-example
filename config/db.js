const mongoose = require('mongoose');
const db = process.env.MONGO_URI;

// Connect to MongoDB with mongoose 7.0.1

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(db,{
            // useNewUrlParser: true,
        })
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
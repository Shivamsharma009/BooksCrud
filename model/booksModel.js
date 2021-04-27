const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    authorName:{
        type: String,
        required: true,
    },
    DateofCreation: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});


const booksModel = mongoose.model('books', booksSchema);

module.exports = booksModel;
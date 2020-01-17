const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: Array },
    description: { type: String },
    image: { type: String },
    link: { type: String },
    dateAdded: { type: Date, default: Date.now },
    publishedDate: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
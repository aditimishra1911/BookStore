import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String
})

// Whatever schema we have created, we will convert to model
// Name of Collection is "Book"
const Book = mongoose.model("Book",bookSchema);

export default Book;
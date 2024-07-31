import Book from "../model/book.model.js"

// The model defines the schema for the Books collection in the MongoDB database, including the structure and data validation rules for each document in the collection.

export const getBook = async (req,res) => {
    try {
        const book = await Book.find()
        res.status(200).json(book)
    } catch(error)
    {
        console.log("Error:", error)
        res.status(500).json(error)
    }
}

// getBook Function:

// Purpose: To fetch all books from the database and send them as a JSON response.
// Error Handling: If an error occurs during the database operation, it logs the error and responds with a 500 status code, indicating an internal server error.
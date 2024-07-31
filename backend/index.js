import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import contactRoute from "./route/contact.route.js"
import cors from "cors"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
app.use(cors())  // This is an middleware

// Jo bhi data hum body se bhej rahe hai use json mein parse karega
app.use(express.json());

// CONNECTION TO MONGODB
try{
    mongoose.connect(URI, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    });
    console.log("Connected to MongoDB");
}catch(error){
    console.log("Error:", error)
}

// Defining routes- This route is handled by the getBook function.
app.use("/book", bookRoute)
// /book/Home/getBook
app.use("/user", userRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

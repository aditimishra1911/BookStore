import express from "express";
import { getBook } from "../controller/book.controller.js";

// This allows you to define routes separately from the main app, improving organization and modularity.
const router = express.Router();

// When a GET request is made to this path, the getBook function from the controller is executed.
router.get("/", getBook);

// The router is exported so it can be integrated into the main application, where it will be used to handle requests to /books or whatever path the router is mounted on.
export default router;
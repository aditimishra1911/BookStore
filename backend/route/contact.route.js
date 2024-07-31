import express from "express";
import { contactForm } from "../controller/contact.controller.js";

// Create an instance of Express Router
const router = express.Router();

// Define a POST route for the contact form
// When a POST request is made to /, the contactForm function from the controller is executed.
router.post("/", contactForm);

// Export the router instance
// This router will be used to handle requests to /contacts or whatever path it is mounted on in the main app.
export default router;

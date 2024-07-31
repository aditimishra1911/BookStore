import Contact from "../model/contact.model.js";

export const contactForm = async (req, res) => {
    try {
        const response = req.body;

        await Contact.create(response);

        // Return a success response
        return res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error:", error);

        // Return an error response with appropriate status code
        return res.status(500).json({ message: "Message not delivered", error: error.message });
    }
};

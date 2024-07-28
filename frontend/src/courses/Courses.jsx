import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

const Courses = () => {
    
    return (
        <>
            <Navbar />
            {/* The min-h-screen class ensures that the content area (containing the Course component) always takes up at least the full height of the viewport, even if the content inside it is not enough to fill the screen. */}
            <div className="min-h-screen">
                <Course />
            </div>
            <Footer />
        </>
    )
}

export default Courses

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Navbar onSearch={setSearchTerm} />
            <div className="min-h-screen">
                <Course searchTerm={searchTerm} />
            </div>
            <Footer />
        </>
    );
}

export default Courses;

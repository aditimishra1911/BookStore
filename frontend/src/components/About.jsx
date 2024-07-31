import React from 'react';
import about from "/about.png";

const About = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Content Container */}
            <div className="flex flex-col md:flex-row items-stretch justify-center flex-grow p-4 md:p-8">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-10">
                    <img 
                        src={about}
                        alt="Bookstore"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg p-8 rounded-lg w-full">
                        <h2 className="text-4xl font-bold mb-6 text-center dark:text-white">About Our Bookstore</h2>
                        <p className="text-lg leading-relaxed mb-4 dark:text-gray-300">
                            Welcome to our bookstore! Established in 2000, we have been serving book lovers with a wide range of genres, from timeless classics to the latest bestsellers. Our mission is to foster a love for reading in the community by offering a diverse collection of books that cater to all ages and interests.
                        </p>
                        <p className="text-lg leading-relaxed mb-4 dark:text-gray-300">
                            Our store is more than just a place to buy books. It's a haven for book enthusiasts, a space where you can immerse yourself in stories, gain knowledge, and find inspiration. We host regular events, including author readings, book signings, and book clubs, to create a vibrant literary community.
                        </p>
                        <p className="text-lg leading-relaxed mb-4 dark:text-gray-300">
                            We pride ourselves on our knowledgeable and friendly staff, who are always ready to help you find your next great read. Whether you are looking for a specific title or need recommendations, we are here to assist you.
                        </p>
                        <p className="text-lg leading-relaxed dark:text-gray-300">
                            Thank you for supporting our independent bookstore. We look forward to welcoming you and sharing our passion for books.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

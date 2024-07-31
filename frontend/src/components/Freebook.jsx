import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";

const Freebook = () => {

    const [book, setBook] = useState([])

    useEffect(() => {
        // The 'getBook' function makes an HTTP GET request to fetch the data, and upon success, it updates the book state with the data received from the server.
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:3000/book");
                console.log(res.data)
                const data = res.data.filter((data) => data.category === "Free");
                setBook(data);
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>

            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>

                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>

                    <p>Unlock your potential with our exclusive free courses! Dive into a world of knowledge and skill-building opportunities at no cost. Whether you’re looking to master new technologies, enhance your professional skills, or explore new hobbies, our free courses are designed to empower you. Don’t miss out on this chance to elevate your learning journey—sign up now and start your path to success today!</p>

                </div>


                {/* SLIDER  */}
                <div>
                    <Slider {...settings}>

                        {/* MAPPING THE CARDS  */}
                        {/* Our parent component is Freebook and our child component is card. So we will use props to pass data from parent componet to child component */}

                        {/* <Cards /> is a React component that is being rendered for each item in the filterData array.
item={item} passes the current item from the filterData array to the Cards component as a prop named item. This allows the Cards component to access the data of the current item.
key={item.id} is a special prop in React used to identify each element in a list uniquely. */}

                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebook

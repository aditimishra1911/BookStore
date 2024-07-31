import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from "axios";


const Course = ({ searchTerm }) => {
  // This variable  book holds the current state, which in this context, is intended to store an array of book data.
  const [book,setBook] = useState([])

  useEffect(() => {
    // The 'getBook' function makes an HTTP GET request to fetch the data, and upon success, it updates the book state with the data received from the server.
    const getBook = async ()=> {
      try{
        const res = await axios.get("http://localhost:3000/book");
        console.log(res.data)
        setBook(res.data)
      }catch(error) {
        console.log(error)
      }
    }
    getBook();
  },[])

  const filteredBooks = book.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We're delighted to have you {' '}
            <span className='text-pink-500'>Here! :)</span>
          </h1>

          <p className='mt-12'>
            With expertly curated content by industry professionals, these courses cover a wide range of topics, ensuring there is something for everyone. The user-friendly platform makes it easy to access materials and track progress, while interactive elements and practical exercises enhance understanding and retention.
          </p>

          <Link to="/">
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
              Back
            </button>
          </Link>

          {/* This is an array of items, where each item represents data that will be passed to a Cards component. */}
          <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4'>
            {
              filteredBooks.map(item => (
                <Cards key={item.id} item={item} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;

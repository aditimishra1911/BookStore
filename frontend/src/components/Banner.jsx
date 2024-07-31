import React from 'react'
import banner from "/Banner.png"

const Banner = () => {
    return (
        <>
            {/* For small devices flex will be col, and for medium devices flex will be row */}
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>

                {/* For small devices width will be full, and for medium devices width will be 50- 50  */}

                {/* Left  */}
                <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>

                    <div className='space-y-12'>

                        <h1 className='text-4xl font-bold'>
                            Discover Your Next Adventure – <span className='text-pink-500'>One Page at a Time!</span>
                        </h1>

                        <p>
                            Welcome to our bookstore, where every page holds a world of possibilities. Dive into an expansive collection of literature, from timeless classics to contemporary bestsellers. Let us be your guide on this literary journey, as we bring you closer to the books and authors that inspire and captivate. Happy reading!
                        </p>

                        {/* Email  */}
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>

                    </div>

                    <button className="btn mt-6 btn-secondary">Get Started</button>

                </div>

                {/* Right  */}
                <div className='order-1 w-full md:w-1/2'>
                    <img src={banner} className="w-full h-auto object-cover dark:bg-slate-900" alt="Banner Image" />
                </div>

            </div>
        </>
    )
}

export default Banner;

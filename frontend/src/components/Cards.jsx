import React from 'react';

// Receiving the prop {item}
const Cards = ({ item }) => {
    return (
        <>
            <div className='mt-4 my-3'>

                <div className="card bg-base-100 shadow-xl w-80 h-96 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border"> {/* Apply scaling effect on hover */}
                    <figure className="overflow-hidden h-3/4"> {/* Remove hover scaling from here */}
                        <img
                            src={item.image}
                            alt={item.name} // Use the item's name as alt text
                            className="w-full h-full object-cover" // Ensure image covers the area without distortion
                        />
                    </figure>
                    <div className="card-body h-1/2 p-4 flex flex-col justify-between">
                        <h2 className="card-title text-xl font-bold">
                            {item.name}
                            <div className="badge badge-secondary ml-2">{item.category}</div>
                        </h2>
                        <p className="text-sm text-gray-700">{item.description}</p>
                        <div className="card-actions flex justify-between items-center mt-4">
                            <div className="badge badge-outline">${item.price}</div>
                            <button className="cursor-pointer px-2 py-1 rounded-full border-[2px]  hover:bg-pink-400 hover:text-white duration-200">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Cards;

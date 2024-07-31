import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const contactInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        };

        try {
            const response = await axios.post("http://localhost:3000/contact", contactInfo);
            console.log(response.data);
            
            if (response.data) {
                toast.success("Message sent successfully");
                // Clear the form after successful submission
                document.getElementById("contact-form").reset();
            }
        } catch (error) {
            if (error.response) {
                console.log(error);
                toast.error("Error: " + error.response.data.message);
            } else {
                toast.error("An unexpected error occurred.");
            }
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 border-[2px] border-gray-300 dark:border-gray-700 shadow-lg p-8 rounded-md w-full max-w-md relative">
                <h3 className="font-bold text-2xl text-center dark:text-white">Contact Us</h3>
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    {/* Name */}
                    <div className='mt-6'>
                        <label className='block text-gray-700 dark:text-gray-300 mb-2' htmlFor='name'>Name</label>
                        <input
                            id='name'
                            type="text"
                            placeholder='Enter your full name'
                            {...register('name', { required: "Name is required" })}
                            className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white`}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div className='mt-6'>
                        <label className='block text-gray-700 dark:text-gray-300 mb-2' htmlFor='email'>Email</label>
                        <input
                            id='email'
                            type="email"
                            placeholder='Enter your email'
                            {...register('email', { required: "Email is required" })}
                            className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Message */}
                    <div className='mt-6'>
                        <label className='block text-gray-700 dark:text-gray-300 mb-2' htmlFor='message'>Message</label>
                        <textarea
                            id='message'
                            placeholder='Enter your message'
                            {...register('message', { required: "Message is required" })}
                            className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} dark:border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>

                    {/* Send Message Button */}
                    <div className="mt-8 flex flex-col items-center">
                        <button type="submit" className='w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 duration-200'>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;

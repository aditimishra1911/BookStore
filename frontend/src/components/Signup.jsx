import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        axios.post("http://localhost:3000/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("SignUp Successfully");
                    navigate("/");  // Corrected the usage of navigate function
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };

    return (
        <>
            <div className='flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900'>
                <div className="bg-white dark:bg-gray-800 border-[2px] border-gray-300 dark:border-gray-700 shadow-lg p-8 rounded-md w-full max-w-md relative">
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    <h3 className="font-bold text-2xl text-center dark:text-white">Sign Up</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <div className='mt-6'>
                            <label className='block text-gray-700 dark:text-gray-300 mb-2' htmlFor='fullname'>Name</label>
                            <input
                                id='fullname'
                                type="text"
                                placeholder='Enter your full name'
                                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white'
                                {...register("fullname", { required: true })}
                            />
                            {errors.fullname && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>

                        {/* Email */}
                        <div className='mt-6'>
                            <label className='block text-gray-700 dark:text-gray-300 mb-2' htmlFor='email'>Email</label>
                            <input
                                id='email'
                                type="email"
                                placeholder='Enter your email'
                                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className='mt-6'>
                            <label className='block text-gray-700 dark:text-gray-300 mb-2' htmlFor='password'>Password</label>
                            <input
                                id='password'
                                type="password"
                                placeholder='Enter your password'
                                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white'
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>

                        {/* Sign Up Button */}
                        <div className="mt-8 flex flex-col items-center">
                            <button type="submit" className='w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 duration-200'>
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className='mt-4 text-gray-600 dark:text-gray-300'>
                        Have an account?
                        <button
                            className='underline text-pink-500 hover:text-pink-700 ml-1'
                            onClick={() => document.getElementById("my_modal_3").showModal()}
                        >
                            Login
                        </button>
                    </p>
                </div>
            </div>

            {/* Include the Login component which contains the modal */}
            <Login />
        </>
    );
};

export default Signup;

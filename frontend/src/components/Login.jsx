import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate(); // Initialize useNavigate

    const onSubmit = (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }

        axios.post("http://localhost:3000/user/login", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success("Logged in Successfully")
                    localStorage.setItem("Users", JSON.stringify(res.data.user))
                    
                    // Close the modal after successful submission
                    const modal = document.getElementById("my_modal_3");
                    if (modal) modal.close();
                    
                    // Redirect to the home page
                    navigate('/');
                }
            }).catch((err) => {
                if (err.response) {
                    console.log(err)
                    toast.error("Error: " + err.response.data.message)
                }
            })
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-gray-800">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close button */}
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</button>

                        <h3 className="font-bold text-lg dark:text-white">Login</h3>

                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span className="dark:text-gray-300">Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='w-80 px-4 py-1 border rounded-md outline-none dark:bg-gray-700 dark:text-white'
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span className="dark:text-gray-300">Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder='Enter your password'
                                className='w-80 px-4 py-1 border rounded-md outline-none dark:bg-gray-700 dark:text-white'
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>

                        {/* Button */}
                        <div className="flex justify-around mt-4">
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                        </div>

                        <p className="dark:text-gray-300 mt-4 text-center">
                            Not registered?
                            <Link to="/signup" className='underline text-blue-400 cursor-pointer ml-1'> Sign Up</Link>
                        </p>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;

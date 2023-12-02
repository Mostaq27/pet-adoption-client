
import React, { useContext, useEffect, useRef, useState } from 'react'
import signupImg from "../../assets/signup.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';




const SignUp = () => {
    const { register, getValues, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, upodateUserProfole } = useAuth();
    const navigate = useNavigate();


    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                upodateUserProfole(data.name, data.photoURL)
                    .then(() => {
                        // console.log('user profileinfo updated')
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }
                        axios.post('http://localhost:5000/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')

                                    reset();
                                    Swal.fire({
                                        position: "top",
                                        icon: "success",
                                        title: "Create user Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/');
                                }
                            });
                    })
                    .catch(error => console.log(error))
            })
    };





    return (
        <>


            <div className="hero log-in min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl">
                    <div className="text-center md:w-1/2 lg:text-left ">
                        <img src={signupImg} className='h-[500px]' alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm  ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h2 className='text-5xl font-bold text-center text-black'>SignUp now!</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered " />
                                {errors.email && <span className="text-red-600">Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*[@#$!%^&*()_+])[A-Za-z\d@#$!%^&*()_+]{6,}$/i })} name="password" placeholder="password" className="input input-bordered " />
                                {errors.password?.type === 'pattern' && <p className="text-red-500">More than 6 digit with capital latter & special character</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary text-white font-semibold" value="Sign Up" />
                            </div>
                            <div className="form-control">
                                <p className='text-[#e98d4c]'><small>Already registered? <Link to='/login'>  Go to log in</Link></small></p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SignUp;
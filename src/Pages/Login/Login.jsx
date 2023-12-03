import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
// import './Login.css'
import loginImg from "../../assets/login.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location :', location.state)

   

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "User Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
           
    }

   
    return (
        <>
           
            <div className="hero log-in min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl">

                    <div className="card shrink-0 w-full max-w-sm  ">
                        <form onSubmit={handleLogin} className="card-body">
                            <h2 className='text-5xl font-bold text-center text-black'>Login now!</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered bg-white" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary text-white font-semibold bg-[#D1A054]" value="Login" />
                            </div>
                            
                            <div className="form-control">
                                <p className='text-[#e98d4c]'><small>New Here? <Link to={'/signup'}> Create an Acount</Link></small></p>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                    <div className="text-center md:w-1/2 lg:text-left ">
                        <img src={loginImg} className='h-[500px]' alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
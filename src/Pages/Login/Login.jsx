import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
// import './Login.css'
import loginImg from "../../assets/login.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location :', location.state)

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

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

    const handleValidateCaptcha = (e) => {
        const use_captcha_value = e.target.value;
        if (validateCaptcha(use_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
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
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleValidateCaptcha} name="captcha" placeholder="Type the captcha above" className="input input-bordered bg-white" required />
                                {/* <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button> */}
                            </div>
                            <div className="form-control mt-6">
                                {/* TODO: apply disabled for re captcha */}
                                <input type="submit" disabled={false} className="btn btn-primary text-white font-semibold bg-[#D1A054]" value="Login" />
                            </div>
                            
                            <div className="form-control">
                                <p className='text-[#e98d4c]'><small>New Here? <Link to={'/signup'}> Create an Acount</Link></small></p>
                            </div>
                        </form>
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
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Components/UserManagement/AuthProvider';
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Login = () => {

    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        const userData = new FormData(event.currentTarget);
        const email = userData.get('email');
        const password = userData.get('password');
        console.log(email, password)

        // logging in
        signInUser(email, password)
            .then((result) => {
                console.log('logged in', result.user)
                // const userData = { email }
                toast.success('Successfully Logged in')
                // console.log(userData)
                // get access token
                // axios.post('http://localhost:5000/jwt', userData, { withCredentials: true })
                //     .then(res => {
                //         console.log(res.data)
                //         if (res.data.success) {
                //             navigate('/')
                //             console.log(res.data)
                //         }
                //     })
            })
            .catch((error) => {
                console.log(error.message)
                toast.error(error.message)
            })
    }

    const [showPassword, setShowPassword] = useState(false)
    const handleToggleShowPassword = () => {
        setShowPassword(!showPassword)
        // console.log(showPassword)
    }

    return (
        <div className="hero bg-orange-50 mt-6">
            <Toaster></Toaster>
            <div className="hero-content w-full flex-col lg:flex-row justify-evenly">
                <div className="text-center lg:text-left">
                    <img src={loginImage} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className='text-3xl text-center text-gray-400 font-bold'>Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name='email'
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <label className='flex items-center relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="password"
                                    name='password'
                                    className="input input-bordered"
                                    required
                                />
                                <span className='absolute right-[30%]' onClick={handleToggleShowPassword}>
                                    {
                                        !showPassword ? <FaRegEye />
                                            : <FaEyeSlash />
                                    }
                                </span>
                            </label>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-orange-500">Login</button>
                        </div>
                    </form>
                    <p className='mb-12 text-center'>Do not have an account ? <br /> <Link to='/register' className='text-orange-500 font-bold'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
import { Link, useNavigate } from 'react-router-dom';
import registerImage from '../../assets/images/login/login.svg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Components/UserManagement/AuthProvider';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa6';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegisterUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(userName, email, password)

        // Signing up the user
        createUser(email, password)
            .then((result) => {
                console.log('created user', result.user)
                // updateUser(userName)
                toast.success('Registration Successful')
                navigate('/')
            })
            .catch((error) => {
                console.log(error.message);
            })



    }

    const [showPassword, setShowPassword] = useState(false)
    const handleToggleShowPassword = () => {
        setShowPassword(!showPassword)
    }


    return (
        <div className="hero bg-orange-50 mt-6">
            <Toaster></Toaster>
            <div className="hero-content w-full flex-col lg:flex-row justify-evenly">
                <div className="text-center lg:text-left">
                    <img src={registerImage} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegisterUser}>
                        <h1 className='text-3xl text-center text-gray-400 font-bold'>Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                name='name'
                                className="input input-bordered"
                                required
                            />
                        </div>
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
                            <button type='submit' className="btn bg-orange-500">Register</button>
                        </div>
                    </form>
                    <p className='mb-12 text-center'>Already have an account ? <br />
                        <Link to='/login' className='text-orange-500 font-bold'>Sign in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
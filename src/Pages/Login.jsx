import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import Loading from './Loading';

const Login = () => {
    const [show, setShow] = useState(false);
    const {signIn, setUser, setLoading, loading, signWithGoogle} = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    if(loading) return <Loading/>

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(res => {
            setUser(res.user)
            toast.success('SignIn Successfully')
            setLoading(false)
            navigate(`${location.state ? location.state : '/'}`)
        })
        .catch(err => {
            toast.error(err.message)
        })
    }

    const handleGoogleSignIn = () => {
            signWithGoogle()
                .then(res => {
                    setUser(res.user)
                    toast.success('Register Successfully')
                    setLoading(false)
                    navigate(`${location.state ? location.state : '/'}`)
                })
                .catch(err => {
                    toast(err.message)
                })
        }

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#6d8c54] py-12 px-3 md:px-0">
            {/* Form Card Container */}
            <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Sign In
                </h2>

                {/* Sign up with Google Button */}
                <button onClick={handleGoogleSignIn} className="w-full flex items-center gap-1.5 justify-center border border-gray-300 rounded-lg py-2.5 text-gray-700 hover:bg-gray-50 transition duration-150 mb-6">
                    <FcGoogle size={24} />
                    <span className="font-semibold text-sm">Sign up with Google</span>
                </button>

                <form onSubmit={handleSignIn} className="space-y-4">

                    {/* Email Field */}
                    <input
                        type="email"
                        name='email'
                        placeholder="Email*"
                        required
                        className="w-full px-4 py-3 border-b border-gray-300 focus:border-green-500 focus:ring-0 outline-none text-gray-700 placeholder-gray-500 transition duration-150 font-medium"
                    />

                    {/* Password Field */}
                    <div className="relative">
                        <input
                            type={show ? "text" : "password"}
                            name='password'
                            placeholder="Password*"
                            required
                            className="w-full px-4 py-3 border-b border-gray-300 focus:border-green-500 focus:ring-0 outline-none text-gray-700 placeholder-gray-500 pr-10 transition duration-150 font-medium"
                        />
                        {/* Eye icon - use a proper React icon library (like lucide-react) for production */}
                        <span onClick={() => setShow(!show)} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 text-gray-500 cursor-pointer text-xl">
                            {show ? <FaEye size={25} /> : <IoEyeOff size={25} />}
                        </span>
                    </div>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#f1cf69] text-[#334b35] py-3 rounded-lg font-semibold text-lg hover:bg-[#334b35] hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-150"
                    >
                        SignIn your account
                    </button>
                    <p className='text-center my-5'>Don't Have An Account? <Link to={'/register'} className='text-[#F75B5F]'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
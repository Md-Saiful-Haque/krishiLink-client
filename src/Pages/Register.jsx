import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';

const Register = () => {
    const [show, setShow] = useState(false);
    const { createUser, setUser, updateUser, setLoading, signWithGoogle } = use(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const handleSignUp = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        //console.log(name, email, photoURL, password)
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;

        if(!uppercase.test(password)) {
            setError('Password at least one uppercase latter')
            return
        }

        if(!lowercase.test(password)) {
            setError('Password at least one lowercase latter')
            return
        }

        if(password.length < 6) {
            setError('Password must be 6 characters')
            return
        }

            createUser(email, password)
                .then(res => {
                    updateUser({ displayName, photoURL })
                    .then(() => {
                        setUser({ ...res.user, displayName, photoURL })
                        toast.success('Register Successfully')
                        setLoading(false)
                    })
                    .catch(err => {
                        toast(err.message)
                    })
                    navigate(`${location.state ? location.state : '/'}`)
                })
                .catch(error => {
                    toast.error(error.message)
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
            <title>krishiLink-Register</title>
            {/* Form Card Container */}
            <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Sign up
                </h2>

                {/* Sign up with Google Button */}
                <button onClick={handleGoogleSignIn} className="w-full flex items-center gap-1.5 justify-center border border-gray-300 rounded-lg py-2.5 text-gray-700 hover:bg-gray-50 transition duration-150 mb-6">
                    <FcGoogle size={24} />
                    <span className="font-semibold text-sm">Sign up with Google</span>
                </button>

                <form onSubmit={handleSignUp} className="space-y-4">
                    {/* Name Fields in a grid for alignment */}
                    <div className="">
                        <input
                            type="text"
                            name='name'
                            placeholder="Name*"
                            required
                            className="w-full px-4 py-3 border-b border-gray-300 focus:border-green-500 focus:ring-0 outline-none text-gray-700 placeholder-gray-500 transition duration-150 font-medium"
                        />
                    </div>
                    {/* photo Field */}
                    <input
                        type="text"
                        name='photoURL'
                        placeholder="photoURL"
                        className="w-full px-4 py-3 border-b border-gray-300 focus:border-green-500 focus:ring-0 outline-none text-gray-700 placeholder-gray-500 transition duration-150 font-medium"
                    />

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
                        {/* Eye icon  */}
                        <span onClick={() => setShow(!show)} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 text-gray-500 cursor-pointer text-xl">
                            {show ? <FaEye size={25} /> : <IoEyeOff size={25} />}
                        </span>
                    </div>
                    <p className='text-red-500'>{error}</p>

                    {/* Terms and Privacy Checkbox */}
                    <div className="flex items-start pt-2 pb-4">
                        <input
                            id="terms-checkbox"
                            type="checkbox"
                            required
                            className="mt-1 w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500"
                        />
                        {/* Note: In React/JSX, 'for' attribute becomes 'htmlFor' */}
                        <label htmlFor="terms-checkbox" className="ml-2 text-sm font-light text-gray-700">
                            I agree to the
                            <a href="#" className="font-medium text-green-600 hover:text-green-700">Terms of Service</a>
                            and
                            <a href="#" className="font-medium text-green-600 hover:text-green-700">Privacy Policy</a>.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#f1cf69] text-[#334b35] py-3 rounded-lg font-semibold text-lg hover:bg-[#334b35] hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-150"
                    >
                        Create your account
                    </button>
                    <p className='text-center my-5'>Already Have An Account ? <Link to={'/login'} className='text-[#F75B5F]'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
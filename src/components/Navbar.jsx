import React, { use } from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import Banner from './Banner';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Logged Out')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <div className='bg-[#334b35]'>
            <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
                <div className='flex items-center'>
                    <img src={logo} alt="" className='w-20 h-20' />
                    <h2 className='text-xl font-bold text-white'>Krishi</h2>
                </div>
                <div className='text-[#a4b7a6] space-x-5'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/all-crops'}>All Crops</NavLink>
                    <NavLink to={'/login'}>Login</NavLink>
                    <NavLink to={'/register'}>Register</NavLink>
                    {
                        user && <>
                            <NavLink>Profile</NavLink>
                            <NavLink>Add crops</NavLink>
                            <NavLink>My posts</NavLink>
                            <NavLink>My interests</NavLink>
                        </>

                    }
                </div>
                <div>
                    {
                        user && <Link to={'/register'}><button onClick={handleSignOut} className='bg-[#f1cf69] px-8 py-2 rounded-md text-[#334b35] font-medium text-[16px]'>Signout</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
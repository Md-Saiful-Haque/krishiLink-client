import React from 'react';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='bg-[#334b35]'>
            <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
                <div className='flex items-center'>
                    <img src={logo} alt="" className='w-20 h-20'/>
                    <h2 className='text-xl font-bold text-white'>Krishi</h2>
                </div>
                <div className='text-[#a4b7a6] space-x-5'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink>All Crops</NavLink>
                    <NavLink>Login</NavLink>
                    <NavLink>Register</NavLink>
                </div>
                <div>
                    <button className='bg-[#f1cf69] px-8 py-2 rounded-md text-[#334b35] font-medium text-[16px]'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
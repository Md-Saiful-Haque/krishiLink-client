import React, { use } from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
//import userImg from '../assets/user.jpg'
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
        <div className='bg-[#334b35] '>
            <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div className='flex items-center'>
                    <img src={logo} alt="" className='w-20 h-20' />
                    <h2 className='text-xl font-bold text-white'>Krishi</h2>
                </div>
                <div className='text-[#a4b7a6] space-x-5 p-3 md:p-0 mb-3 md:mb-3'>
                    <NavLink to={'/'} style={({ isActive }) => ({ color: isActive && '#f1cf69' })}>Home</NavLink>
                    <NavLink to={'/all-crops'} style={({ isActive }) => ({ color: isActive && '#f1cf69' })}>All Crops</NavLink>

                    <NavLink to={'/about'} style={({ isActive }) => ({ color: isActive && '#f1cf69' })}>About</NavLink>
                    <NavLink to={'/privacy'} style={({ isActive }) => ({ color: isActive && '#f1cf69' })}>Privacy</NavLink>
                    <NavLink to={'/blog'} style={({ isActive }) => ({ color: isActive && '#f1cf69' })}>Blog</NavLink>
                    {
                        !user && <>
                            {/* <NavLink to={'/profile'} style={({ isActive }) => ({ color: isActive && '#f1cf69' })}>Profile</NavLink> */}
                            <NavLink to={'/login'} style={({ isActive }) => ({ color: isActive && '#f1cf69' })}>Login</NavLink>
                            <NavLink to={'/register'} style={({ isActive }) => ({ color: isActive && '#f1cf69' })}>Register</NavLink>
                        </>

                    }
                </div>
                <div className='flex items-center gap-2 justify-between'>
                    {/* {
                        user && <Link to={'/register'}><button onClick={handleSignOut} className='bg-[#f1cf69] px-8 py-2 rounded-md text-[#334b35] font-medium text-[16px] mb-2 md:mb-0'>Signout</button></Link>
                    } */}
                    {/* <div>
                        {user && <img className='w-[45px] h-[45px] rounded-full' src={user.photoURL} alt="" /> }
                    </div> */}
                    <div className='flex gap-2 items-center'>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className=" m-1"> {
                                user && <img className='w-[45px] h-[45px] rounded-full' src={`${user && user?.photoURL}`} alt="" />
                                }
                            </div>

                            <div tabIndex="-1" className="dropdown-content menu bg-[#f2f2f2] rounded-box z-1 w-52 p-3 shadow-sm text-gray-400">
                                <Link to={'/dashboard'} className='text-left hover:bg-neutral-100 font-bold px-1 py-1.5 text-lg'>Dashboard</Link>
                                {
                                    user && <Link to={'/dashboard/profile'} className='text-left hover:bg-neutral-100 font-bold px-1 py-1.5 text-lg'>Profile</Link>
                                }
                                {
                                    user && <Link to={'/register'}
                                    onClick={handleSignOut}
                                    className='text-left hover:bg-neutral-100 font-bold px-1 py-1.5 text-lg my-2'>Signout</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
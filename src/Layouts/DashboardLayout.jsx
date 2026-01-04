import React from 'react';
import Navbar from '../components/Navbar';
import { Link, NavLink, Outlet } from 'react-router';
import { MdOutlineAddToPhotos, MdPostAdd } from 'react-icons/md';
import { FiHome } from 'react-icons/fi';
import { GiReceiveMoney } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';


const DashboardLayout = () => {
    return (
        <><Navbar />
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <div className="px-4 text-[#334b35] font-bold text-3xl">Welcome to Dashboard</div>
                </nav>
                {/* Page content here */}
                <Outlet></Outlet>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li>
                            <Link to={'/'}><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-1.5" data-tip="Home">
                                <FiHome size={20}/>
                                <span className="is-drawer-close:hidden">Home</span>
                            </button>
                            </Link>
                        </li>

                        {/* List item */}
                        <li>
                            <NavLink to={'/dashboard/addCrop'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right my-2" data-tip="Add crops">
                                <MdOutlineAddToPhotos size={20}/>
                                <span className="is-drawer-close:hidden">Add crops</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={'/dashboard/my-post'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My posts">
                                <MdPostAdd size={20}/>
                                <span className="is-drawer-close:hidden">My posts</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={'/dashboard/my-interests'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-2" data-tip="My interests">
                                <GiReceiveMoney size={20}/>
                                <span className="is-drawer-close:hidden">My interests</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={'/dashboard/profile'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-2" data-tip="Profile">
                                <CgProfile size={20}/>
                                <span className="is-drawer-close:hidden">Profile</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default DashboardLayout;
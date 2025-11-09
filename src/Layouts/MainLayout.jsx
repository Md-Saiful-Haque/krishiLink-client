import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Banner from '../components/Banner';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Banner />
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
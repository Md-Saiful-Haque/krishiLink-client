import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Banner from '../components/Banner';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default MainLayout;
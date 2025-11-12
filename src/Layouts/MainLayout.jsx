import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <section>
                <Outlet></Outlet>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;
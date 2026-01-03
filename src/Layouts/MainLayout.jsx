import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Loading from '../Pages/Loading';

const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <section>
                <>
                {navigation.state === "loading" && <><Loading /></>}
                <Outlet></Outlet>
                </>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;
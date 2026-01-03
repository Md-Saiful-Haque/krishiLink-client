import React from 'react';
import bannerImg from '../assets/banner2.jpg'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerImg})` }} className="h-screen w-full bg-cover bg-center">
            <div className='max-w-[1200px] mx-auto flex justify-center items-center'>
                <div className='md:mt-56 mt-40'>
                    <h1 className='momo-font font-extrabold text-4xl md:text-7xl text-white'>Welcome to Krishi</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
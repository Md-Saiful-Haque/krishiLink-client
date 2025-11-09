import React from 'react';
import bannerImg from '../assets/banner2.jpg'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerImg})` }} className="h-screen w-full bg-cover bg-center ">
            <div className='max-w-[1200px] mx-auto flex justify-center items-center'>
                <div className=' '>
                    <h1 className='momo-font font-extrabold text-white'>Welcome to Krishi</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
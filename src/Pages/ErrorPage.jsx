import React from 'react';
import errImg from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='w-full pt-16'>
             <title>Error-404</title>
            <img className="mx-auto" src={errImg} alt="" />
            <div className="space-y-2 flex flex-col justify-center items-center mt-5 mb-5">
                <h1 className="text-2xl font-semibold">Oops, page Not found!</h1>
                <p>The page you are looking for is not available.</p>
                <Link to="/">
                    <button className='bg-linear-to-l from-[#9F62F2] to-[#632EE3] py-3 px-10 rounded-sm text-white'>
                        Go back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
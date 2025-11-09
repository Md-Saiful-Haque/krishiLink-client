import React, { use } from 'react';
import CropsCard from '../components/CropsCard';
import { Link } from 'react-router';

const cropPromise = fetch('http://localhost:3000/latest/crop').then(res => res.json())

const Home = () => {
    const crops = use(cropPromise)
    
    return (
        <div className='mt-14 bg-[#f2f2f2]'>
            <h2 className='text-center font-bold p-8 text-3xl text-[#334b35]'>Latest Crop</h2>
            <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-4'>
                {
                    crops.map(crop => <CropsCard key={crop._id} crop={crop}></CropsCard>)
                }
            </div>
            <div className='mt-10 flex justify-center items-center'>
                <Link to={'/all-crops'}><button className='bg-[#f1cf69] px-8 py-2 rounded-md text-[#334b35] font-medium text-[16px]'>Show More</button></Link>
            </div>
        </div>
    );
};

export default Home;
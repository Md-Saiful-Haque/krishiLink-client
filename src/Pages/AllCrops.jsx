import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import CropsCard from '../components/CropsCard';
import { AuthContext } from '../context/AuthContext';
import Loading from './Loading';

const AllCrops = () => {
    const data = useLoaderData()
    //console.log(crops)
    const [crops, setCrops] = useState(data)
    const {setLoading} = use(AuthContext)

    
    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;

        fetch(`https://krishi-link-server-iota.vercel.app/search?search=${search}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            setCrops(data)
            setLoading(false)
        })
    }

    if(crops.length === 0) return <p className='text-center mt-14 font-bold mb-14'>No crop found here</p>

    return (
        <div className='mt-14 bg-[#f2f2f2] mb-14'>
            <title>krishiLink-All Crop</title>
            <div className='flex justify-between items-center mb-10 max-w-[1200px] mx-auto pt-4'>
                <h2 className='font-bold text-3xl text-[#334b35]'>All Crop</h2>
                <form onSubmit={handleSearch} className='flex justify-center gap-2 items-center'>
                    <label className="input rounded-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input name='search' type="search" required placeholder="Search" />
                    </label>
                    <button className='bg-[#f1cf69] px-8 py-2 text-[#334b35] font-medium text-[16px] rounded-full'>Search</button>
                </form>
            </div>
            <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-4'>
                {
                    crops.map(crop => <CropsCard key={crop._id} crop={crop}></CropsCard>)
                }
            </div>
        </div>
    );
};

export default AllCrops;
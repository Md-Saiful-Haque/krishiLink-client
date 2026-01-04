import React, { useEffect, useState } from 'react';
//import { useLoaderData } from 'react-router';
import CropsCard from '../components/CropsCard';
import { AuthContext } from '../context/AuthContext';
import Loading from './Loading';
import SkeletonLoader from '../components/SkeletonLoader';

const AllCrops = () => {
    //const data = useLoaderData()
    const [crops, setCrops] = useState([])
    const [loading, setLoading] = useState(true)

    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [sort, setSort] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [totalCrops, setTotalCrops] = useState(0);
    const limit = 8;


    useEffect(() => {
        fetch(`https://krishi-link-server-iota.vercel.app/crop?page=${currentPage}&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setCrops(data.result)
                setTotalCrops(data.total)
                setLoading(false)
            })
    }, [currentPage])


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

    const handleFilter = (type, value) => {
        setLoading(true)
        let url = `https://krishi-link-server-iota.vercel.app/filter?${type}=${value}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCrops(data);
                setLoading(false);
            });
    };

    // Handle Sort
    const handleSort = (value) => {
        setLoading(true);
        let url = `https://krishi-link-server-iota.vercel.app/sort?sort=${value}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCrops(data);
                setLoading(false);
                setCurrentPage(1)
            });
    };


    if (crops.length === 0) return <p className='text-center text-2xl mt-14 font-bold mb-14'>No crop found here</p>


    return (
        <div className='pt-10 bg-[#f2f2f2] pb-10'>
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

            {/* 🏷 Filter & Sort */}
            <div className='max-w-[1200px] mx-auto flex gap-4 mb-6 px-3'>
                <select value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                        handleFilter("type", e.target.value);
                    }}
                    className='select'>
                    <option value="">All Type</option>
                    <option value="Vegetable">Vegetable</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Grain">Grain</option>
                </select>

                <select value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                        handleFilter("location", e.target.value);
                    }}
                    className='select'>
                    <option value="">All Location</option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Rangamati">Rangamati</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Bogura">Bogura</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Barishal">Barishal</option>
                </select>

                <select value={sort} onChange={(e) => {
                    setSort(e.target.value)
                    handleSort(e.target.value);
                }}
                    className='select'>
                    <option value="">Sort</option>
                    <option value="low">Price Low → High</option>
                    <option value="high">Price High → Low</option>
                </select>
            </div>

            {
                loading ?
                    <SkeletonLoader /> :
                    <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 p-3 md:p-0 gap-4'>
                        {
                            crops.map(crop => <CropsCard key={crop._id} crop={crop}></CropsCard>)
                        }
                    </div>
            }

            {/* Pagination */}
            {
                totalCrops > limit && (
                    <div className="flex justify-center mt-8 gap-2">
                        {
                            [...Array(Math.ceil(totalCrops / limit)).keys()].map(number => (
                                <button
                                    key={number}
                                    onClick={() => setCurrentPage(number + 1)}
                                    className={`px-4 py-2 rounded 
              ${currentPage === number + 1
                                            ? 'bg-green-600 text-white'
                                            : 'bg-gray-300'}`}
                                >
                                    {number + 1}
                                </button>
                            ))
                        }
                    </div>
                )
            }


        </div>
    );
};

export default AllCrops;
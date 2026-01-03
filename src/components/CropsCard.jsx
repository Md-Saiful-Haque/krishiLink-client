import React from 'react';
import { Link } from 'react-router';

const CropsCard = ({ crop }) => {
    //console.log(crop)
    return (
        <div className='bg-[#FFFFFF] shadow-md p-3 rounded-md'>
            <div>
                <img src={crop.image} alt="" className='h-[300px] w-full object-cover rounded-md' />
            </div>
            <h3 className='my-2 font-bold'>{crop.name}</h3>
            <div className='flex justify-between items-center'>
                <p className='font-semibold'>{crop.pricePerUnit} <span className='font-extrabold'>৳</span></p>
                <h3 className='font-semibold'>Unit : <span className='text-[#a4b7a6] font-medium'>{crop.unit}</span></h3>
            </div>
            <div className='flex justify-between items-center'>
                <h2 className='font-semibold'>Quantity : <span className='font-medium'>{crop.quantity} kg</span></h2>
                <h2 className='font-semibold'><span className='text-[#a4b7a6] font-medium'>{crop.type}</span></h2>
            </div>

            <div className='mt-3'>
                <Link to={`/details/${crop._id}`}><button className='btn bg-[#f1cf69] text-[#334b35] w-full font-semibold'>View Details</button></Link>
            </div>
        </div>
    );
};

export default CropsCard;
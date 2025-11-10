import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FaEdit, FaTrash } from 'react-icons/fa';

const MyPost = () => {
    const { user } = use(AuthContext)
    const [myCrops, setMyCrops] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/crop?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyCrops(data)
            })
        }
    }, [user])

    return (
        <div className="container mx-auto p-4 max-w-[1200px]">
            <h2 className="text-3xl font-bold mb-6 text-center">My Crop Posts</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price/Unit</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {myCrops.map((crop) => (
                            <tr key={crop._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{crop.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{crop.quantity} {crop.unit}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{crop.pricePerUnit} BDT</td>
                                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                                    <button className="text-blue-600 hover:text-blue-900">
                                        <FaEdit className="inline-block" /> Edit
                                    </button>
                                    <button className="text-red-600 hover:text-red-900 ml-2">
                                        <FaTrash className="inline-block" /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPost;
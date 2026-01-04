import React, { use, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


const MyPost = () => {
    const { user } = use(AuthContext)
    const [myCrops, setMyCrops] = useState([])
    const modalRef = useRef()
    const [defaultValue, setDefaultValue] = useState(null)
    

    useEffect(() => {
        if (user?.email) {
            fetch(`https://krishi-link-server-iota.vercel.app/crop?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyCrops(data.result)
                })
        }
    }, [user.email])

    const handleEdit = (id) => {
        modalRef.current.showModal()

        const findCrop = myCrops.find(crop => crop._id == id)
        // console.log(id)
        setDefaultValue(findCrop)
    }

    const handleUpdateCrop = (e, id) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            type: e.target.type.value,
            description: e.target.description.value,
            pricePerUnit: e.target.price.value,
            unit: e.target.unit.value,
            quantity: e.target.quantity.value,
            location: e.target.location.value,
            image: e.target.image.value,
        }

        fetch(`https://krishi-link-server-iota.vercel.app/crop/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // setDefaultValue(data)
                toast.success('Updated successfully!')
                //window.location.reload()
                setMyCrops((prev) =>
                    prev.map((crop) =>
                        crop._id === id ? { ...crop, ...formData } : crop
                    )
                );
                modalRef.current.close()
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleRemoveCrop = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://krishi-link-server-iota.vercel.app/crop/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainingCrops = myCrops.filter(crop => crop._id !== id)
                            setMyCrops(remainingCrops)
                        }
                    })

            }
        });
    }

    
    return (
        <div className="container mx-auto p-4 max-w-[1200px]">
            <title>krishiLink-My Post</title>
            <h2 className="text-3xl font-bold mb-6 text-center">My Crop Posts</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price/Unit</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {myCrops.map((crop) => (
                            <tr key={crop._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{crop.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{crop.quantity} {crop.unit}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{crop.pricePerUnit} BDT</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.email} </td>
                                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                                    <button onClick={() => handleEdit(crop._id)} className="text-blue-600 hover:text-blue-900">
                                        <FaEdit className="inline-block" /> Edit
                                    </button>
                                    {/* edit modal */}

                                    <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <div className="card-body p-10 relative">
                                                <h2 className="text-2xl font-bold text-[#334b35] text-center mb-6">Update Crop</h2>
                                                <form onSubmit={(e) => handleUpdateCrop(e, defaultValue?._id)} className="space-y-4">
                                                    {/* Name Field */}
                                                    <div className='flex flex-col'>
                                                        <label className="label font-medium">Name</label>
                                                        <input
                                                            type="text"
                                                            defaultValue={defaultValue?.name}
                                                            name="name"
                                                            required
                                                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200 mt-1.5"
                                                            placeholder="Enter name"
                                                        />
                                                    </div>

                                                    {/* Type Dropdown */}
                                                    <div className='flex flex-col'>
                                                        <label className="label font-medium">Type</label>
                                                        <select
                                                            defaultValue={defaultValue?.type}
                                                            name="type"
                                                            required
                                                            className="select w-full rounded-full focus:border-0 focus:outline-gray-200 mt-1.5"
                                                        >
                                                            <option value="" disabled>
                                                                Select type
                                                            </option>
                                                            <option value="Vegetable">Vegetable</option>
                                                            <option value="Grain">Grain</option>
                                                            <option value="Fruit">Fruit</option>
                                                        </select>
                                                    </div>

                                                    {/* Price & Units */}
                                                    <div className='flex justify-between items-center'>
                                                        <div className='flex flex-col'>
                                                            <label className="label font-medium">Price per unit</label>
                                                            <input
                                                                type="text"
                                                                name="price"
                                                                defaultValue={defaultValue?.pricePerUnit}
                                                                required
                                                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200 mt-1.5"
                                                                placeholder="Enter price"
                                                            />
                                                        </div>

                                                        <div className='flex flex-col'>
                                                            <label className="label font-medium">Unit</label>
                                                            <select
                                                                defaultValue={defaultValue?.unit}
                                                                name="unit"
                                                                required
                                                                className="select w-full rounded-full focus:border-0 focus:outline-gray-200 mt-1.5"
                                                            >
                                                                <option value="" disabled>
                                                                    Select unit
                                                                </option>
                                                                <option value="kg">kg</option>
                                                                <option value="ton">ton</option>
                                                                <option value="bag">bag</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    {/* Description Textarea */}
                                                    <div className='flex flex-col'>
                                                        <label className="label font-medium">Description</label>
                                                        <textarea
                                                            name="description"
                                                            defaultValue={defaultValue?.description}
                                                            required
                                                            rows="3"
                                                            className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[200px] mt-1.5"
                                                            placeholder="Enter description"
                                                        ></textarea>
                                                    </div>
                                                    {/* Quantity field */}
                                                    <div className='flex flex-col'>
                                                        <label className="label font-medium">Quantity</label>
                                                        <input
                                                            type="text"
                                                            defaultValue={defaultValue?.quantity}
                                                            name="quantity"
                                                            required
                                                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200 mt-1.5"
                                                            placeholder="Quantity"
                                                        />
                                                    </div>
                                                    {/* Location */}
                                                    <div className='flex flex-col'>
                                                        <label className="label font-medium">Location</label>
                                                        <input
                                                            type="text"
                                                            defaultValue={defaultValue?.location}
                                                            name="location"
                                                            required
                                                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200 mt-1.5"
                                                            placeholder="Location"
                                                        />
                                                    </div>

                                                    {/* Thumbnail URL */}
                                                    <div className='flex flex-col'>
                                                        <label className="label font-medium">Image URL</label>
                                                        <input
                                                            type="url"
                                                            defaultValue={defaultValue?.image}
                                                            name="image"
                                                            required
                                                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200 mt-1.5"
                                                            placeholder="https://example.com/image.jpg"
                                                        />
                                                    </div>

                                                    {/* Submit Button */}
                                                    <button
                                                        type="submit"
                                                        className="btn w-full mt-6 rounded-full bg-[#f1cf69] text-[#334b35]"
                                                    >
                                                        Update Crop
                                                    </button>
                                                </form>
                                            </div>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                    <button onClick={() => handleRemoveCrop(crop._id)} className="text-red-600 hover:text-red-900 ml-2">
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
import React, { use } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';
import Loading from './Loading';

const AddCrops = () => {
    const navigate = useNavigate()
    const { user } = use(AuthContext)


    const handleSubmit = (e) => {
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
            owner: {
                ownerEmail: user.email,
                ownerName: user.displayName
            }
        }
        //console.log(formData)

        fetch('http://localhost:3000/crop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Crop added successfully!')
                navigate('/my-post')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl mt-10">
            <div className="card-body p-6 relative">
                <h2 className="text-2xl font-bold text-[#334b35] text-center mb-6">Add New Crop</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="label font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200 mt-1.5"
                            placeholder="Enter name"
                        />
                    </div>

                    {/* Type Dropdown */}
                    <div>
                        <label className="label font-medium">Type</label>
                        <select
                            defaultValue={""}
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
                    <div className='flex justify-between items-center gap-3'>
                        <div>
                            <label className="label font-medium">Price per unit</label>
                            <input
                                type="text"
                                name="price"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200 mt-1.5"
                                placeholder="Enter price"
                            />
                        </div>

                        <div>
                            <label className="label font-medium">Unit</label>
                            <select
                                defaultValue={""}
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
                    <div>
                        <label className="label font-medium">Description</label>
                        <textarea
                            name="description"
                            required
                            rows="3"
                            className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[200px] mt-1.5"
                            placeholder="Enter description"
                        ></textarea>
                    </div>
                    {/* Quantity field */}
                    <div>
                        <label className="label font-medium">Quantity</label>
                        <input
                            type="text"
                            name="quantity"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200 mt-1.5"
                            placeholder="Quantity"
                        />
                    </div>
                    {/* Location */}
                    <div>
                        <label className="label font-medium">Location</label>
                        <input
                            type="text"
                            name="location"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200 mt-1.5"
                            placeholder="Location"
                        />
                    </div>

                    {/* Thumbnail URL */}
                    <div>
                        <label className="label font-medium">Image URL</label>
                        <input
                            type="url"
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
                        Add Model
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCrops;
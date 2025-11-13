import React, { use, useEffect, useRef, useState } from 'react';
import { Link, useParams,  } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import Loading from './Loading';

const CropDetails = () => {
    const { id: cropId } = useParams()
    //const { data } = useLoaderData()
    const [crop, setCrop] = useState({})
    const [interest, setInterest] = useState([])
    const modalRef = useRef()
    const { user, loading, setLoading } = use(AuthContext)
    console.log(interest, crop)
    


    useEffect(() => {
        fetch(`http://localhost:3000/crop/${cropId}`)
            .then((res) => res.json())
            .then(data => {
                setCrop(data.result)
                setLoading(false)
                
            })
            fetch(`http://localhost:3000/crop/interests/${cropId}`)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setInterest(data)
                setLoading(false)    
            })
    }, [cropId, setLoading])

    // useEffect(() => {
        
    // }, [cropId])


    const handleInterest = () => {
        modalRef.current.showModal()
    }

    const handleInterestSubmit = (e) => {
        e.preventDefault();
        const quantity = e.target.quantity.value
        const message = e.target.message.value

        if (quantity < 1) return toast.error("Quantity must be at least 1");

        const newInterests = {
            cropId: cropId,
            userEmail: user.email,
            userName: user.displayName,
            quantity: quantity,
            message: message,
            status: 'pending'
        }

        fetch('http://localhost:3000/interests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newInterests)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.insertedId) {
                    modalRef.current.close();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your interest has been placed.",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    newInterests.id = data.insertedId;
                    const updateInterests = [...interest, newInterests];
                    updateInterests.sort((a, b) => b.quantity - a.quantity);
                    setInterest(updateInterests);
                }
                else{
                      toast('Already added') 
                    }
            })
    }

    const isOwner = user?.email === crop?.owner?.ownerEmail;

    const existingInterest = interest?.find(
        (i) => i.userEmail === user?.email
    );
    const totalPrice = crop.quantity * crop.pricePerUnit;

    if(loading) return <Loading />

    return (
        <div>
            <div className='bg-[#FFFFFF] shadow-md p-3 rounded-md max-w-[1200px] mx-auto'>
                <div className='md:w-1/2'>
                    <div className=''>
                        <img src={crop?.image} alt="" className='h-[400px] w-full object-cover rounded-md' />
                    </div>
                </div>
                <div>
                    <h3 className='my-2 font-bold'>{crop?.name}</h3>
                    <div>
                        <p className='font-semibold'>Price : <span className='font-bold text-2xl'>৳</span> {crop?.pricePerUnit}</p>
                        <h3 className='font-semibold'>Unit : <span className='text-[#a4b7a6] font-medium'>{crop?.unit}</span></h3>
                    </div>
                    <div className='mt-2'>
                        <h2 className='font-semibold'>Quantity : <span className='font-medium'>{crop?.quantity} kg</span></h2>
                        <h2 className='font-semibold'>Type : <span className='text-[#a4b7a6] font-medium'><div className="badge badge-accent">{crop?.type}</div></span></h2>
                    </div>
                    <div className='mt-2'>
                        <p className='font-medium'>Description : {crop?.description}</p>
                        <h2 className='font-semibold'>Location : <span className='font-medium'>{crop?.location}</span></h2>
                    </div>
                </div>

            </div>
            <div>
                <div className='mt-5 mx-auto max-w-[1200px] mb-5'>
                    <button onClick={handleInterest} className='bg-[#f1cf69] px-8 py-2 rounded-md text-[#334b35] font-medium text-[16px]'>Interest</button>
                </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}

                <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        {/* Interest Form */}
                        {!isOwner && <div className="bg-green-50  p-4 rounded-md mt-6">
                            <h2 className="text-xl font-semibold mb-3">Send Interest</h2>
                            {existingInterest ? (
                                <p className="text-green-700 font-medium">
                                    You've already sent an interest for this crop.
                                </p>
                            ) : (
                                <form onSubmit={handleInterestSubmit} className="space-y-3">
                                    <div>
                                        <label className="font-medium">Quantity (kg)</label>
                                        <input
                                            type="number"
                                            name='quantity'
                                            className="border w-full p-2 rounded"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="font-medium">Message</label>
                                        <textarea
                                            name='message'
                                            className="border w-full p-2 rounded"
                                            required
                                        />
                                    </div>
                                    <p className="text-gray-700 font-medium">
                                        Total Price: <span className="text-green-700">{totalPrice}</span>
                                    </p>
                                    <button
                                        type="submit"
                                        className="bg-green-600 text-white px-5 py-2 rounded"
                                    >
                                        Send Interest
                                    </button>
                                </form>)}
                        </div>}
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            {/* Owner View: Received Interests */}
{isOwner && (
            <div className='max-w-[1200px] mx-auto mb-10'>
                <h2 className="text-xl font-semibold mb-4">Received Interests</h2>
{interest?.length === 0 ? (
            <p>No interests received yet.</p>
          ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-3 border">Buyer</th>
                                <th className="p-3 border">Quantity</th>
                                <th className="p-3 border">Message</th>
                                <th className="p-3 border">Status</th>
                                <th className="p-3 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {interest?.map((i) => (
                                <tr key={i._id}>
                                    <td className="p-3 border">{i.userName}</td>
                                    <td className="p-3 border">{i.quantity}</td>
                                    <td className="p-3 border">{i.message}</td>
                                    <td
                                        className={`p-3 border font-semibold ${i.status === "accepted"
                                            ? "text-green-600"
                                            : i.status === "rejected"
                                                ? "text-red-600"
                                                : "text-yellow-600"
                                            }`}
                                    >
                                        {i.status}
                                    </td>
                                    <td className="p-3 border">
                                        {i.status === "pending" && (
                                            <div className="flex gap-2">
                                                <button

                                                    className="bg-green-600 text-white px-3 py-1 rounded"
                                                >
                                                    Accept
                                                </button>
                                                <button

                                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                                >
                                                    Reject
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}</div>)}
        </div>
    );
};

export default CropDetails;
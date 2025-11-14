import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const { user, updateUser, setUser, setLoading } = useContext(AuthContext)
    const [name, setName] = useState(user?.displayName)
    const [photo, setPhoto] = useState(user?.photoURL)

    const handleSaveChanges = (e) => {
        e.preventDefault();
        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                setUser((prev) => ({
                    ...prev,
                    displayName: name,
                    photoURL: photo,
                }));
                setLoading(false)
            })
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-10 mt-10 gap-3.5 mb-10 max-w-[1200px] mx-auto p-3 md:p-0'>
                <div className='col-span-2 bg-[#170f21] rounded-lg p-5 flex flex-col justify-center items-center'>
                    <img className='rounded-full w-[100px] h-[100px]' src={`${user && user.photoURL}`} alt="" />
                    <h1 className='text-[#c2acff] font-bold my-2'>{user?.displayName}</h1>
                    <p className='text-[#aea1bd]'>{user?.email}</p>
                </div>
                <div className='col-span-8 bg-[#170f21] p-5 rounded-lg'>
                    <h1 className='text-gray-300 font-bold text-xl'>My Profile</h1>
                    <div className="divider"></div>
                    <form onSubmit={handleSaveChanges} >
                        <div className='flex gap-10'>
                            <div className='space-y-2'>
                                <label className="label text-gray-500 font-medium">Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="name" className="input" placeholder="Name" />
                            </div>
                            <div className='space-y-2'>
                                <label className="label text-gray-500">Photo</label>
                                <input value={photo} onChange={(e) => setPhoto(e.target.value)} type="photo" className="input" placeholder="Photo" />
                            </div>
                        </div>
                        <div className='flex justify-end mt-5'>
                            <button type='submit' className='btn bg-[#95b3e0] border-none text-indigo-50'>Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
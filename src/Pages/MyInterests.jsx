import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const MyInterests = () => {
    const { user } = use(AuthContext)
    const [interests, setInterests] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/interests?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    //console.log(data)
                    setInterests(data)
                })
        }
    }, [user])

    // const handleRemoveBid = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`http://localhost:3000/bids/${id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.deletedCount) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your file has been deleted.",
    //                             icon: "success"
    //                         });

    //                         const remainingBids = bids.filter(bid => bid._id !== id)
    //                         setBids(remainingBids)
    //                     }
    //                 })

    //         }
    //     });
    // }

    return (
        <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-green-700">
            My Crop Interests
          </h2>
          <p className="text-gray-500 text-sm">
            Track the status of your crop requests and interests
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-green-100 text-left text-green-900">
              <tr>
                <th className="py-3 px-6 font-semibold">Crop Name</th>
                <th className="py-3 px-6 font-semibold">Owner</th>
                <th className="py-3 px-6 font-semibold">Quantity</th>
                <th className="py-3 px-6 font-semibold">Message</th>
                <th className="py-3 px-6 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {interests.map((interest) => (
                <tr
                  key={interest.id}
                  className="border-t border-gray-100 hover:bg-gray-50 transition duration-150"
                >
                  <td className="py-4 px-6">{interest.cropName}</td>
                  <td className="py-4 px-6">{interest.userEmail}</td>
                  <td className="py-4 px-6">{interest.quantity}</td>
                  <td className="py-4 px-6 text-gray-600">
                    {interest.message}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {interest.status.charAt(0).toUpperCase() +
                        interest.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    );
};

export default MyInterests;


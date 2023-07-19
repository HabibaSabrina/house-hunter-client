import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../../utilities/fakeDb';

const CurrentBooking = () => {
    const [myHouses, setMyHouses] = useState([])
    const theUser = getStoredCart()
    const url = `https://house-hunter-server-habibasabrina.vercel.app/houses?renterEmail=${theUser.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyHouses(data))
    }, [url]);
    console.log(myHouses)
    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-orange-600'>My Current Bookings</h1>
            <div className="overflow-x-auto w-full mt-10">
                <table className=" my-5 w-full">
                    <thead className='bg-[#00C3D3] text-white'>
                        <tr >
                            <th className='py-5'>Image</th>
                            <th className='py-5'>House Name</th>
                            <th className='py-5'>Address</th>
                            <th className='py-5'>City</th>
                            <th className='py-5'>Rent</th>
                            <th className='py-5'>Availability</th>
                            <th className='py-5'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myHouses.map(userHouse => <tr key={userHouse._id} className='font-semibold text-center border-b-2 border-[#C5CBE3]  bg-[#f8fbff]'>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded w-24 h-24">
                                            {userHouse.img && <img src={userHouse.img} className='p-2 rounded-xl' alt={userHouse.hname} />}
                                        </div>
                                    </div>
                                </td>
                                <td className='border-x-2 border-[#C5CBE3]'>
                                    {userHouse.hname && userHouse.hname}
                                </td>
                                <td className='border-x-2 border-[#C5CBE3]'>{userHouse.address}</td>
                                <td className='border-x-2 border-[#C5CBE3]'>{userHouse.city}</td>
                                <td className='border-x-2 border-[#C5CBE3]'>{userHouse.rent}</td>
                                <td className='border-x-2 border-[#C5CBE3]'>{userHouse.date}</td>
                                
                                <td>

                                    <button className='p-3 px-6 mr-4 bg-orange-600 hover:bg-blue-800  font-semibold text-white rounded-full'>Delete</button>
                                    


                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default CurrentBooking;
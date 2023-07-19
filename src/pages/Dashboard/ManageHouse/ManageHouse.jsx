import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../../utilities/fakeDb';
import { Link } from 'react-router-dom';

const ManageHouse = () => {
    const [userHouses, setUserHouses] = useState([])
    const theUser = getStoredCart()
    const url = `https://house-hunter-server-habibasabrina.vercel.app/houses?userEmail=${theUser.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setUserHouses(data))
    }, [url]);
    console.log(userHouses)
    const handleHouseDelete = theHouse => {
      
       
        fetch(`https://house-hunter-server-habibasabrina.vercel.app/houses/${theHouse._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("The house is deleted successfully")
                    const remaining = userHouses.filter(toy => toy._id !== theHouse._id)
                    setUserHouses(remaining)
                }
            })
    }
    return (
        <div>
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
                            <th className='py-5'>Phone Number</th>
                            <th className='py-5'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            userHouses.map(userHouse => <tr key={userHouse._id} className='font-semibold text-center border-b-2 border-[#C5CBE3]  bg-[#f8fbff]'>
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
                            <td className='border-x-2 border-[#C5CBE3]'>{userHouse.phone}</td>
                            <td>
                               
                                <button onClick={() => {handleHouseDelete(userHouse)}} className='p-3 px-6 mr-4 bg-orange-600 hover:bg-blue-800  font-semibold text-white rounded-full'>Delete</button>
                                <Link to={`/dashboard/update/${userHouse._id}`}><button className='p-3 px-6 mr-4 bg-orange-600 hover:bg-blue-800  font-semibold text-white rounded-full'>Update</button></Link>


                            </td>
                        </tr>
                        )
                        }
                    </tbody>

                </table>
                <dialog id="my_modal_2" className="modal">
                    <button className="modal-close bg-pink-600 p-3 rounded-xl text-white text-xl font-bold z-30" onClick={() => window.my_modal_2.close()}>
                        Close
                    </button>

                    <form method="dialog" className="modal-box">
                        <p className='font-bold text-[#00C3D3]'>House Name</p>
                        <input className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="hname" required />
                        <br />
                        <p className='font-bold mt-5 text-[#00C3D3]'>Address</p>
                        <input className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="address" required />
                        <br />
                        <div className='flex gap-5 mt-5'>
                            <div >
                                <p className='font-bold text-[#00C3D3]'>City</p>
                                <input className='mt-5  focus:outline-0  w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="city" required />
                            </div>

                            <div>
                                <p className='font-bold text-[#00C3D3]'>Picture</p>
                                <input className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="img" required />
                            </div>
                        </div>

                        <div className='flex gap-5 mt-5'>
                            <div>
                                <p className='font-bold text-[#00C3D3]'>Bedrooms</p>
                                <input className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="number" name="bed" required />
                            </div>
                            <div>
                                <p className='font-bold text-[#00C3D3]'>Bathrooms</p>
                                <input className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="number" name="bath" required />
                            </div>

                            <div>
                                <p className='font-bold text-[#00C3D3]'>Room Size</p>
                                <input className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="size" required />
                            </div>
                            <br />
                        </div>
                        <div className='flex gap-5 mt-5'>
                            <div>
                                <p className='font-bold text-[#00C3D3]'>Availability Date</p>
                                <input className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="date" name="date" required />
                            </div>
                            <div>
                                <p className='font-bold text-[#00C3D3]'>Rent per month</p>
                                <input className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="rent" required />
                            </div>
                        </div>
                        <p className='font-bold mt-5 text-[#00C3D3]'>Phone Number</p>
                        <input className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="phone" required />
                        <br />
                        <p className='font-bold mt-5 text-[#00C3D3]'>Description</p>
                        <textarea className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="description" required />
                        <br />
                        <div className="modal-action">
                            <button className="bg-[#00C3D3] p-3 rounded-xl mx-5 text-white font-semibold px-5">Add</button>

                        </div>
                    </form>
                </dialog>
            </div>
        </div>
    );
};

export default ManageHouse;
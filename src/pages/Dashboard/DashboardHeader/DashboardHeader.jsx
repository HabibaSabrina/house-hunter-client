import React, { useState } from 'react';
import { getStoredCart } from '../../../utilities/fakeDb';
import { Link } from 'react-router-dom';
import CurrentBooking from '../CurrentBooking/CurrentBooking';
import ManageHouse from '../ManageHouse/ManageHouse';

const DashboardHeader = () => {
    const theUser = getStoredCart()
    console.log(theUser)
    const handleAddHouse = event => {
        event.preventDefault();
        // getting data from registration form
        const form = event.target;
        const hname = form.hname.value;
        const address = form.address.value;
        const city = form.city.value;
        const img = form.img.value;
        const bed = form.bed.value;
        const bath = form.bath.value;
        const size = form.size.value;
        const date = form.date.value;
        const rent = parseFloat(form.rent.value);
        const phone = form.phone.value;
        const description = form.description.value;
        const houseInfo = { hname, address, city, img, bed, bath, size, date, rent, phone, description, userEmail: theUser.email }
        console.log(houseInfo);
        fetch('https://house-hunter-server-habibasabrina.vercel.app/houses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(houseInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset();
                    alert("House")

                }
            })
    }


return (
    <div>
        <Link to='/'><button className='m-10 p-3 bg-[#00C3D3] rounded-xl font-semibold text-white px-5'>Back to Home</button></Link>
        {
            theUser.role == 'House Owner' ? <div>
                <ul className='flex justify-center gap-10 font-semibold text-orange-600 items-center'>
                    <li><button onClick={() => window.my_modal_1.showModal()} className='bg-[#00C3D3] p-3 rounded-xl text-white font-semibold px-5'>Add New House</button></li>
                </ul>
                <ManageHouse></ManageHouse>
                <dialog id="my_modal_1" className="modal">
                    <button className="modal-close bg-pink-600 p-3 rounded-xl text-white text-xl font-bold z-30" onClick={() => window.my_modal_1.close()}>
                        Close
                    </button>

                    <form onSubmit={handleAddHouse} method="dialog" className="modal-box">
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
            </div> : <CurrentBooking></CurrentBooking>
        }
    </div>
);
};

export default DashboardHeader;
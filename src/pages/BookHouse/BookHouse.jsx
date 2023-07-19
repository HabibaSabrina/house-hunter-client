import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../utilities/fakeDb';

const BookHouse = () => {
    const houseDetail = useLoaderData()
    const theUser = getStoredCart()
    console.log(houseDetail)
    const handleBook = event => {
        event.preventDefault();
        // getting data from registration form
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = { renterName: name, renterEmail: email, renterPhone: phone, status: 'booked' }
       
        fetch(`https://house-hunter-server-habibasabrina.vercel.app/houses/${houseDetail._id}`, {
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.modifiedCount>0){
                alert("Updated successfully")
                form.reset()
            }
            else{
                alert("already booked")
            }
        })
    }
    return (
        <div>
            <div className='bg-[#00C3D3] p-10 md:mx-96 rounded-xl'>
                <h1 className='text-center text-3xl font-bold text-white'>Book the house</h1>
                <form onSubmit={handleBook}>
                    <div className='text-center mt-10'>
                        <p className='font-bold mt-10 text-white'>Name</p>
                        <input className='  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' defaultValue={theUser.name} type="text" name="name" required />
                        <br />
                        <p className='font-bold mt-10 text-white'>Email</p>
                        <input className='  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="email" defaultValue={theUser.email} name="email" required />
                        <br />
                        <p className='font-bold mt-10 text-white'>Phone</p>
                        <input className='  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" name="phone" required />
                        <br />
                        <button className='bg-orange-600 w-64 rounded-xl p-3 text-xl text-white font-semibold hover:bg-green-900 mt-10'>Book</button>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default BookHouse;
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UpdateHouse = () => {
    const theHouseData = useLoaderData()
    const {_id, hname, address, city, img, bed, bath, size, date, rent, phone, description} = theHouseData
    const handleUpdate = event =>{
        event.preventDefault()
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
        const updatedHouse = { hname, address, city, img, bed, bath, size, date, rent, phone, description}
        fetch(`https://house-hunter-server-habibasabrina.vercel.app/houses/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedHouse)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                alert("house is updated")
                form.reset()
            }
        })
    }
    return (
        <div>
            <h1 className='text-center font-semibold text-xl my-10 text-orange-600'>Update The House</h1>
           <div className='text-center '>
           <Link to='/dashboard'><button className="modal-close bg-pink-600 px-5 p-3 rounded-full text-white text-xl font-bold">X</button></Link>
           </div>
            <form onSubmit={handleUpdate} className='mx-96 bg-orange-100 p-20 rounded-xl'>
                <p className='font-bold text-[#00C3D3]'  >House Name</p>
                <input defaultValue={hname} className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="hname" required />
                <br />
                <p className='font-bold mt-5 text-[#00C3D3]'>Address</p>
                <input defaultValue={address} className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="address" required />
                <br />
                <div className='flex gap-5 mt-5'>
                    <div >
                        <p className='font-bold text-[#00C3D3]'>City</p>
                        <input defaultValue={city} className='mt-5  focus:outline-0  w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="city" required />
                    </div>

                    <div>
                        <p className='font-bold text-[#00C3D3]'>Picture</p>
                        <input defaultValue={img} className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="img" required />
                    </div>
                </div>

                <div className='flex gap-5 mt-5'>
                    <div>
                        <p className='font-bold text-[#00C3D3]'>Bedrooms</p>
                        <input defaultValue={bed} className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="number" name="bed" required />
                    </div>
                    <div>
                        <p className='font-bold text-[#00C3D3]'>Bathrooms</p>
                        <input defaultValue={bath} className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="number" name="bath" required />
                    </div>

                    <div>
                        <p className='font-bold text-[#00C3D3]'>Room Size</p>
                        <input defaultValue={size} className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="size" required />
                    </div>
                    <br />
                </div>
                <div className='flex gap-5 mt-5'>
                    <div>
                        <p className='font-bold text-[#00C3D3]'>Availability Date</p>
                        <input defaultValue={date} className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="date" name="date" required />
                    </div>
                    <div>
                        <p className='font-bold text-[#00C3D3]'>Rent per month</p>
                        <input defaultValue={rent} className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="rent" required />
                    </div>
                </div>
                <p  className='font-bold mt-5 text-[#00C3D3]'>Phone Number</p>
                <input defaultValue={phone} className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="phone" required />
                <br />
                <p className='font-bold mt-5 text-[#00C3D3]'>Description</p>
                <textarea defaultValue={description} className='  focus:outline-0 mt-5 w-full p-2 border-2 border-red-800 rounded-xl' type="text" name="description" required />
                <br />
                <div className='mt-5'>
                    <button className="bg-[#00C3D3] p-3 rounded-xl mx-5 text-white font-semibold px-5">Update</button>

                </div>
            </form>
        </div>
    );
};

export default UpdateHouse;
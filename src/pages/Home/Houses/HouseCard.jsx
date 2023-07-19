import React from 'react';
import { FaBookmark, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { getStoredCart } from '../../../utilities/fakeDb';
import { Link } from 'react-router-dom';
const HouseCard = ({house}) => {
    const theUser = getStoredCart()
    const {_id, hname, address, city, img, bath, bed, date, phone, rent, size} = house
    return (
        <div className='border-2 rounded-xl bg-[#f8fbff] '>
            <img className='rounded-xl' src={img} alt="" />
            <div className='p-5'>
            <h1 className='text-[#00C3D3] text-center text-2xl font-bold mb-3'>{hname}</h1>
            <p className='text-center'>{address}, {city}</p>
            <div className='flex my-3 justify-between'>
                <p>Bed: {bed}</p>
                <p>Bath: {bath}</p>
                <p>Room Size: {size}sq.</p>
                </div>
                <p className='my-2'>Rent per month: {rent} BDT</p>
                <p>Availability date: {date}</p>
                <div className='flex items-center  justify-between my-3'>
                    <p className='flex items-center gap-2'><FaPhoneAlt className='bg-orange-600 text-4xl p-2 rounded-full text-white'></FaPhoneAlt> {phone}</p>
                    {
                    theUser?.role== 'House Renter' &&
                    <Link to={`/houses/${_id}`}><button className='p-3 font-semibold bg-orange-600 text-white rounded-full'><FaBookmark></FaBookmark> </button></Link>  
                    }
                </div>
                
           
            </div>
        </div>
    );
};

export default HouseCard;
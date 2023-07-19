import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const handleUser = event =>{
        event.preventDefault();
        // getting data from registration form
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const role = form.role.value;
        const email = form.email.value;
        const password = form.password.value;
        const saveUser = { name, email, password, role, phone }
        console.log(saveUser)
        fetch('https://house-hunter-server-habibasabrina.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                form.reset();
                                alert("Registered")

                            }
                        })
    }
    return (
        <div>
            <div className='bg-[#00C3D3] p-10 md:mx-96 rounded-xl'>
                <h1 className='text-center text-3xl font-bold text-white'>Register</h1>
                <form onSubmit={handleUser}>
                    <div className='text-center mt-10'>
                        <p className='font-bold text-white'>Full Name</p>
                        <input className='  focus:outline-0 mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" name="name" required />
                        <br />
                        <div className='text-center mt-10'>
                            <p className='font-bold text-white'>Role</p>
                            <select name='role' defaultValue={'Choose a role'} className="select md:w-80 w-64 border-2 border-red-800 rounded-xl focus:outline-0 mt-5">
                                <option disabled value='Choose a role'>Choose a role</option>
                                <option value='House Owner'>House Owner</option>
                                <option value='House Renter'>House Renter</option>
                            </select>
                        </div>
                        <p className='font-bold mt-10 text-white'>Phone Number</p>
                        <input className='  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" name="phone" required />
                        <br />
                        <p className='font-bold mt-10 text-white'>Email</p>
                        <input className='  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="email" name="email" required />
                        <br />
                        <p className='font-bold mt-10 text-white '>Password</p>
                        <input className='  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="password" name="password" required />
                        <br />
                        <button className='bg-orange-600 w-64 rounded-xl p-3 text-xl text-white font-semibold hover:bg-green-900 mt-10'>Register</button>
                        <p className='my-5 text-green-950 font-semibold'>Already have an account? <Link to="/login"><span className='text-red-800 font-semibold'>Login</span></Link></p>
                    </div>
                </form>
                {/* <p className='text-center text-red-500 font-semibold'>{error}</p> */}
                {/* <p className='text-center text-blue-800 font-semibold'>{success}</p> */}
            </div>
        </div>
    );
};

export default Registration;
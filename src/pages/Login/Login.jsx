import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`https://house-hunter-server-habibasabrina.vercel.app/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    const handleLogin = event => {
        event.preventDefault();
        // getting data from registration form
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const theUser = users.filter(user => user.email == email)
        if(theUser){
            if(theUser[0].password === password){
                localStorage.setItem('logged-user',JSON.stringify(theUser[0]))
                form.reset()
            }
        }
        
        // setUser(loggedUser)
        
    }
    return (
        <div>
            <div className='bg-[#00C3D3] p-10 md:mx-96 rounded-xl'>
                <h1 className='text-center text-3xl font-bold text-white'>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className='text-center mt-10'>
                        <p className='font-bold mt-10 text-white'>Email</p>
                        <input className='  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="email" name="email" required />
                        <br />
                        <p className='font-bold mt-10 text-white '>Password</p>
                        <input className='  focus:outline-0  mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="password" name="password" required />
                        <br />
                        <button className='bg-orange-600 w-64 rounded-xl p-3 text-xl text-white font-semibold hover:bg-green-900 mt-10'>Login</button>
                        <p className='my-5 text-green-950 font-semibold'>Don't have an account? <Link to="/register"><span className='text-red-800 font-semibold'>Register</span></Link></p>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Login;
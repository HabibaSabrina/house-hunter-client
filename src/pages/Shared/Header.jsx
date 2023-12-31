import React from 'react';
import { Link } from 'react-router-dom';
import { getStoredCart } from '../../utilities/fakeDb';

const Header = () => {
    const theUser = getStoredCart()
    const handleLogOut = () =>{
        localStorage.removeItem('logged-user')
    }
    return (
        <div className='mt-5 mx-14'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                theUser.email && <Link className='font-semibold text-[#00C3D3]' to='/dashboard'><li>Dashboard</li></Link>
                            }
                        </ul>
                    </div>
                    <Link to='/'><a className="btn btn-ghost font-semibold text-[#00C3D3] normal-case text-xl"><span className='text-orange-600 text-2xl'>House</span> Hunter</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            theUser.email && <Link to='/dashboard'><li className='font-semibold text-[#00C3D3]'>Dashboard</li></Link>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        theUser.email ? <button onClick={handleLogOut} className='bg-[#00C3D3] p-3 rounded-xl mx-5 text-white font-semibold px-5'>Log Out</button> : <div>
                            <Link to='/login'><button className='bg-[#00C3D3] p-3 rounded-xl mx-5 text-white font-semibold px-5'>Log in</button></Link>
                        <Link to='/register'><button className='bg-[#00C3D3] p-3 rounded-xl text-white font-semibold px-5'>Register</button></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
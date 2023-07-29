import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthPorvider';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)

    const [nameVisible, setNameVisible] = useState(false);
    const handleLogout = () => {
        logOutUser()
            .then(result => {
                // console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    return (
        <nav className="navbar bg-slate-700 text-white fixed z-10">
            <div className="flex-1">
               <Link to='/chatroom'> <button className="btn btn-ghost normal-case text-xl">Realtime chat</button>
                </Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>

                </div>
                <div className="dropdown dropdown-end">

                    {
                        user ? <div className='flex items-center gap-5 relative'>
                            <div className=''>
                                {
                                    user?.photoURL && <img className='w-12 h-12 rounded-full' src={user.photoURL} onMouseEnter={() => setNameVisible(true)} onMouseLeave={() => setNameVisible(false)} alt="" />
                                }
                                <p className='absolute t-0 text-lg font-semibold'>{nameVisible && <span className="user-name">{user?.displayName}</span>}</p>
                            </div>
                            <button onClick={handleLogout} className='btn btn-active'>Sign Out</button>
                        </div>
                            :
                            <Link to='/login'><button className='btn btn-active'>login</button></Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
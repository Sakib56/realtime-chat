import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../assets/google.png';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthPorvider';


const Resister = () => {
    const navigate = useNavigate()
    const { createUser, updatedUserInfo } = useContext(AuthContext)

    const handleResister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,email,password);
        
//       
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updatedUserInfo(loggedUser, name)
                    .then(() => { })
                    .catch(error => console.log(error))
                navigate('/chatroom')
                Swal.fire({
                    title: 'Successfully Account Created',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })

            })
            .catch(error => {
                console.log(error.message)
            })

    }


    return (
        <section className=''>

            <div>
                <div className='py-16 px-5 md:py-20 md:px-10'>
                    <div className='border rounded-xl shadow-lg bg-slate-700 bg-opacity-50 w-full md:w-3/4 p-5 md:p-10 max-w-2xl mx-auto'>
                        <h1 className='text-3xl mt-2 font-bold text-center'>Please Register</h1>
                        <form onSubmit={handleResister} className='md:p-5'>
                            <div className='form-control'>
                                <label>
                                    <p className='text-lg font-semibold mb-1 mt-3'>Enter your name <span className='text-red-600'>*</span></p>
                                </label>
                                <input className="input input-bordered rounded-s-full p-3 rounded-e-full w-full" type="text" placeholder='Your name' name="name" />

                            </div>

                            <div className='form-control'>
                                <label>
                                    <p className='text-lg font-semibold mb-1 mt-3'>Email Address <span className='text-red-600'>*</span></p>
                                </label>
                                <input className="input input-bordered rounded-s-full p-3 rounded-e-full w-full" type="email" placeholder='mail@example.com' name="email" />

                            </div>
                            <div className='form-control relative'>
                                <label>
                                    <p className='text-lg font-semibold mb-1 mt-3'>Password <span className='text-red-600'>*</span></p>
                                </label>
                                <input className="input rounded-s-full rounded-e-full p-3 input-bordered w-full" type="" placeholder='******' name="password" />
                            </div>                           

                            <input type="submit" className='w-full bg-slate-700 rounded-lg mt-5 py-2 text-xl text-white rounded-s-full rounded-e-full font-bold cursor-pointer' value="Resister Now" />
                            <h1 className='text-center text-md mt-5'>Already have an account? Please<Link to='/login'><span className='link text-orange-700 font-bold'> Login</span></Link></h1>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resister;
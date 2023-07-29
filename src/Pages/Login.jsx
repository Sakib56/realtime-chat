import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../assets/google.png';
import Swal from 'sweetalert2';


const Login = () => {
    const navigate = useNavigate()
    const handleResister = event => {
        event.preventDefault()
        const form = event.target;
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value;
        const name = firstName + lastName


        if (password != confirmPassword) {
            Swal.fire({
                title: 'password and confirm password not match!',
                text: '',
                icon: 'warning',
                confirmButtonText: 'ok'
            })
            return;
        }
        console.log(firstName, lastName, email, password, confirmPassword, name)
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(loggedUser, name)
                    .then(() => { })
                    .catch(error => console.log(error))

                navigate('/', { replace: true })
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
                <div className='py-10 px-5 md:py-20 md:px-10'>
                    <div className='border rounded-xl shadow-lg bg-emerald-700 bg-opacity-50 w-full md:w-3/4 p-5 md:p-10 max-w-2xl mx-auto'>
                        <h1 className='text-3xl mt-2 font-bold text-center'>Please Login</h1>
                        <form onSubmit={handleResister} className='md:p-5'>


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


                            <input type="submit" className='w-full bg-[#23B574] rounded-lg mt-5 py-2 text-xl text-white rounded-s-full rounded-e-full font-bold cursor-pointer' value="Login " />
                            <h1 className='text-center text-md mt-5'>New User? Please<Link to='/resister'><span className='link text-blue-500'> Resister</span></Link></h1>
                        </form>
                        <div className='font-bold md:p-5 text-white'>
                            <button className='bg-[#23B574] flex items-center justify-center gap-4 btn rounded-s-full rounded-e-full btn-outline w-full'>Login With Google <img className='w-12 h-12 p-2' src={google} alt="" /></button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
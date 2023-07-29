import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../assets/google.png';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthPorvider';


const Login = () => {
    const { logInUser, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        logInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate('/chatroom');

            })
            .catch(error => {
                console.log(error.message)
            })

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser)
                navigate('/chatroom')
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <section className=''>

            <div>
                <div className='py-16 px-5 md:py-20 md:px-10'>
                    <div className='border rounded-xl shadow-lg bg-slate-700 bg-opacity-50 w-full md:w-3/4 p-5 md:p-10 max-w-2xl mx-auto'>
                        <h1 className='text-3xl mt-2 font-bold text-center'>Please Login</h1>
                        <form onSubmit={handleSignIn} className='md:p-5'>


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


                            <input type="submit" className='w-full bg-slate-700 rounded-lg mt-5 py-2 text-xl text-white rounded-s-full rounded-e-full font-bold cursor-pointer' value="Login " />
                            <h1 className='text-center text-md mt-5'>New User? Please<Link to='/resister'><span className='link text-orange-800 font-bold'> Resister</span></Link></h1>
                        </form>
                        <div onClick={handleGoogleLogin} className='font-bold md:p-5 text-white'>
                            <button className='bg-slate-700 text-white border-0 flex items-center justify-center gap-4 btn rounded-s-full rounded-e-full btn-outline w-full'>Login With Google <img className='w-12 h-12 p-2' src={google} alt="" /></button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
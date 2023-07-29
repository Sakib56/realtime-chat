import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-3xl font-bold">Welcome to Our Real-Time Chat Site!</h1>
                    <p className="py-6 text-lg">Start Chatting Now!
                        Sign up or log in to start chatting in real-time. Don't miss out on the excitement; engage in lively discussions, share your thoughts, and stay connected with the world. Happy chatting! 🚀💬</p>
                    <Link to='/login'><button className="btn btn-accent text-white bg-slate-700">Please Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
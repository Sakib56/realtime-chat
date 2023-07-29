import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h1>Main page</h1>       
            <Outlet></Outlet>    
        </div>
        
    );
};

export default Main;
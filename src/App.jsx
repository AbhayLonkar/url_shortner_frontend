import React from 'react';
import Navbar from './components/Navbar';
import {Outlet} from '@tanstack/react-router';

const App = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-start">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default App;

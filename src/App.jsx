import React from 'react';
import Navbar from './components/Navbar';
import {Outlet} from '@tanstack/react-router';

const App = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-saffron-800">
            <Navbar/>
            <div className="flex-1 flex items-center justify-center w-full">
                <Outlet/>
            </div>
        </div>
    );
};

export default App;

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { Outlet } from '@tanstack/react-router';
import Footer from "./components/Footer.jsx";
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './api/user.api.js';
import { login, logout } from '../store/slice/authSlice.js';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getCurrentUser()
            .then(user => {
                if (user) dispatch(login(user))
            })
            .catch(() => {
                dispatch(logout());
                console.log('User is not authenticated from app.js');
            })
    }, [dispatch]);
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-start">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;

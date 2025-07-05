import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "@tanstack/react-router"

import {loginUser} from '../api/user.api';
import {login} from '../../store/slice/authSlice.js';
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

const LoginForm = ({setLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const data = await loginUser(email, password);
            dispatch(login(data.user))
            await navigate({to: '/dashboard'});
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-yellow-100 border-4 border-black rounded-2xl shadow-[8px_8px_0_0_#000] p-8 w-full max-w-md">
            <h2 className="text-2xl font-extrabold text-black text-center mb-6 drop-shadow-[2px_2px_0_#fff]">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 rounded-xl border-4 border-black bg-white text-black font-mono text-lg shadow-[4px_4px_0_0_#000] focus:outline-none focus:ring-0"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="px-4 py-3 rounded-xl border-4 border-black bg-white text-black font-mono text-lg shadow-[4px_4px_0_0_#000] focus:outline-none focus:ring-0 w-full pr-12"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        tabIndex={-1}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-black hover:text-pink-500"
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? (
                            // Eye open SVG
                            <FaRegEye size={22}/>
                        ) : (
                            // Eye closed SVG
                            <FaRegEyeSlash size={22}/>
                        )}
                    </button>
                </div>
                <button
                    type="submit"
                    className="bg-pink-400 border-4 border-black text-black font-bold py-3 rounded-xl shadow-[4px_4px_0_0_#000] hover:bg-pink-300 active:translate-x-1 active:translate-y-1 transition flex items-center justify-center"
                    disabled={loading}
                >
                    {loading ? (
                        <div
                            className="self-center border-dashed border-l-gray-600 border-t-gray-600 animate-spin border-3 size-7 rounded-full"></div>
                    ) : (
                        'Login'
                    )}
                </button>
            </form>
            <div className="text-center mt-4">
                <span className="text-black font-mono">Don't have an account?</span>
                <button
                    type="button"
                    className="ml-2 underline text-pink-600 font-bold hover:text-pink-800 transition"
                    onClick={() => setLogin(prev => !prev)}
                >
                    Create an account
                </button>
            </div>
        </div>
    );
};

export default LoginForm;

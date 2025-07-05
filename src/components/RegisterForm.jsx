import {useNavigate} from '@tanstack/react-router';
import React, {useState} from 'react';
import {registerUser} from '../api/user.api';
import {useDispatch} from 'react-redux';
import {login} from '../../store/slice/authSlice';
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

const RegisterForm = ({setLogin}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const data = await registerUser(username, email, password);
            console.log(data);
            dispatch(login(data.user));
            navigate({to: '/dashboard'});
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    return (
        <div className="bg-yellow-200 border-4 border-black rounded-2xl shadow-[8px_8px_0_0_#000] p-8 w-full max-w-md">
            <h2 className="text-2xl font-extrabold text-black text-center mb-6 drop-shadow-[2px_2px_0_#fff]">Register</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Username"
                    className="px-4 py-3 rounded-xl border-4 border-black bg-white text-black font-mono text-lg shadow-[4px_4px_0_0_#000] focus:outline-none focus:ring-0"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
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
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:text-pink-500"
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? (
                            <FaRegEye size={22}/>
                        ) : (
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
                        'Register'
                    )}
                </button>
            </form>
            <div className="text-center mt-4">
                <span className="text-black font-mono">Already have an account?</span>
                <button
                    type="button"
                    className="ml-2 underline text-pink-600 font-bold hover:text-pink-800 transition"
                    onClick={() => setLogin(prev => !prev)}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default RegisterForm;

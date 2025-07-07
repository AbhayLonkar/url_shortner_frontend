import {useNavigate} from '@tanstack/react-router';
import React, {useState} from 'react';
import {registerUser} from '../api/user.api';
import {useDispatch} from 'react-redux';
import {login} from '../../store/slice/authSlice';
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import Loading from "./Loading.jsx";

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
            await navigate({to: '/dashboard'});
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    return (
        <div className="bg-saffron border-2 border-black rounded-2xl  shadow-[4px_4px_0_0_#000] p-8 md:w-md max-w-md ">
            <h2 className="text-2xl font-extrabold text-eerie-black text-center mb-6 ">Create an account</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className={'flex flex-col gap-2'}>
                    <label htmlFor={'name'}>Name:</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        id={'name'}
                        className="px-4 py-3 rounded-xl border-2 border-black bg-white text-sm text-eerie-black  shadow-[3px_3px_0_0_#000] focus:outline-none focus:ring-0"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor={'email'}>Email:</label>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        id={'email'}
                        className="px-4 py-3 rounded-xl border-2 border-black bg-white text-sm text-eerie-black  shadow-[3px_3px_0_0_#000] focus:outline-none focus:ring-0"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor={'pass'}>Password:</label>
                    <div className="relative">
                        <input
                            id={'pass'}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="px-4 py-3 rounded-xl border-2 border-black bg-white text-sm text-eerie-black shadow-[3px_3px_0_0_#000] focus:outline-none focus:ring-0 w-full pr-12"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            tabIndex={-1}
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-eerie-black hover:text-pink-500"
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
                </div>

                <button
                    type="submit"
                    className="bg-pink-400 cursor-pointer border-2 border-black text-eerie-black font-bold py-3 rounded-xl text-sm shadow-[3px_3px_0_0_#000] hover:bg-pink-300 active:translate-1 active:shadow transition flex items-center justify-center"
                    disabled={loading}
                >
                    {loading ? <Loading /> : 'SIGNUP'}
                </button>
            </form>
            <div className="text-center mt-4">
                <span className="text-eerie-black ">Already have an account ?</span>
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

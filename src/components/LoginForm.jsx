import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "@tanstack/react-router"
import { login } from '../../store/slice/authSlice.js';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ErrorBox from './ErrorBox.jsx';
import Loading from './Loading.jsx';
import { loginUser } from '../api/user.api.js';

const LoginForm = ({ setLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError('');
            const data = await loginUser(email, password);
            console.log(data, 'from login form');
            dispatch(login(data.user))
            setEmail('');
            setPassword('');
            navigate({ to: "/dashboard" });
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:3000/api/auth/google';
    }

    return (
        <div className="bg-saffron border-2 border-black rounded-2xl shadow-[4px_4px_0_0_#000] p-8 md:w-full  max-w-md">
            <h2 className="text-2xl font-extrabold text-eerie-black text-center mb-6 ">Login</h2>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
                <div className={'flex flex-col gap-2'}>
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
                                <FaRegEye size={22} />
                            ) : (
                                // Eye closed SVG
                                <FaRegEyeSlash size={22} />
                            )}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-pink-400 cursor-pointer border-2 border-black text-eerie-black font-bold py-3 rounded-xl text-sm shadow-[3px_3px_0_0_#000] hover:bg-pink-300 active:translate-1 active:shadow transition flex items-center justify-center"
                    disabled={loading}
                >
                    {loading ? <Loading /> : 'LOGIN'}
                </button>

                {error && <ErrorBox error={error} />}
            </form>
            <button
                type="button"
                onClick={handleGoogleLogin}
                className="mt-2  bg-white cursor-pointer border-2 w-full text-eerie-black font-bold py-3 rounded-xl text-sm shadow-[3px_3px_0_0_#000] hover:bg-pink-100 active:translate-1 active:shadow transition flex gap-2 items-center justify-center"
            >
                <img width={20} src="/images/google.png" alt="google logo" />
                LOGIN WITH GOOGLE
            </button>
            <div className="text-center mt-4">
                <span className="text-eerie-black ">Don't have an account?</span>
                <button
                    type="button"
                    className="cursor-pointer ml-2 underline text-pink-600 font-bold hover:text-pink-800 transition"
                    onClick={() => setLogin(prev => !prev)}
                >
                    Create an account
                </button>
            </div>
        </div>
    );
};

export default LoginForm;

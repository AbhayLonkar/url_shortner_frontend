import {useNavigate} from '@tanstack/react-router';
import React, {useState} from 'react';
import {isUserExist, registerUser, sendOTP} from '../api/user.api';
import {useDispatch} from 'react-redux';
import {login} from '../../store/slice/authSlice';
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import Loading from "./Loading.jsx";
import OTPVerification from './OTPVerification.jsx';
import {validatePassword} from "../utils/validation.js";
import ErrorBox from "./ErrorBox.jsx";

const RegisterForm = ({setLogin}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [otpLoading, setOtpLoading] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setOtpLoading(true);
        try {
            await isUserExist(email);
            validatePassword(password);
            await sendOTP(email);
            setShowOTP(true);
        } catch (err) {
            setError(err.response?.data?.message || err?.message || 'Failed to send OTP');
        } finally {
            setOtpLoading(false);
        }
    };

    const handleVerificationSuccess = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await registerUser(username, email, password);
            dispatch(login(data.user));
            await navigate({to: '/dashboard'});
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again');
        } finally {
            setLoading(false);
            setShowOTP(false);
        }
    };

    return (
        <div className="bg-saffron border-2 border-black rounded-lg  shadow-[3px_3px_0_#000] p-8 md:w-md max-w-md ">
            <h2 className="text-2xl font-extrabold text-eerie-black text-center">Create an account</h2>
            {showOTP ? (
                <OTPVerification
                    email={email}
                    onVerificationSuccess={handleVerificationSuccess}
                />
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className={'flex flex-col gap-2'}>
                        <label htmlFor={'name'}>Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            id={'name'}
                            className="px-4 py-3 rounded-lg border-2 border-black bg-white text-sm text-eerie-black  shadow-[2px_2px_0_0_#000] focus:outline-none focus:ring-0"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor={'email'}>Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            id={'email'}
                            className="px-4 py-3 rounded-lg border-2 border-black bg-white text-sm text-eerie-black  shadow-[2px_2px_0_0_#000] focus:outline-none focus:ring-0"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor={'pass'}>Password:</label>
                        <div className="relative">
                            <input
                                id={'pass'}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password (min: 6 characters)"
                                className="px-4 py-3 rounded-lg border-2 border-black bg-white text-sm text-eerie-black shadow-[2px_2px_0_0_#000] focus:outline-none focus:ring-0 w-full pr-12"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                tabIndex={-1}
                                className="absolute cursor-pointer right-5 top-1/2 -translate-y-1/2 text-eerie-black hover:text-pink-500"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? (
                                    <FaRegEye size={22}/>
                                ) : (
                                    <FaRegEyeSlash size={22}/>
                                )}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-pink-400 cursor-pointer border-2 border-black text-eerie-black font-bold py-3 rounded-lg text-sm shadow-[2px_2px_0_0_#000] hover:bg-pink-300 active:translate-1 active:shadow transition flex items-center justify-center"
                        disabled={loading || otpLoading}
                    >
                        {(loading || otpLoading) ? <Loading/> : 'SIGNUP'}
                    </button>
                    {error && <ErrorBox error={error}/>}
                </form>
            )}
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

import React, {useState} from 'react';
import {sendOTP, verifyOTP} from "../api/user.api.js";
import Loading from "./Loading.jsx";

const OTPVerification = ({email, onVerificationSuccess}) => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const [error, setError] = useState('');

    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await verifyOTP(email, otp);
            onVerificationSuccess();
        } catch (err) {
            setError(err.response?.data?.message || 'Verification failed');
        } finally {
            setLoading(false);
        }
    };

    const resendOTP = async () => {
        setResendLoading(true);
        setError('');
        try {
            await sendOTP(email);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to resend OTP');
        } finally {
            setResendLoading(false);
        }
    }

    return (
        <div className="w-full max-w-md ">
            <h2 className="text-2xl font-bold mb-6 text-center">Enter Verification Code</h2>
            <p className="text-gray-600 mb-4 text-center">
                We've sent a verification code to {email}
            </p>
            <form onSubmit={handleVerify} className="space-y-4">
                <div>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        className="w-full p-3 border-2  rounded-lg shadow-[3px_3px_0_#000] outline-0"
                        maxLength={6}
                        required
                    />
                </div>
                {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                )}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white  p-3 rounded-lg border-2
                    shadow-[3px_3px_0_#000] disabled:opacity-50 active:shadow active:translate-1 transition-all duration-200"
                >
                    {loading ? <Loading/> : 'Verify OTP'}
                </button>
                <button
                    type="button"
                    onClick={resendOTP}
                    className="w-full bg-pink-600  p-3 rounded-lg border-2
                    shadow-[3px_3px_0_#000] active:shadow active:translate-1 transition-all duration-200"
                >
                    {resendLoading ? <Loading/> : 'Resend OTP'}
                </button>
            </form>
        </div>
    );
};

export default OTPVerification;

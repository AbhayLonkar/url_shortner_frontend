import React, { useState } from 'react';
import axios from '../utils/axiosInstance';

const OTPVerification = ({ email, onVerificationSuccess, onResendOTP }) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post('/api/otp/verify', { email, otp });
      onVerificationSuccess();
    } catch (err) {
      setError(err.response?.data?.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
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
            className="w-full p-3 border-4 border-black rounded-xl shadow-[5px_5px_0px_0px_rgba(0,0,0)] 
                        hover:shadow-[8px_8px_0px_0px_rgba(0,0,0)] transition-all duration-200"
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
          className="w-full bg-primary text-white p-3 rounded-xl border-4 border-black 
                    shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0)] 
                    transition-all duration-200 disabled:opacity-50"
        >
          {loading ? 'Verifying...' : 'Verify OTP'}
        </button>
        <button
          type="button"
          onClick={onResendOTP}
          className="w-full bg-white text-primary p-3 rounded-xl border-4 border-black 
                    shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0)] 
                    transition-all duration-200"
        >
          Resend OTP
        </button>
      </form>
    </div>
  );
};

export default OTPVerification;

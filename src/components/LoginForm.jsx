import React, { useState } from 'react';
import { loginUser } from '../api/user.api';
import { useSelector } from 'react-redux';

const LoginForm = ({ setLogin }) => {
  const [email, setEmail] = useState('abhaylonkar9@gmail.com');
  const [password, setPassword] = useState('Abhay@123');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const auth = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await loginUser(email, password);
    console.log(data);
    setLoading(false);
    // setEmail('');
    // setPassword('');
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
            className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:text-pink-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              // Eye open SVG
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              // Eye closed SVG
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.477 10.477A3 3 0 0112 9c1.657 0 3 1.343 3 3 0 .523-.134 1.016-.366 1.44m-1.657 1.657A3 3 0 019 12c0-.523.134-1.016.366-1.44" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c1.61 0 3.122.385 4.418 1.06M21.542 12c-.32 1.02-.81 1.98-1.44 2.84M15.54 17.94A9.956 9.956 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.042-3.34" />
              </svg>
            )}
          </button>
        </div>
        <button
          type="submit"
          className="bg-pink-400 border-4 border-black text-black font-bold py-3 rounded-xl shadow-[4px_4px_0_0_#000] hover:bg-pink-300 active:translate-x-1 active:translate-y-1 transition flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <div className="self-center border-dashed border-l-gray-600 border-t-gray-600 animate-spin border-3 size-7 rounded-full"></div>
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

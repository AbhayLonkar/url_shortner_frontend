import React, { useState } from 'react';

const UrlForm = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle URL shortening logic here
  };

  return (
    <div className="bg-sky-300 border-4 border-black rounded-2xl shadow-[8px_8px_0_0_#000] p-8 w-full max-w-md">
      <h1 className="text-3xl font-extrabold text-black text-center mb-6 drop-shadow-[2px_2px_0_#fff]">
        URL Shortener
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="url"
          className="px-4 py-3 rounded-xl border-4 border-black bg-white text-black font-mono text-lg shadow-[4px_4px_0_0_#000] focus:outline-none focus:ring-0"
          placeholder="Paste your long URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-400 border-4 border-black text-black font-bold py-3 rounded-xl shadow-[4px_4px_0_0_#000] hover:bg-pink-300 hover:translate-x-1 hover:translate-y-1 transition-all hover:cursor-pointer hover:shadow"
        >
          Shorten URL
        </button>
      </form>
    </div>
  );
};

export default UrlForm;

import axios from 'axios';
import React, { useState } from 'react';

const UrlForm = () => {
  const [url, setUrl] = useState('https://www.google.com');
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async () => {
    const { data } = await axios.post('http://localhost:3000/api/create', { url });
    setShortUrl(data);
  };

  return (
    <div className="bg-sky-300 border-4 border-black rounded-2xl shadow-[8px_8px_0_0_#000] p-8 w-full max-w-md">
      <h1 className="text-3xl font-extrabold text-black text-center mb-6">
        URL Shortener
      </h1>
      <div className="flex flex-col gap-4">
        <input
          type="url"
          className="px-4 py-2 rounded-xl border-4 border-black bg-white text-black font-mono  shadow-[4px_4px_0_0_#000] focus:outline-none focus:ring-0"
          placeholder="Paste your long URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-blue-400 border-4 border-black text-black font-bold py-2 rounded-xl shadow-[4px_4px_0_0_#000] hover:bg-pink-300 active:translate-x-1 active:translate-y-1 transition-all hover:cursor-pointer active:shadow"
        >
          Shorten URL
        </button>
        {shortUrl && <p>{shortUrl}</p>}
      </div>
    </div>
  );
};

export default UrlForm;

import React, { useState } from 'react';
import { createShortUrl } from '../api/shortUrl.api';

const UrlForm = () => {
  const [url, setUrl] = useState('https://www.google.com');
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      var data = await createShortUrl(url);
      setShortUrl(data);
      setCopied(false);
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || "Something went wrong. Please try again.");
      setShortUrl("");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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
          onChange={(e) => {
            setUrl(e.target.value);
            setError("");
          }}
          required
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-blue-400 border-4 border-black text-black font-bold py-2 rounded-xl shadow-[4px_4px_0_0_#000] hover:bg-pink-300 active:translate-x-1 active:translate-y-1 transition-all hover:cursor-pointer active:shadow flex items-center justify-center"
        >
          {/* Shorten URL */}
          {loading ? <div className='self-center border-dashed border-l-gray-600 border-t-gray-600 animate-spin border-3 size-7 rounded-full'></div> : "Shorten URL"}
        </button>
        {error && (
          <div className="text-red-600 bg-white border-2 border-red-400 rounded-lg px-4 py-2 text-center font-semibold shadow-sm animate-fade-in">
            {error}
          </div>
        )}
        {shortUrl && (
          <div className="flex flex-col items-center gap-2 mt-4 animate-fade-in">
            <div className="flex items-center gap-2 w-full">
              <input
                type="text"
                value={shortUrl}
                readOnly
                className="flex-1 px-3 py-2 rounded-xl border-4 border-black bg-white text-black font-mono shadow-[2px_2px_0_0_#000] focus:outline-none focus:ring-0 text-ellipsis"
              />
              <button
                onClick={handleCopy}
                type="button"
                className={`w-22 border-4 border-black font-bold py-2 px-4 rounded-xl shadow-[2px_2px_0_0_#000] transition-all duration-300 ${copied ? 'bg-green-400 text-white' : 'bg-pink-400 text-black hover:bg-pink-300'} hover:cursor-pointer active:shadow active:translate-x-1 active:translate-y-1`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlForm;

import React, {useState} from 'react';
import {createShortUrl} from '../api/shortUrl.api';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import Loading from './Loading';
import ErrorBox from "./ErrorBox.jsx";

const CustomUrlForm = () => {
    const [url, setUrl] = useState('');
    const [slug, setSlug] = useState('');
    const [loading, setLoading] = useState(false);
    const [shortUrl, setShortUrl] = useState('');
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState('');

    const queryClient = useQueryClient();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            queryClient.invalidateQueries(['userUrls']);
            const data = await createShortUrl(url, slug);
            setShortUrl(data);
            setCopied(false);
        } catch (err) {
            setError(err?.response?.data?.message || 'Something went wrong.');
            setShortUrl('');
        } finally {
            setLoading(false);
        }
    };

    const addMutation = useMutation({
        mutationFn: handleSubmit,
        onSuccess: () => {
            queryClient.invalidateQueries(['userUrls']);
        },
    });

    const handleCopy = () => {
        if (shortUrl) {
            navigator.clipboard.writeText(shortUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div
            className="bg-yellow-100 border-2  rounded-lg shadow-[3px_3px_0_0_#000] p-8 w-full md:h-full flex flex-col gap-2 justify-center">
            <h1 className="text-3xl font-extrabold text-eerie-black text-center mb-6">Custom URL Shortener</h1>
            <form onSubmit={(e) => addMutation.mutate(e)} className="flex flex-col gap-4">
                <input
                    type="url"
                    className="px-4 py-3 rounded-lg  text-sm border-2 bg-white text-eerie-black  shadow-[2px_2px_0_0_#000] focus:outline-none focus:ring-0"
                    placeholder="Paste your long URL here..."
                    value={url}
                    onChange={e => {
                        setShortUrl("");
                        setUrl(e.target.value);
                        setError('');
                    }}
                    required
                />
                <input
                    type="text"
                    className="px-4 py-3 rounded-lg text-sm border-2 border-black bg-white text-eerie-black  shadow-[2px_2px_0_0_#000] focus:outline-none focus:ring-0"
                    placeholder="Custom slug (e.g. my-link)"
                    value={slug}
                    onChange={e => {
                        setShortUrl("");
                        setSlug(e.target.value);
                        setError('');
                    }}
                />
                <button
                    type="submit"
                    className="bg-pink-400 border-2 py-3  text-eerie-black font-bold  rounded-lg shadow-[2px_2px_0_0_#000] hover:bg-pink-300 active:shadow active:translate-1 cursor-pointer transition flex items-center justify-center text-sm"
                    disabled={loading}
                >
                    {loading ? <Loading/> : 'Shorten URL'}
                </button>
                {error && <ErrorBox error={error}/>}
                {shortUrl && (
                    <div className="flex flex-col items-center gap-2 mt-4 animate-fade-in">
                        <div className="flex items-center gap-2 w-full">
                            <input
                                type="text"
                                value={shortUrl}
                                readOnly
                                className="px-4 py-3 rounded-lg text-sm border-2 w-full  border-black bg-white text-eerie-black  shadow-[2px_2px_0_0_#000] focus:outline-none focus:ring-0 text-ellipsis"
                            />
                            <button
                                onClick={handleCopy}
                                type="button"
                                className={` border-2 border-black font-bold py-3 w-1/3 rounded-lg shadow-[2px_2px_0_0_#000] transition-all duration-300 ${copied ? 'bg-green-400 text-white' : 'bg-pink-400 text-eerie-black hover:bg-pink-300'} hover:cursor-pointer active:shadow active:translate-x-1 active:translate-y-1`}
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default CustomUrlForm;

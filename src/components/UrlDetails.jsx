import React, {useState} from 'react'
import {MdContentCopy} from "react-icons/md";
import Loading from "./Loading.jsx";

const UrlCard = ({ item, index, deleteMutation }) => {

    const [copied, setCopied] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleCopy = async (data) => {
        if(data) {
            await navigator.clipboard.writeText(data);
        }
        setCopied(true);
        setTimeout(() => setCopied(false),2000)
    }

    return (
        <div className=" border-2  rounded-lg shadow-[3px_3px_0_0_#000] p-4 mb-6 w-sm md:h-64 bg-white flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h2 className="font-bold text-lg">#{index + 1}</h2>
                    <span className="text-sm text-gray-500">Clicks: {item.clicks ?? 0}</span>
                </div>

                <div className="mb-2">
                    <p className="text-sm font-semibold text-gray-600">Short URL</p>
                    <p className="text-blue-700 break-all">{item.createdUrl}</p>
                </div>

                <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-600 flex gap-2 items-center">Original URL
                        <span
                            onClick={() => navigator.clipboard.writeText(item.originalUrl)}
                            className={'cursor-pointer hover:bg-gray-200 p-0.5 rounded-full px-1'}
                            title="Copy URL">
                         <MdContentCopy size={12} />
                    </span>
                    </p>
                    <p className="text-gray-800 break-all text-ellipsis w-full line-clamp-2" title={item.originalUrl}>{item.originalUrl}</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-3">
                <button
                    onClick={() => handleCopy(item.createdUrl)}
                    className={` ${copied? 'bg-green-400 hover:bg-green-300' : 'bg-pink-400 hover:bg-pink-300'}  border-2 border-black rounded-lg px-4 py-2 font-bold text-black shadow-[2px_2px_0_0_#000] transition-all duration-150 active:translate-1 active:shadow `}
                >
                    {copied? 'Copied' : 'Copy'}
                </button>
                <a
                    href={item.createdUrl}
                    target="_blank"
                    className="bg-blue-400 border-2 border-black rounded-lg px-4 py-2 font-bold text-black shadow-[2px_2px_0_0_#000] hover:bg-blue-300 transition-all duration-150 active:translate-1 active:shadow"
                >
                    Visit
                </a>
                <button
                    onClick={() => {
                        setLoading(true)
                        deleteMutation.mutate(item.shortUrl)
                    }}
                    disabled={loading}
                    className="bg-red-400 border-2 border-black rounded-lg px-4 py-2 font-bold text-black shadow-[2px_2px_0_0_#000] hover:bg-red-300 transition-all duration-150 active:translate-1 active:shadow disabled:opacity-50"
                >
                    {loading? <Loading /> : 'Delete'}
                </button>
            </div>
        </div>
    )
}

export default UrlCard

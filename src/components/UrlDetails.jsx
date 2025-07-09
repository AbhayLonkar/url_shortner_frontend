import React from 'react'

const UrlCard = ({ item, index, deleteMutation }) => {
    return (
        <div className=" border-2  rounded-lg shadow-[3px_3px_0_0_#000] p-4 mb-6 w-sm h-min bg-white">
            <div className="flex justify-between items-center mb-2">
                <h2 className="font-bold text-lg">#{index + 1}</h2>
                <span className="text-sm text-gray-500">Clicks: {item.clicks ?? 0}</span>
            </div>

            <div className="mb-2">
                <p className="text-sm font-semibold text-gray-600">Short URL</p>
                <p className="text-blue-700 break-all">{item.createdUrl}</p>
            </div>

            <div className="mb-4">
                <p className="text-sm font-semibold text-gray-600">Original URL</p>
                <p className="text-gray-800 break-all text-ellipsis w-full line-clamp-2">{item.originalUrl}</p>
            </div>

            <div className="flex flex-wrap gap-3">
                <button
                    onClick={() => navigator.clipboard.writeText(item.createdUrl)}
                    className="bg-pink-400 border-2 border-black rounded-lg px-4 py-2 font-bold text-black shadow-[2px_2px_0_0_#000] hover:bg-pink-300 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow"
                >
                    Copy
                </button>
                <a
                    href={item.createdUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400 border-2 border-black rounded-lg px-4 py-2 font-bold text-black shadow-[2px_2px_0_0_#000] hover:bg-blue-300 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow"
                >
                    Visit
                </a>
                <button
                    onClick={() => deleteMutation.mutate(item.shortUrl)}
                    disabled={deleteMutation.isLoading}
                    className="bg-red-400 border-2 border-black rounded-lg px-4 py-2 font-bold text-black shadow-[2px_2px_0_0_#000] hover:bg-red-300 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow disabled:opacity-50"
                >
                    {deleteMutation.isLoading ? 'Deleting...' : 'Delete'}
                </button>
            </div>
        </div>
    )
}

export default UrlCard

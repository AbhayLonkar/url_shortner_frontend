import React from 'react'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getUrls, deleteUrl } from '../api/user.api'
import CustomUrlForm from '../components/CustomUrlForm';

const DashBoard = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['userUrls'],
    queryFn: getUrls,
    refetchInterval: 30000,
    staleTime: 0,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUrl,
    onSuccess: () => {
      queryClient.invalidateQueries(['userUrls']);
    },
  });

  return (
    <div>
      <CustomUrlForm />
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-yellow-100 border-4 border-black rounded-2xl shadow-[8px_8px_0_0_#000]">
        <h2 className="text-2xl font-extrabold text-black mb-6 text-center drop-shadow-[2px_2px_0_#fff]">Your Shortened Links</h2>
        {isLoading && (
          <div className='size-8 border-3 border-gray-600 border-b-black border-l-black rounded-full animate-spin mx-auto'></div>
        )}
        {!isLoading && !isError && data?.urls?.length > 0 && (
          <div className="flex flex-col gap-4">
            {data.urls.map(item => (
              <div key={item._id} className="flex flex-col md:flex-row md:items-center justify-between bg-white border-4 border-black rounded-xl shadow-[4px_4px_0_0_#000] px-4 py-3">
                <div className="flex-1 min-w-0">
                  <a href={item.createdUrl} target='_blank' rel="noopener noreferrer" className="text-blue-700 font-mono break-all hover:underline">
                    {item.createdUrl}
                  </a>
                  <div className="text-gray-600 text-sm truncate">Original: {item.originalUrl}</div>
                  <div className="text-xs text-gray-800 mt-1 font-bold">Clicks: {item.clicks ?? 0}</div>
                </div>
                <div className="mt-2 md:mt-0 md:ml-4 flex gap-2">
                  <button
                    className="bg-pink-400 border-2 border-black rounded-lg px-3 py-1 font-bold text-black shadow-[2px_2px_0_0_#000] hover:bg-pink-300 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow"
                    onClick={() => navigator.clipboard.writeText(item.createdUrl)}
                  >
                    Copy
                  </button>
                  <a
                    href={item.createdUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400 border-2 border-black rounded-lg px-3 py-1 font-bold text-black shadow-[2px_2px_0_0_#000] hover:bg-blue-300 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow"
                  >
                    Visit
                  </a>
                  <button
                    className="bg-red-400 border-2 border-black rounded-lg px-3 py-1 font-bold text-black shadow-[2px_2px_0_0_#000] hover:bg-red-300 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow"
                    onClick={() => deleteMutation.mutate(item.shortUrl)}
                    disabled={deleteMutation.isLoading}
                  >
                    {deleteMutation.isLoading ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {!isLoading && !isError && (!data?.urls || data.urls.length === 0) && (
          <div className="text-center text-gray-700 font-semibold">No links to show</div>
        )}
        {isError && (
          <div className="text-center text-red-600 font-semibold mt-4">{error?.message || 'Failed to load links.'}</div>
        )}
      </div>
    </div>
  )
}

export default DashBoard

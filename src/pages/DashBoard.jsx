import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getUrls, deleteUrl } from '../api/user.api'
import CustomUrlForm from '../components/CustomUrlForm';
import { useNavigate } from '@tanstack/react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slice/authSlice';
import { useEffect } from "react";
import Loading from "../components/Loading";

const DashBoard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  let { data, isLoading, isError, error } = useQuery({
    queryKey: ['userUrls'],
    queryFn: getUrls,
    refetchInterval: 10000,
    staleTime: 0,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUrl,
    onSuccess: () => {
      queryClient.invalidateQueries(['userUrls']);
    },
  });

  useEffect(() => {
    if (error && error.response && error.response.status === 401) {
      dispatch(logout());
      queryClient.removeQueries(['userUrls']); // Reset the query state, including error
      navigate({ to: '/auth' });
    }
  }, [error, dispatch, navigate, queryClient]);

  return (
    <div className="px-4 py-8  bg-pink-100 w-full flex md:flex-row  justify-center md:items-start gap-3 flex-col items-center  flex-wrap ">
      <div className="mb-8  ">
        <CustomUrlForm />
      </div>

      <div className="bg-yellow-100 border-2 border-black rounded-2xl shadow-[2px_2px_0_0_#000] p-6 max-w-4xl  h-110  w-full ">
        <h2 className="text-2xl font-extrabold text-black mb-6 text-center drop-shadow-[2px_2px_0_#fff]">
          Your Shortened Links
        </h2>

        {isLoading && <Loading />}

        {!isLoading && !isError && data?.urls?.length > 0 && (
          <div className="overflow-x-auto overflow-y-auto h-88">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white border-4 border-black">
                  <th className="px-4 py-2 text-left">Sr. No</th>
                  <th className="px-4 py-2 text-left">Generated Links</th>
                  <th className="px-4 py-2 text-left">Clicks</th>
                  <th className="px-4 py-2 text-left">Original Link</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.urls.map((item, index) => (
                  <tr key={item._id} className="border-b-4 border-black bg-white">
                    <td className="px-4 py-3 font-bold">{index + 1}</td>
                    <td className="px-4 py-3">
                      <span className=" text-blue-700 break-all">
                        {item.createdUrl}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold">{item.clicks ?? 0}</td>
                    <td className="px-4 py-3">
                      <span className="text-gray-600 break-all">
                        {item.originalUrl}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!isLoading && !isError && (!data?.urls || data.urls.length === 0) && (
          <div className="text-center text-gray-700 font-semibold">No links to show</div>
        )}

        {isError && (
          <div className="text-center text-red-600 font-semibold mt-4">
            {error?.message || 'Failed to load links.'}
          </div>
        )}
      </div>
    </div>
  )
}

export default DashBoard                      
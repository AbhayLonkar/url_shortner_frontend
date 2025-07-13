import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getUrls, deleteUrl } from '../api/user.api'
import CustomUrlForm from '../components/CustomUrlForm';
import { useNavigate } from '@tanstack/react-router';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slice/authSlice';
import { useEffect } from "react";
import Loading from "../components/Loading";
import UrlDetails from "../components/UrlDetails.jsx";

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

  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated, 'isAuthenticated from dashboard');
  useEffect(() => {

    // If the user is not authenticated or the token is invalid, redirect to login
    // and reset the query state

    if (!isAuthenticated || error && error.response && error.response.status === 401) {
      dispatch(logout());
      queryClient.removeQueries(['userUrls']); // Reset the query state, including error
      navigate({ from: '/dashboard', to: '/auth' });
    }
  }, [error, dispatch, navigate, queryClient, isAuthenticated]);

  return (
    <div className="px-4 py-8  bg-pink-100 w-full flex md:flex-row  justify-center md:items-start gap-3 flex-col items-center  flex-wrap ">
      <div className=" flex justify-center items-center mb-8 md:h-110 ">
        <CustomUrlForm />
      </div>

      <div className="bg-yellow-100 border-2 border-black rounded-lg shadow-[2px_2px_0_0_#000] p-6 max-w-4xl  md:h-110 h-min   w-full ">
        <h2 className="text-2xl font-extrabold text-black mb-6 text-center drop-shadow-[2px_2px_0_#fff] underline  underline-offset-4">
          Your Shortened Links
        </h2>

        {isLoading && <Loading />}

        {!isLoading && !isError && data?.urls?.length > 0 && (
          <div className="flex flex-wrap justify-center items-center gap-2 overflow-y-auto h-88 w-full">
            {data.urls.map((item, index) => (
              <UrlDetails item={item} index={index} key={item._id} deleteMutation={deleteMutation} />
            ))}
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
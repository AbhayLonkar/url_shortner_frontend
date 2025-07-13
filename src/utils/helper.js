import { redirect } from "@tanstack/react-router";
import { login } from "../../store/slice/authSlice";
import { getCurrentUser } from "../api/user.api";

export const checkAuth = async ({ context }) => {
  const { queryClient, store } = context;
  try {
    const user = await queryClient.ensureQueryData({
      queryKey: ["currentUser"],
      queryFn: getCurrentUser,
    });
    if (!user) return false;
    store.dispatch(login(user));
    const { isAuthenticated } = store.getState().auth;
    if (!isAuthenticated) return false
    return true;
  } catch (error) {
    console.log(error);
    return redirect({ to: '/auth' })
  }

}
import axiosInstance from "../utils/axiosInstance";

export const loginUser = async (email, password) => {
  const { data } = await axiosInstance.post('http://localhost:3000/api/auth/login', { email, password });
  return data;
}
export const registerUser = async (name, email, password) => {
  const { data } = await axiosInstance.post('http://localhost:3000/api/auth/register', { name, email, password });
  return data;
}
export const logoutUser = async () => {
  const { data } = await axiosInstance.get('http://localhost:3000/api/auth/logout');
  return data;
}
import axiosInstance from "../utils/axiosInstance";

export const createShortUrl = async (url, slug = null) => {
  const { data } = await axiosInstance.post('http://localhost:3000/api/create', { url, slug });
  return data.shortUrl;
}

export const deleteShortUrl = async (id) => {
  const { data } = await axiosInstance.post('http://localhost:3000/api/user/delete', { id });
  return data;
}
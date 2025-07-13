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
  const { data } = await axiosInstance.get('/api/auth/logout');
  return data;
}

export const getCurrentUser = async () => {
  try {
    const { data } = await axiosInstance.get('/api/auth/me', {
      withCredentials: true, // 🔑 Make sure cookie is sent
    });
    return data.user; // 🔍 adjust this based on actual response structure
  } catch (err) {
    if (err.response && err.response.status === 401) {
      // Explicitly throw for unauthorized
      throw new Error('Unauthorized');
    }
    throw err; // Re-throw other errors like 500, network issues
  }
};


export const getUrls = async () => {
  const { data } = await axiosInstance.get('http://localhost:3000/api/user/urls');
  return data;
}

export const deleteUrl = async (id) => {
  const { data } = await axiosInstance.delete(`http://localhost:3000/api/user/delete/${id}`);
  return data;
}

export const sendOTP = async (email) => {
  const response = await axiosInstance.post('/api/otp/send', { email });
  return response.data;
};

export const verifyOTP = async (email, otp) => {
  const response = await axiosInstance.post('/api/otp/verify', { email, otp });
  return response.data;
};

export const googleLogin = async () => {
  const response = await axiosInstance.get('/api/auth/google');
  return response.data;
}


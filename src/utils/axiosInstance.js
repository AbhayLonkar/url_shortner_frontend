import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 10000, // 10sec
    withCredentials: true, // Allow cookies to be sent with requests
});

// Error handler interceptor
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        // You can customize this logic (e.g., show toast, log, etc.)

        if (error.response) {
            // Server responded with a status other than 2xx
            console.error('API Error:', error.response.status, error.response.data);
            // Optionally, show a user-friendly message
            // alert('An error occurred: ' + error.response.data.message || error.message);
        } else if (error.request) {
            // No response received
            console.error('No response from server:', error.request);
        } else {
            // Something else happened
            console.error('Axios error:', error.message);
        }
        // Always reject so calling code can handle as well
        return Promise.reject(error);
    }
);

export default axiosInstance;
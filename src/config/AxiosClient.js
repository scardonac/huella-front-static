import axios from "axios";

const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_PUBLIC_BACKEND_URL
});

axiosClient.interceptors.request.use(
	(request) => {
		try {
			const token = localStorage.getItem('token');
			if (token) {
				request.headers['Authorization'] = `Bearer ${token}`;
			}
		} catch (e) { }

		return request;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosClient;


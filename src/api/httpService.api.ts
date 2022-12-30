import axios, { AxiosRequestConfig } from "axios";

class HttpService {
	constructor() {
		axios.defaults.baseURL = "http://localhost:3001";
		axios.interceptors.request.use(
			(config) => {
				return config;
			},
			(error) => Promise.reject(error)
		);
	}

	get(url: string, config?: AxiosRequestConfig) {
		return axios.get(url, config);
	}

	post(url: string, data: any, config?: AxiosRequestConfig) {
		return axios.post(url, data, config);
	}
}

export default new HttpService();

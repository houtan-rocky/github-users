import Login from "../api/auth/login.api";

const loginService = async (data: {
	username: string;
	password: string;
	remember: boolean;
}) => {
	try {
		const response = await Login({
			username: data.username,
			password: data.password,
		});
		if (data.remember) {
			localStorage.setItem("ACCESS_TOKEN", response.token);
		} else {
			sessionStorage.setItem("ACCESS_TOKEN", response.token);
		}
	} catch (error) {
		return Promise.reject(error);
	}
};

export default loginService;

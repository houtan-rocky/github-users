import http from "../httpService.api";
const LOGIN = "/auth/login";

const Login = async (data: any) => {
	const response = await http.post(LOGIN, data);
	return response.data;
};

export default Login;

import { width } from "@mui/system";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import loginService from "../services/services.services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface LoginPageProps {}

const LoginPage = () => {
	const navigate = useNavigate();
	const handleLogin = async (
		data: {
			username: string;
			password: string;
			remember: boolean;
		},
		setSubmitting: (isSubmitting: boolean) => void
	) => {
		setSubmitting(true);
		loginService(data).then(() => {
			toast.success("ورود با موفقیت انجام شد");
			navigate("/users");
		});
	};

	return (
		<Paper>
			<Box>
				<Typography>ورود به پنل</Typography>
				<Formik
					initialValues={{ username: "", password: "", remember: true }}
					onSubmit={(data, { setSubmitting }) =>
						handleLogin(data, setSubmitting)
					}
				>
					<Form>
						<Box sx={{ textAlign: "center" }}>
							<Field placeholder="نام کاربری" name="username" required />
							<Field placeholder="رمز عبور" name="password" required />
							<Box textAlign={"center"}>
								<Button variant="contained" type="submit">
									ورود
								</Button>
							</Box>
						</Box>
					</Form>
				</Formik>
			</Box>
		</Paper>
	);
};

export default LoginPage;

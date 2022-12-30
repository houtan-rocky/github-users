import { Route, Routes, useRoutes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const Router: React.FunctionComponent = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/users" element={<PrivateRoutes />} />
		</Routes>
	);
};

export default Router;

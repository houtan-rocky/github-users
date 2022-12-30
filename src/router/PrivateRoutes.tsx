import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import { checkAuth } from "../utils/functions.util";

const PrivateRoutes: React.FunctionComponent = () => {
	const location = useLocation();
	const isAuth = checkAuth();

	return isAuth ? <UsersPage /> : <Navigate to={"/"} />;
};

export default PrivateRoutes;

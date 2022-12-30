import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

const GITHUB_USERS_API = "https://api.github.com/users";

interface UsersPageProps {}

const UsersPage = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchProfiles();
	}, []);

	const fetchProfiles = () => {
		fetch(GITHUB_USERS_API)
			.then((res) => res.json())
			.then((data) => setUsers(data));
	};

	return <UserCard users={users} />;
};

export default UsersPage;

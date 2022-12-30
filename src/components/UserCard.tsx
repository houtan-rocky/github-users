interface Iuser {
	login: string;
	avatar_url: string;
}

interface UserCardProps {
	users: Iuser[];
}

const UserCard = (props: UserCardProps) => {
	return (
		<>
			{props.users.map((user) => (
				<div className="user-card" key={user.login}>
					<div className="user-card__header">
						<h2>{user.login}</h2>
					</div>
					<div className="user-card__image">
						<img src={user.avatar_url} alt={user.login + " profile picture"} />
					</div>
				</div>
			))}
		</>
	);
};

export default UserCard;

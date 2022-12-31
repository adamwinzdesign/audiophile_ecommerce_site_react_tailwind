import { Link } from "react-router-dom";

const NoMatch = () => {
	return (
		<div>
			<h1>No match!</h1>
			<Link to='/'>Go back home</Link>
		</div>
	);
};

export default NoMatch;

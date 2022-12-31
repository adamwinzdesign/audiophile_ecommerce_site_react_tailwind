import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className='flex gap-[10px]'>
			<Link to='/'>Home</Link>
			<Link to='/headphones'>Headphones</Link>
			<Link to='/speakers'>Speakers</Link>
			<Link to='/earphones'>Earphones</Link>
		</nav>
	);
};

export default Nav;

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<nav className='flex gap-[10px]'>
				<Link to='/'>Home</Link>
				<Link to='/headphones'>Headphones</Link>
			</nav>
			<Outlet />
		</div>
	);
};

export default Layout;

import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className='h-[5.625rem] desk:h-[6rem] flex items-center justify-center gap-[2.125rem] bg-black'>
			<Link
				to='/'
				className='font-bold text-[13px] leading-[25px] tracking-[2px] uppercase text-white hover:text-peru duration-500'
			>
				Home
			</Link>
			<Link
				to='/headphones'
				className='font-bold text-[13px] leading-[25px] tracking-[2px] uppercase text-white hover:text-peru duration-500'
			>
				Headphones
			</Link>
			<Link
				to='/speakers'
				className='font-bold text-[13px] leading-[25px] tracking-[2px] uppercase text-white hover:text-peru duration-500'
			>
				Speakers
			</Link>
			<Link
				to='/earphones'
				className='font-bold text-[13px] leading-[25px] tracking-[2px] uppercase text-white hover:text-peru duration-500'
			>
				Earphones
			</Link>
		</nav>
	);
};

export default Nav;

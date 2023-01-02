import StyledLink from "./StyledLink";

const Nav = () => {
	return (
		<nav className='h-[5.625rem] desk:h-[6rem] flex items-center justify-center gap-[2.125rem] bg-black'>
			<StyledLink dest='/' text='Home' />
			<StyledLink dest='/headphones' text='Headphones' />
			<StyledLink dest='/speakers' text='Speakers' />
			<StyledLink dest='/earphones' text='Earphones' />
		</nav>
	);
};

export default Nav;

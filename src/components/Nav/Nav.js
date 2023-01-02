import StyledLink from "./StyledLink";
import hamburger from "../../images/shared/tablet/icon-hamburger.svg";

const Nav = ({ modalOpen, setModalOpen, menuOpen, setMenuOpen }) => {
	const handleMenuClick = () => {
		setModalOpen(!modalOpen);
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className='h-[5.625rem] desk:h-[6rem] flex items-center justify-center gap-[2.125rem] bg-black'>
			{/* hamburger */}
			<div
				className='desk:hidden relative w-[16px] h-[15px] cursor-pointer'
				onClick={handleMenuClick}
			>
				<img src={hamburger} alt='hamburger menu button' />
			</div>
			<StyledLink dest='/' text='Home' />
			<StyledLink dest='/headphones' text='Headphones' />
			<StyledLink dest='/speakers' text='Speakers' />
			<StyledLink dest='/earphones' text='Earphones' />
		</nav>
	);
};

export default Nav;

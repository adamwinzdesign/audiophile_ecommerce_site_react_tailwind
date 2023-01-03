import MenuButton from "./MenuButton";
import StyledLink from "./StyledLink";
import logo from "../../images/shared/desktop/logo.svg";
import cart from "../../images/shared/desktop/icon-cart.svg";

const Nav = ({ modalOpen, setModalOpen, menuOpen, setMenuOpen, handleMenuClick }) => {
	// const handleMenuClick = () => {
	// 	setModalOpen(!modalOpen);
	// 	setMenuOpen(!menuOpen);
	// };

	return (
		<nav className='h-[5.625rem] desk:h-[6rem] flex items-center justify-center bg-black'>
			<MenuButton handleMenuClick={handleMenuClick} />

			<img src={logo} alt='audiophile logo' />

			<div className='hidden desk:flex  gap-[2.125rem] '>
				<StyledLink dest='/' text='Home' />
				<StyledLink dest='/headphones' text='Headphones' />
				<StyledLink dest='/speakers' text='Speakers' />
				<StyledLink dest='/earphones' text='Earphones' />
			</div>

			<img src={cart} alt='cart' />
		</nav>
	);
};

export default Nav;

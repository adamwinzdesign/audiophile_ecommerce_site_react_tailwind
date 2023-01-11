import MenuButton from "./MenuButton";
import StyledLink from "./StyledLink";
import logo from "../../images/shared/desktop/logo.svg";
import cart from "../../images/shared/desktop/icon-cart.svg";

const Nav = ({ handleMenuClick }) => {
	return (
		<nav className='px-[1.5rem] md:px-[2.5rem] desk:px-[10.25rem] h-[5.625rem] desk:h-[6rem] bg-black'>
			<div className='w-full h-full flex items-center justify-between border-b-[1px] border-white/20'>
				<div className='desk:hidden w-[16px] h-[15px] cursor-pointer'>
					<MenuButton handleMenuClick={handleMenuClick} />
				</div>

				<div className='desk:min-w-[30%] flex justify-start'>
					<img src={logo} alt='audiophile logo' />
				</div>

				<div className='desk:min-w-[30%] hidden desk:flex'>
					<div className='hidden desk:flex gap-[2.125rem]'>
						<StyledLink dest='/' text='Home' />
						<StyledLink dest='/headphones' text='Headphones' />
						<StyledLink dest='/speakers' text='Speakers' />
						<StyledLink dest='/earphones' text='Earphones' />
					</div>
				</div>

				<div className='desk:min-w-[30%] flex justify-end'>
					<img src={cart} alt='cart' />
				</div>
			</div>
		</nav>
	);
};

export default Nav;

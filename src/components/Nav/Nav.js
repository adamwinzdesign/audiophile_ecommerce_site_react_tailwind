import MenuButton from "./MenuButton";
import StyledLink from "./StyledLink";
import logo from "../../images/shared/desktop/logo.svg";
import cartIcon from "../../images/shared/desktop/icon-cart.svg";
import { useCartStore } from "../../store/cartStore";
import { useLayoutStore } from "../../store/layoutStore";
import { AnimatePresence, motion } from "framer-motion";
import { modalFadeIn } from "../../utils/animations";
import { useCartTotalItems } from "../../hooks/useCartTotalItems";
import { Link } from "react-router-dom";

const Nav = () => {
	const { cart } = useCartStore();
	const { cartOpen, updateModalOpen, updateMenuOpen, updateCartOpen, updateThankYouOpen } =
		useLayoutStore();

	const cartTotalItems = useCartTotalItems(cart);

	const handleCartClick = () => {
		updateMenuOpen(false);
		updateThankYouOpen(false);
		if (cartOpen === true) {
			updateCartOpen(false);
			updateModalOpen(false);
		} else if (cartOpen === false) {
			updateCartOpen(true);
			updateModalOpen(true);
		}
	};

	return (
		<nav className='h-[5.625rem] bg-black px-[1.5rem] md:px-[2.5rem] desk:h-[6rem] desk:px-[10.25rem]'>
			<div className='flex h-full w-full items-center justify-between border-b-[1px] border-white/20 md:justify-start desk:justify-between'>
				<div className='h-heightXS w-4 cursor-pointer desk:hidden'>
					<MenuButton />
				</div>
				<Link to='/' className='md:ml-[2.5rem] md:mr-auto desk:ml-0 desk:mr-0 desk:min-w-[30%]'>
					<div className='flex justify-start'>
						<img src={logo} alt='audiophile logo' />
					</div>
				</Link>
				<div className='hidden desk:flex desk:min-w-[30%]'>
					<div className='hidden gap-[2.125rem] desk:flex'>
						<StyledLink dest='/' text='Home' />
						<StyledLink dest='/headphones' text='Headphones' />
						<StyledLink dest='/speakers' text='Speakers' />
						<StyledLink dest='/earphones' text='Earphones' />
					</div>
				</div>

				<div
					className={`relative flex justify-end overflow-visible desk:min-w-[30%] ${
						cartTotalItems > 0 ? "cursor-pointer" : "cursor-not-allowed"
					}`}
					onClick={cartTotalItems > 0 ? handleCartClick : null}
				>
					<img src={cartIcon} alt='cart' />
					<AnimatePresence initial={false}>
						{cart.length > 0 && (
							<motion.div
								variants={modalFadeIn}
								initial='hidden'
								animate='show'
								exit='exit'
								className={`absolute -right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-peru`}
							>
								<p className='text-[0.9rem] text-white'>{cartTotalItems}</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</nav>
	);
};

export default Nav;

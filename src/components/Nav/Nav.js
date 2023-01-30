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

	console.log(window.location);

	return (
		<nav className='px-[1.5rem] md:px-[2.5rem] desk:px-[10.25rem] h-[5.625rem] desk:h-[6rem] bg-black'>
			<div className='w-full h-full flex items-center justify-between md:justify-start desk:justify-between border-b-[1px] border-white/20'>
				<div className='desk:hidden w-[16px] h-[15px] cursor-pointer'>
					<MenuButton />
				</div>
				<Link to='/' className='desk:min-w-[30%] md:ml-[2.5rem] desk:ml-0 md:mr-auto desk:mr-0'>
					<div className='flex justify-start'>
						<img src={logo} alt='audiophile logo' />
					</div>
				</Link>
				<div className='desk:min-w-[30%] hidden desk:flex'>
					<div className='hidden desk:flex gap-[2.125rem]'>
						<StyledLink dest='/' text='Home' />
						<StyledLink dest='/headphones' text='Headphones' />
						<StyledLink dest='/speakers' text='Speakers' />
						<StyledLink dest='/earphones' text='Earphones' />
					</div>
				</div>

				<div
					className={`relative desk:min-w-[30%] flex justify-end overflow-visible ${
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
								className={`absolute right-[-15px] top-[15px] h-[1.5rem] w-[1.5rem] flex items-center justify-center bg-peru rounded-full`}
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

import MenuButton from "./MenuButton";
import StyledLink from "./StyledLink";
import logo from "../../images/shared/desktop/logo.svg";
import cartIcon from "../../images/shared/desktop/icon-cart.svg";
import { useCartStore } from "../../store/cartStore";
import { useLayoutStore } from "../../store/layoutStore";
import { AnimatePresence, motion } from "framer-motion";
import { modalFadeIn } from "../../utils/animations";

const Nav = () => {
	const { cart } = useCartStore();
	const { cartOpen, updateModalOpen, updateMenuOpen, updateCartOpen, updateThankYouOpen } =
		useLayoutStore();

	const cartTotalItems = cart.reduce((result, item) => {
		result = result + item.productQty;
		return result;
	}, 0);

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
		<nav className='px-[1.5rem] md:px-[2.5rem] desk:px-[10.25rem] h-[5.625rem] desk:h-[6rem] bg-black'>
			<div className='w-full h-full flex items-center justify-between border-b-[1px] border-white/20'>
				<div className='desk:hidden w-[16px] h-[15px] cursor-pointer'>
					<MenuButton />
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

				<div
					className='relative desk:min-w-[30%] flex justify-end overflow-visible cursor-pointer'
					onClick={handleCartClick}
				>
					<img src={cartIcon} alt='cart' />
					<AnimatePresence initial={false}>
						{cart.length > 0 && (
							<motion.div
								variants={modalFadeIn}
								initial='hidden'
								animate='show'
								exit='exit'
								className={`absolute left-[15px] top-[15px] h-[1.1rem] w-[1.1rem] flex items-center justify-center bg-peru rounded-full`}
							>
								<p className='text-[1rem] text-white'>{cartTotalItems}</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</nav>
	);
};

export default Nav;

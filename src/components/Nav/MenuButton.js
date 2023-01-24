import hamburger from "../../images/shared/tablet/icon-hamburger.svg";
import { useLayoutStore } from "../../store/layoutStore";

const MenuButton = () => {
	const { menuOpen, updateModalOpen, updateMenuOpen, updateCartOpen, updateThankYouOpen } =
		useLayoutStore();

	const handleMenuClick = () => {
		updateCartOpen(false);
		updateThankYouOpen(false);
		if (menuOpen === true) {
			updateMenuOpen(false);
			updateModalOpen(false);
		} else if (menuOpen === false) {
			updateMenuOpen(true);
			updateModalOpen(true);
		}
	};

	return (
		<div className='w-full h-full' onClick={handleMenuClick}>
			<img src={hamburger} alt='hamburger' />
		</div>
	);
};

export default MenuButton;

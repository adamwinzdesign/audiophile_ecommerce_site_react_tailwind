import hamburger from "../../images/shared/tablet/icon-hamburger.svg";

const MenuButton = ({ handleMenuClick }) => {
	return (
		<div
			className='desk:hidden relative w-[16px] h-[15px] cursor-pointer'
			onClick={handleMenuClick}
		>
			<img src={hamburger} alt='hamburger' />
		</div>
	);
};

export default MenuButton;

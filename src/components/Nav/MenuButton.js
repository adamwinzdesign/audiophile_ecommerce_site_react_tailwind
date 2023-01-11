import hamburger from "../../images/shared/tablet/icon-hamburger.svg";

const MenuButton = ({ handleMenuClick }) => {
	return (
		<div className='w-full h-full' onClick={handleMenuClick}>
			<img src={hamburger} alt='hamburger' />
		</div>
	);
};

export default MenuButton;

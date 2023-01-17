import arrowRight from "../../images/shared/desktop/icon-arrow-right.svg";
import MobileLink from "./MobileLink";

const MobileCard = ({ title, dest }) => {
	const mobileMenuCategoryThumbnail = require(`../../images/shared/desktop/image-category-thumbnail-${title}.png`);

	return (
		<div className='desk:w-[22rem] flex flex-col items-center justify-between'>
			<img
				src={mobileMenuCategoryThumbnail}
				alt='product category'
				className='h-[8.375rem] desk:h-[12rem]'
			/>

			<h2 className='font-bold text-[1rem] leading-[1.125rem] tracking-[1.07px] uppercase text-black'>
				{title}
			</h2>
			<div className='flex items-center justify-center gap-[13px]'>
				<MobileLink dest={dest} />
				<img src={arrowRight} alt='arrow' className='w-[5px] h-[10px]' />
			</div>
		</div>
	);
};

export default MobileCard;

import arrowRight from "../../images/shared/desktop/icon-arrow-right.svg";
import MobileLink from "../../components/Nav/MobileLink";

const HomeCategoryCard = ({ title, dest }) => {
	const mobileMenuCategoryThumbnail = require(`../../images/shared/desktop/image-category-thumbnail-${title}.png`);

	return (
		<div className='relative h-[13.5rem] pb-[1.7rem] flex flex-col items-center justify-between'>
			<div className='z-20'>
				<img src={mobileMenuCategoryThumbnail} alt='product category' className='h-[8.5rem]' />
			</div>

			<h2 className='md:mt-[0.4rem] mb-[1rem] font-bold text-[1rem] leading-[1.125rem] tracking-[1.07px] uppercase text-black z-20'>
				{title}
			</h2>
			<div className='flex items-center justify-center gap-[13px] z-20'>
				<MobileLink dest={dest} />
				<img src={arrowRight} alt='arrow' className='w-[5px] h-[10px]' />
			</div>
			<div className='absolute bottom-0 left-0 w-full h-[10.25rem] bg-light_grey rounded-lg' />
		</div>
	);
};

export default HomeCategoryCard;

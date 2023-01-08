import arrowRight from "../../images/shared/desktop/icon-arrow-right.svg";
import MobileLink from "./MobileLink";

const MobileCard = ({ img, title, dest }) => {
	return (
		<div className='h-[12.25rem] desk:h-[17.75rem] desk:w-[22rem] flex flex-col items-center justify-between'>
			<img src={img} alt='headphones category' className='h-[8.375rem] desk:h-[12rem]' />
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

import { Link } from "react-router-dom";

const HomeHero = () => {
	return (
		<div
			className='
				w-[100vw] h-[32rem] md:h-[40rem] md:pb-[2.5rem] desk:px-[10.25rem]
				bg-[center_bottom_0.1rem] bg-cover bg-no-repeat bg-black bg-homeHeroBGMobile md:bg-homeHeroBGTablet desk:bg-homeHeroBGDesk
				flex items-center justify-center desk:justify-start
			'
		>
			<div className='w-[87.5%] md:w-[23.75rem] h-[18rem] md:h-[21.75rem] flex flex-col items-center justify-between desk:items-start'>
				<p className='text-[14px] leading-[19px] tracking-[10px] text-center desk:text-left uppercase text-white/50'>
					new product
				</p>
				<h2 className='font-bold text-[2.25rem] md:text-[3.5rem] leading-[2.5rem] md:leading-[3.625rem] tracking-[1.28px] md:tracking-[2px] text-center desk:text-left text-white uppercase'>
					XX99 mark II headphones
				</h2>
				<p className='md:max-w-[22rem] md:mb-[1rem] font-medium text-xs leading-25 text-center desk:text-left text-white/75'>
					Experience natural, lifelike audio and exceptional build quality made for the passionate
					music enthusiast.
				</p>
				<Link to='/details/xx99-mark-two-headphones'>
					<button className='w-[10rem] h-[3rem] font-bold text-[13px] leading-[18px] tracking-[1px] uppercase text-white bg-peru'>
						see product
					</button>
				</Link>
			</div>
		</div>
	);
};

export default HomeHero;

import { Link } from "react-router-dom";

const HomeHero = () => {
	return (
		<div
			className='
				flex h-[32rem] w-[100vw] items-center justify-center
				bg-black bg-homeHeroBGMobile bg-cover bg-[center_bottom_0.1rem] bg-no-repeat md:h-[40rem] md:bg-homeHeroBGTablet
				md:pb-[2.5rem] desk:justify-start desk:bg-homeHeroBGDesk desk:px-[10.25rem]
			'
		>
			<div className='flex h-[18rem] w-[87.5%] flex-col items-center justify-between md:h-[21.75rem] md:w-[23.75rem] desk:items-start'>
				<p className='text-center text-[14px] uppercase leading-[19px] tracking-[10px] text-white/50 desk:text-left'>
					new product
				</p>
				<h2 className='text-center text-[2.25rem] font-bold uppercase leading-[2.5rem] tracking-[1.28px] text-white md:text-[3.5rem] md:leading-[3.625rem] md:tracking-[2px] desk:text-left'>
					XX99 mark II headphones
				</h2>
				<p className='text-center text-15 font-medium leading-25 text-white/75 md:mb-[1rem] md:max-w-[22rem] desk:text-left'>
					Experience natural, lifelike audio and exceptional build quality made for the passionate
					music enthusiast.
				</p>
				<Link to='/details/xx99-mark-two-headphones'>
					<button className='h-[3rem] w-[10rem] bg-peru text-13 font-bold uppercase leading-[18px] tracking-[1px] text-white'>
						see product
					</button>
				</Link>
			</div>
		</div>
	);
};

export default HomeHero;

const HomeHero = () => {
	return (
		<div
			className='
				w-[100vw] h-[32rem] md:h-[40rem]
				bg-[center_bottom_0.1rem] bg-cover bg-no-repeat bg-black bg-homeHeroBGMobile md:bg-homeHeroBGTablet
				flex items-center justify-center
				'
		>
			<div className='w-[87.5%] h-[18rem] flex flex-col items-center justify-between border border-red-600'>
				<p className='text-[14px] leading-[19px] tracking-[10px] text-center uppercase text-white/50'>
					new product
				</p>
				<h2 className='font-bold text-[2.25rem] md:text-[3.5rem] leading-[2.5rem] md:leading-[3.625rem] tracking-[1.28px] text-center text-white uppercase'>
					XX99 mark II headphones
				</h2>
				<p className='md:max-w-[22rem] font-medium text-[15px] leading-[1.5rem] text-center text-white/75'>
					Experience natural, lifelike audio and exceptional build quality made for the passionate
					music enthusiast.
				</p>
				<button className='w-[10rem] h-[3rem] font-bold text-[13px] leading-[18px] tracking-[1px] uppercase text-white bg-peru'>
					see products
				</button>
			</div>
		</div>
	);
};

export default HomeHero;

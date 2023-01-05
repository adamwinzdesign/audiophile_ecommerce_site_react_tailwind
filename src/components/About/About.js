const About = () => {
	return (
		<div className='h-[46.25rem] px-[1.5rem] flex flex-col items-center'>
			{/* photo */}
			<div
				className='
          h-[18.75rem] md:h-[18.75rem] desk:h-[36.75rem] w-full 
          bg-cover bg-no-repeat bg-aboutBGMobile md:bg-aboutBGTablet desk:bg-aboutBGDesk
          rounded-lg
        '
			/>
			{/* title and text, to be placed to the left of the photo at desktop width */}
			<div className='flex flex-col items-center'>
				{/* title */}
				<h2
					className='
            md:max-w-[36rem] my-[2.5rem] md:my-[3rem] 
            font-bold text-[1.75rem] md:text-[2.5rem] leading-[2.375rem] md:leading-[2.75rem] text-center tracking-[1px] uppercase text-black'
				>
					Bringing you the <span className='text-peru'>best</span> audio gear
				</h2>
				{/* text */}
				<p className='md:max-w-[36rem] text-[15px] leading-[1.625rem] text-center text-black/50'>
					Located at the heart of New York City, Audiophile is the premier store for high end
					headphones, earphones, speakers, and audio accessories. We have a large showroom and
					luxury demonstration rooms availabled for you to browse and experience a wide range of our
					products. Stop by our store to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>
		</div>
	);
};

export default About;

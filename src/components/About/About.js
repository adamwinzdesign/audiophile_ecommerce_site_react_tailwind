import BasicP from "../shared/Typography/BasicP";

const About = () => {
	return (
		<>
			{/* about component should display on all pages except checkout */}
			{!window.location.href.includes("checkout") && (
				<div className='h-[46.25rem] px-[1.5rem] md:px-[2.5rem] desk:px-[10.25rem] pb-[2.75rem] mb-[4.75rem] md:mb-0 flex flex-col desk:flex-row-reverse items-center desk:justify-between'>
					{/* photo */}
					<div
						className='
          h-[18.75rem] md:h-[18.75rem] desk:h-[36.75rem] w-full desk:w-[33.75rem] 
          bg-cover bg-no-repeat bg-aboutBGMobile md:bg-aboutBGTablet desk:bg-aboutBGDesk
          rounded-lg
        '
					/>
					{/* title and text, to be placed to the left of the photo at desktop width */}
					<div className='flex flex-col items-center'>
						{/* title */}
						<h2
							className='
            md:max-w-[36rem] desk:max-w-[28rem] my-[2.5rem] md:mt-[3.75rem] desk:mt-[4rem]
            font-bold text-[1.75rem] md:text-[2.5rem] leading-[2.375rem] md:leading-[2.75rem] text-center desk:text-left tracking-[1px] uppercase text-black'
						>
							Bringing you the <span className='text-peru'>best</span> audio gear
						</h2>
						{/* text */}
						<BasicP>
							Located at the heart of New York City, Audiophile is the premier store for high end
							headphones, earphones, speakers, and audio accessories. We have a large showroom and
							luxury demonstration rooms availabled for you to browse and experience a wide range of
							our products. Stop by our store to meet some of the fantastic people who make
							Audiophile the best place to buy your portable audio equipment.
						</BasicP>
					</div>
				</div>
			)}
		</>
	);
};

export default About;

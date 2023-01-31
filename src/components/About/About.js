import BasicP from "../shared/Typography/BasicP";

const About = () => {
	return (
		<>
			{/* about component should display on all pages except checkout */}
			{!window.location.href.includes("checkout") && (
				<div className='mb-[4.75rem] flex h-[46.25rem] flex-col items-center px-[1.5rem] pb-[2.75rem] md:mb-0 md:px-[2.5rem] desk:flex-row-reverse desk:justify-between desk:px-[10.25rem]'>
					{/* photo */}
					<div
						className='
          h-[18.75rem] w-full rounded-lg bg-aboutBGMobile bg-cover 
          bg-no-repeat md:h-[18.75rem] md:bg-aboutBGTablet desk:h-[36.75rem] desk:w-[33.75rem]
          desk:bg-aboutBGDesk
        '
					/>
					{/* title and text, to be placed to the left of the photo at desktop width */}
					<div className='flex flex-col items-center'>
						{/* title */}
						<h2
							className='
            my-[2.5rem] text-center text-[1.75rem] font-bold uppercase
            leading-[2.375rem] tracking-1 text-black md:mt-[3.75rem] md:max-w-[36rem] md:text-[2.5rem] md:leading-[2.75rem] desk:mt-[4rem] desk:max-w-[28rem] desk:text-left'
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

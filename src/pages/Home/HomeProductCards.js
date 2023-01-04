import zx9Mobile from "../../images/home/mobile/image-speaker-zx9.png";

const HomeProductCards = () => {
	return (
		<div className='h-[94.5rem] px-[1.5rem] py-[5rem] flex flex-col'>
			{/* zx9 home card */}
			<div
				className='
          h-[37.5rem] md:h-[45rem] desk:h-[35rem]
          py-[3.5rem]
          bg-peru bg-cover bg-no-repeat bg-zx9Rings bg-[center_bottom_8rem] md:bg-[center_bottom_3.1rem] md:bg-944 rounded-lg
          flex flex-col md:flex-row items-center
        '
			>
				{/* img only */}
				<img src={zx9Mobile} alt='zx9 speaker' className='md:hidden w-[10.75rem]' />
				{/* title, text, and button to product page */}
				<div className='flex flex-col'>
					<h2
						className='
              font-bold 
              text-[2.25rem] md:text-[3.5rem] 
              leading-[2.5rem] md:leading-[3.625rem] 
              tracking-[1.29px] md:tracking-[2px] 
              text-center uppercase text-white
            '
					>
						ZX9
						<br />
						Speaker
					</h2>
					<p
						className='
              text-[1rem] 
              leading-[1.5rem] 
              text-center text-white 
              opacity-75
            '
					>
						Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
						sound.
					</p>
					{/* put button here! */}
				</div>
			</div>
			{/* zx7 home card */}
			{/* yx1 earphones */}
		</div>
	);
};

export default HomeProductCards;

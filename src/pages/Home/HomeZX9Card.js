import zx9Mobile from "../../images/home/mobile/image-speaker-zx9.png";
import zx9Tablet from "../../images/home/tablet/image-speaker-zx9.png";
import zx9Desk from "../../images/home/desktop/image-speaker-zx9.png";

const HomeZX9Card = () => {
	return (
		<div
			className='
          h-[37.5rem] md:h-[45rem] desk:h-[35rem]
          py-[3.5rem] md:py-[4rem]
          bg-peru bg-cover bg-no-repeat bg-zx9Rings 
					bg-[center_bottom_8rem] md:bg-[center_bottom_3.1rem] desk:bg-[left_-9rem_top_2rem] md:bg-944 rounded-lg
          flex flex-col desk:flex-row items-center
					overflow-hidden
        '
		>
			{/* img only */}
			<img src={zx9Mobile} alt='zx9 speaker' className='md:hidden w-[10rem]' />
			<img src={zx9Tablet} alt='zx9 speaker' className='hidden md:block w-[11rem] desk:hidden' />
			<img
				src={zx9Desk}
				alt='zx9 speaker'
				className='hidden desk:block w-[23.5rem] ml-[8.75rem] mt-[8rem]'
			/>
			{/* title, text, and button to product page */}
			<div className='h-full md:max-w-[22rem] pt-[2.8rem] md:pt-[5rem] desk:ml-[9.5rem] flex flex-col items-center desk:items-start justify-between'>
				<h2
					className='
              font-bold 
              text-[2.25rem] md:text-[3.5rem] 
              leading-[2.5rem] md:leading-[3.625rem] 
              tracking-[1.29px] md:tracking-[2px] 
              text-center desk:text-left uppercase text-white
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
              text-center desk:text-left text-white 
              opacity-75
            '
				>
					Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
				</p>
				<button
					href='/speakers/zx9'
					className='w-[10rem] h-[3rem] text-bold text-[1rem] leading-[1.125rem] tracking-[1px] text-white uppercase bg-black flex items-center justify-center'
				>
					See Product
				</button>
			</div>
		</div>
	);
};

export default HomeZX9Card;

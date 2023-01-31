import zx9Mobile from "../../images/home/mobile/image-speaker-zx9.png";
import zx9Tablet from "../../images/home/tablet/image-speaker-zx9.png";
import zx9Desk from "../../images/home/desktop/image-speaker-zx9.png";

const HomeZX9Card = () => {
	return (
		<div
			className='
          flex h-[37.5rem] flex-col
          items-center overflow-hidden
          rounded-lg bg-peru bg-zx9Rings bg-cover 
					bg-[center_bottom_8rem] bg-no-repeat py-[3.5rem] md:h-[45rem] md:bg-944
          md:bg-[center_bottom_3.1rem] md:py-[4rem] desk:h-[35rem] desk:flex-row
					desk:bg-[left_-9rem_top_2rem]
        '
		>
			{/* img only */}
			<img src={zx9Mobile} alt='zx9 speaker' className='w-[10rem] md:hidden' />
			<img src={zx9Tablet} alt='zx9 speaker' className='hidden w-[11rem] md:block desk:hidden' />
			<img
				src={zx9Desk}
				alt='zx9 speaker'
				className='ml-[8.75rem] mt-[8rem] hidden w-[23.5rem] desk:block'
			/>
			{/* title, text, and button to product page */}
			<div className='flex h-full flex-col items-center justify-between pt-[2.8rem] md:max-w-[22rem] md:pt-[5rem] desk:ml-[9.5rem] desk:items-start'>
				<h2
					className='
              text-center 
              text-[2.25rem] font-bold 
              uppercase leading-[2.5rem] 
              tracking-[1.29px] text-white 
              md:text-[3.5rem] md:leading-[3.625rem] md:tracking-[2px] desk:text-left
            '
				>
					ZX9
					<br />
					Speaker
				</h2>
				<p className='text-center text-[1rem] leading-[1.5rem] text-white opacity-75 md:mb-[1.25rem] desk:text-left'>
					Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
				</p>
				<button
					href='/speakers/zx9'
					className='text-bold flex h-[3rem] w-[10rem] items-center justify-center bg-black text-[1rem] uppercase leading-[1.125rem] tracking-1 text-white'
				>
					See Product
				</button>
			</div>
		</div>
	);
};

export default HomeZX9Card;

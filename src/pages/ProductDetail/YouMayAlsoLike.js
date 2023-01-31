import { Link } from "react-router-dom";

const YouMayAlsoLike = ({ others }) => {
	return (
		<div className='mt-[7.5rem] mb-[4.5rem] flex flex-col'>
			<h2 className='font-bold text-[1.5rem] md:text-[2rem] leading-[2.25rem] tracking-[0.86px] md:tracking-[1.14px] text-center uppercase text-black'>
				You May Also Like
			</h2>
			{others.map((item) => {
				const mobileYouMayAlsoLikeThumbnail = require(`../../images/shared/mobile/image-${item.slug}.jpg`);
				const tabletYouMayAlsoLikeThumbnail = require(`../../images/shared/tablet/image-${item.slug}.jpg`);
				const desktopYouMayAlsoLikeThumbnail = require(`../../images/shared/desktop/image-${item.slug}.jpg`);
				return (
					<div
						key={item.slug}
						className='mt-[2.6rem] mb-[0.75rem] flex flex-col items-center gap-[2rem]'
					>
						{/* image */}
						<img
							src={mobileYouMayAlsoLikeThumbnail}
							alt='another interesting product'
							className='md:hidden rounded-md'
						/>
						<img
							src={tabletYouMayAlsoLikeThumbnail}
							alt='another interesting product'
							className='hidden md:inline desk:hidden'
						/>
						<img
							src={desktopYouMayAlsoLikeThumbnail}
							alt='another interesting product'
							className='hidden desk:inline'
						/>
						{/* name */}
						<p className='font-bold text-[1.5rem] leading-[2rem] text-center tracking-[1.71px] uppercase text-black'>
							{item.name}
						</p>
						{/* link */}
						<Link to={`/details/${item.slug}`}>
							<button className='w-[10rem] h-[3rem] font-bold text-13 leading-[18px] tracking-[1px] uppercase text-white bg-peru hover:bg-very_light_tangelo duration-500'>
								see product
							</button>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default YouMayAlsoLike;

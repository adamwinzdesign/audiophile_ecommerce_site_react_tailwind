import { Link } from "react-router-dom";

const YouMayAlsoLike = ({ others }) => {
	return (
		<div className='mt-[7.5rem] mb-[4.5rem] flex flex-col'>
			<h2 className='text-center text-[1.5rem] font-bold uppercase leading-[2.25rem] tracking-[0.86px] text-black md:text-[2rem] md:tracking-[1.14px]'>
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
							className='rounded-md md:hidden'
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
						<p className='text-center text-[1.5rem] font-bold uppercase leading-[2rem] tracking-[1.71px] text-black'>
							{item.name}
						</p>
						{/* link */}
						<Link to={`/details/${item.slug}`}>
							<button className='h-[3rem] w-[10rem] bg-peru text-13 font-bold uppercase leading-18 tracking-1 text-white duration-500 hover:bg-very_light_tangelo'>
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

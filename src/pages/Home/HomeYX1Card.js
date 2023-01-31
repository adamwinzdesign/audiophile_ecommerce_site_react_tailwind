const HomeYX1Card = () => {
	return (
		<div className='mb-[5rem] flex flex-col items-start gap-[1.5rem] md:flex-row md:items-center md:justify-between md:pb-0'>
			<div
				className='
					h-[12.5rem] w-full rounded-lg bg-homeYX1BGMobile bg-cover
					bg-no-repeat md:h-[20rem] 
					md:w-[21.25rem] md:bg-homeYX1BGTablet desk:w-[33.75rem] 
					desk:bg-homeYX1BGDesk
				'
			/>
			<div className='h-[12.5rem] w-full rounded-lg bg-light_grey px-[1.5rem] py-[2.5rem] md:mt-0 md:w-[50%] desk:pl-[5rem]'>
				<h2 className='mb-[1.5rem] text-[1.75rem] font-bold uppercase leading-[2.375rem] tracking-[2px] text-black'>
					YX1 Earphones
				</h2>
				<button className='w-[10rem] border border-black bg-transparent py-[1rem] text-[1rem] font-bold uppercase leading-[1.125rem] tracking-1'>
					See Product
				</button>
			</div>
		</div>
	);
};

export default HomeYX1Card;

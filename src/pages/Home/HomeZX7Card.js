const HomeZX7Card = () => {
	return (
		<div
			className='
				flex h-[20rem] flex-col items-start
				justify-center gap-[2rem] rounded-lg bg-homeZX7BGMobile bg-cover 
				bg-no-repeat px-[1.5rem] md:bg-homeZX7BGTablet md:px-[4rem] desk:bg-homeZX7BGDesk desk:px-[6rem]
			'
		>
			<h2 className='text-[1.75rem] font-bold uppercase leading-[2.375rem] tracking-[2px] text-black'>
				ZX7 Speaker
			</h2>
			<button className='w-[10rem] border border-black bg-transparent py-[1rem] text-[1rem] font-bold uppercase leading-[1.125rem] tracking-1'>
				See Product
			</button>
		</div>
	);
};

export default HomeZX7Card;

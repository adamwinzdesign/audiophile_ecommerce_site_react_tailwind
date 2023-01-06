const HomeYX1Card = () => {
	return (
		<div className='pb-[5rem] md:pb-0 flex flex-col md:flex-row items-start md:items-center'>
			<div
				className='
					h-[12.5rem] md:h-[20rem] w-full md:w-[21.25rem] desk:w-[33.75rem]
					bg-cover bg-no-repeat 
					bg-homeYX1BGMobile md:bg-homeYX1BGTablet desk:bg-homeYX1BGDesk 
					rounded-lg
				'
			/>
			<div className='mt-[3.5rem] md:mt-0 mb-[1.5rem] mx-[1.625rem] md:mx-[2.75rem]'>
				<h2 className='mb-[1.5rem] font-bold text-[1.75rem] leading-[3.375rem] tracking-[2px] uppercase text-black'>
					YX1 Earphones
				</h2>
				<button className='w-[10rem] py-[1rem] font-bold text-[1rem] leading-[1.125rem] tracking-[1px] uppercase border border-black bg-transparent'>
					See Product
				</button>
			</div>
		</div>
	);
};

export default HomeYX1Card;

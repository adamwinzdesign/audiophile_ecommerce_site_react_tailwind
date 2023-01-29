const HomeYX1Card = () => {
	return (
		<div className='pb-[5rem] md:pb-0 flex flex-col md:flex-row items-start md:items-center md:justify-between border border-green-600'>
			<div
				className='
					h-[12rem] md:h-[20rem] w-full md:w-[21.25rem] desk:w-[33.75rem]
					bg-cover bg-no-repeat 
					bg-homeYX1BGMobile md:bg-homeYX1BGTablet desk:bg-homeYX1BGDesk 
					rounded-lg
				'
			/>
			<div className='w-full md:w-[50%] h-full mt-[1rem] md:mt-0 mb-[1.5rem] md:mb-0 px-[1.5rem] py-[2.5rem] desk:pl-[5rem] bg-light_grey rounded-lg border border-red-600'>
				<h2 className='h-full w-full mb-[1.5rem] font-bold text-[1.75rem] leading-[3.375rem] tracking-[2px] uppercase text-black'>
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

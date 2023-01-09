const CategoryHeader = ({ text }) => {
	return (
		<div className='w-full h-[6.25rem] md:h-[15.5rem] desk:h-[15rem] flex items-center justify-center bg-black'>
			<h1
				className='
          font-bold text-[1.75rem] md:text-[2.5rem] desk:text-[] 
          leading-[2.25rem] md:leading-[2.75rem] text-center tracking-[2px] md:tracking-[1.43px] text-white uppercase
        '
			>
				{text}
			</h1>
		</div>
	);
};

export default CategoryHeader;

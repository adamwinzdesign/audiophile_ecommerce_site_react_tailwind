const CategoryList = ({ children }) => {
	return (
		<div
			className='
        mx-[1.5rem] md:mx-[2.5rem] desk:mx-[16.25rem]
        pt-[6.75rem] md:pt-[7.5rem] desk:pt-[10rem]
        flex flex-col items-center justify-center bg-white
        border border-red-600
      '
		>
			{children}
		</div>
	);
};

export default CategoryList;

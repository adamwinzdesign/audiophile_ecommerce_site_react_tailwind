const ProductDetailInfo = ({ name, description, price }) => {
	return (
		<>
			{/* title */}
			<h1 className='max-w-[59%] font-bold text-[1.75rem] leading-[38px] md:leading-[32px] tracking-[1px] desk:tracking-[1.4px] uppercase text-black text-left'>
				{name}
			</h1>
			{/* description */}
			<p className='my-[1.5rem] font-medium text-[15px] leading-[1.5rem] text-black/50'>
				{description}
			</p>
			{/* price */}
			<p className='mb-[2rem] font-bold text-[1.125rem] leading-[25px] tracking-[1.3px] uppercase text-black'>
				$ {price}
			</p>
		</>
	);
};

export default ProductDetailInfo;

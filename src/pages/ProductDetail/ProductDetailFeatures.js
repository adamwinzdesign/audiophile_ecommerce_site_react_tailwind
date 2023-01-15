const ProductDetailFeatures = ({ features }) => {
	return (
		<>
			<h2 className='font-bold text-[1.5rem] md:text-[2rem] leading-[2.25rem] tracking-[0.86px] md:[1.14px] uppercase text-black'>
				Features
			</h2>
			<p className='font-medium text-[15px] leading-[25px] text-black/50 whitespace-pre-line align-text-bottom'>
				{features}
			</p>
		</>
	);
};

export default ProductDetailFeatures;

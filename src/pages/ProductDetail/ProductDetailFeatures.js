const ProductDetailFeatures = ({ features }) => {
	return (
		<>
			<h2 className='md:[1.14px] text-[1.5rem] font-bold uppercase leading-[2.25rem] tracking-[0.86px] text-black md:text-[2rem]'>
				Features
			</h2>
			<p className='mt-[1.5rem] whitespace-pre-line align-text-bottom text-15 font-medium leading-25 text-black/50'>
				{features}
			</p>
		</>
	);
};

export default ProductDetailFeatures;

const ProductQuantity = ({ incrementQty, decrementQty, productQty }) => {
	return (
		<div className='flex w-[7.5rem] items-center justify-center gap-[1.25rem] bg-light_grey'>
			<p
				className='cursor-pointer text-13 font-bold uppercase leading-18 tracking-[1px] text-black/25'
				onClick={decrementQty}
			>
				-
			</p>
			<p className='text-13 font-bold uppercase leading-18 tracking-[1px] text-black'>
				{productQty}
			</p>
			<p
				className='cursor-pointer text-13 font-bold uppercase leading-18 tracking-[1px] text-black/50'
				onClick={incrementQty}
			>
				+
			</p>
		</div>
	);
};

export default ProductQuantity;

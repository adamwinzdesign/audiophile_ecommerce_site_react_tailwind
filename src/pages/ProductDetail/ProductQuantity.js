const ProductQuantity = ({ incrementQty, decrementQty, productQty }) => {
	return (
		<div className='w-[7.5rem] flex items-center justify-center gap-[1.25rem] bg-light_grey'>
			<p
				className='font-bold text-13 leading-[18px] tracking-[1px] uppercase text-black/25 cursor-pointer'
				onClick={decrementQty}
			>
				-
			</p>
			<p className='font-bold text-13 leading-[18px] tracking-[1px] uppercase text-black'>
				{productQty}
			</p>
			<p
				className='font-bold text-13 leading-[18px] tracking-[1px] uppercase text-black/50 cursor-pointer'
				onClick={incrementQty}
			>
				+
			</p>
		</div>
	);
};

export default ProductQuantity;

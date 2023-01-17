const ProductDetailInTheBox = ({ includes }) => {
	return (
		<div className='mt-[5.5rem] flex flex-col'>
			<h2 className='font-bold text-[1.5rem] md:text-[2rem] leading-[2rem] md:leading-[2.25rem] tracking-[0.8px] md:tracking-[1.1px] uppercase text-black'>
				In the Box
			</h2>
			<div className='mt-[1.6rem] flex flex-col gap-[0.5rem]'>
				{includes.map((item) => (
					<div key={item.item}>
						<p className='font-bold text-[15px] leading-[25px] text-peru'>
							{item.quantity}x{" "}
							<span className='ml-[20px] md:ml-[24px] font-medium text-black/50'>{item.item}</span>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductDetailInTheBox;

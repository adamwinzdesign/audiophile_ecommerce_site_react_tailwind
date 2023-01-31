const ProductDetailInTheBox = ({ includes }) => {
	return (
		<div className='mt-[5.5rem] flex flex-col'>
			<h2 className='text-[1.5rem] font-bold uppercase leading-[2rem] tracking-[0.8px] text-black md:text-[2rem] md:leading-[2.25rem] md:tracking-[1.1px]'>
				In the Box
			</h2>
			<div className='mt-[1.6rem] flex flex-col gap-[0.5rem]'>
				{includes.map((item) => (
					<div key={item.item}>
						<p className='leading=25 text-15 font-bold text-peru'>
							{item.quantity}x{" "}
							<span className='ml-[20px] font-medium text-black/50 md:ml-[24px]'>{item.item}</span>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductDetailInTheBox;

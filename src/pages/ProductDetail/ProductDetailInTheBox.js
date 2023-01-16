const ProductDetailInTheBox = ({ includes }) => {
	return (
		<div className='flex flex-col'>
			<h2>In the Box</h2>
			<div>
				{includes.map((item) => (
					<div key={item.item}>
						<p>
							{item.quantity}x <span>{item.item}</span>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductDetailInTheBox;

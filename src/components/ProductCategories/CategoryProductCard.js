const CategoryProductCard = ({ product }) => {
	// console.log(product.product);

	const newProduct = product.product.new;
	const { name } = product.product;

	return (
		<div
			className='
        w-full h-[42.75rem] md:h-[44.25rem] desk:h-[35rem]
        flex flex-col desk:flex-row desk:even:flex-row-reverse
        border border-green-600
      '
		>
			{/* img */}
			<div>
				{/* if new product, display new product text */}
				{newProduct && <h2>new product</h2>}
				{/* product title */}
				<p>{name}</p>
				{/* product text */}
				{/* product link/dest */}
			</div>
		</div>
	);
};

export default CategoryProductCard;

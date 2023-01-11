import CategoryProductButton from "./CategoryProductButton";

const CategoryProductCard = ({ product }) => {
	const newProduct = product.product.new;
	const { name, description, slug } = product.product;

	const mobilePreviewURL = require(`../../images/product-${slug}/mobile/image-category-page-preview.jpg`);
	const tabletPreviewURL = require(`../../images/product-${slug}/tablet/image-category-page-preview.jpg`);
	const desktopPreviewURL = require(`../../images/product-${slug}/desktop/image-category-page-preview.jpg`);

	return (
		<div
			className={`
				w-full
        flex flex-col desk:flex-row desk:even:flex-row-reverse justify-between
			`}
		>
			{/* img */}
			<div>
				<img src={mobilePreviewURL} alt='category preview' className='inline md:hidden' />
				<img
					src={tabletPreviewURL}
					alt='category preview'
					className='hidden md:inline desk:hidden'
				/>
				<img src={desktopPreviewURL} alt='category preview' className='hidden desk:inline' />
			</div>
			{/* info/link section */}
			{/* min-h-[23.25rem] is correct for new product, height is less for the other cards */}
			<div
				className={`
					${newProduct ? "min-h-[23.25rem] md:min-h-[22.25rem]" : "min-h-[20.5rem]"}
					 pt-[2rem] md:pt-[3.25rem] flex flex-col items-center desk:items-start justify-between
				`}
			>
				{/* if new product, display new product text */}
				{newProduct && (
					<h2 className='text-[14px] leading-[19px] text-center desk:text-left tracking-[10px] uppercase text-peru'>
						new product
					</h2>
				)}
				{/* product title */}
				<h3 className='max-w-[80%] font-bold text-[1.75rem] md:text-[2.5rem] leading-[2.375rem] md:leading-[2.75rem] text-center desk:text-left tracking-[1px] md:tracking-[1.4px] uppercase text-black'>
					{name}
				</h3>
				{/* product text */}
				<p className='md:px-[4.375rem] desk:px-0 text-[15px] leading-[1.5rem] text-center desk:text-left text-black/50'>
					{description}
				</p>
				{/* product link/dest */}
				<CategoryProductButton />
			</div>
		</div>
	);
};

export default CategoryProductCard;

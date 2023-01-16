const ProductDetailGallery = ({ gallery, slug }) => {
	const mobileGallery1 = require(`../../images/product-${slug}/mobile/image-gallery-1.jpg`);
	const mobileGallery2 = require(`../../images/product-${slug}/mobile/image-gallery-2.jpg`);
	const mobileGallery3 = require(`../../images/product-${slug}/mobile/image-gallery-3.jpg`);

	return (
		<div className='flex flex-col'>
			{/* first two images in the gallery are paired together, the third image is always displayed larger and to the right side at tablet and desk */}
			<div>
				{/* images one and two */}
				<img src={mobileGallery1} alt='product gallery' />
				<img src={mobileGallery2} alt='product gallery' />
			</div>
			<div>
				{/* image three */}
				<img src={mobileGallery3} alt='product gallery' />
			</div>
		</div>
	);
};

export default ProductDetailGallery;

const ProductDetailGallery = ({ gallery, slug }) => {
	const mobileGallery1 = require(`../../images/product-${slug}/mobile/image-gallery-1.jpg`);
	const tabletGallery1 = require(`../../images/product-${slug}/tablet/image-gallery-1.jpg`);
	const desktopGallery1 = require(`../../images/product-${slug}/desktop/image-gallery-1.jpg`);
	const mobileGallery2 = require(`../../images/product-${slug}/mobile/image-gallery-2.jpg`);
	const tabletGallery2 = require(`../../images/product-${slug}/tablet/image-gallery-2.jpg`);
	const desktopGallery2 = require(`../../images/product-${slug}/desktop/image-gallery-2.jpg`);
	const mobileGallery3 = require(`../../images/product-${slug}/mobile/image-gallery-3.jpg`);
	const tabletGallery3 = require(`../../images/product-${slug}/tablet/image-gallery-3.jpg`);
	const desktopGallery3 = require(`../../images/product-${slug}/desktop/image-gallery-3.jpg`);

	return (
		<div className='flex flex-col md:flex-row gap-[20px]'>
			{/* first two images in the gallery are paired together, the third image is always displayed larger and to the right side at tablet and desk */}
			<div className='flex flex-col gap-[20px]'>
				{/* images one and two */}
				<img src={mobileGallery1} alt='product gallery' className='rounded-lg md:hidden' />
				<img
					src={tabletGallery1}
					alt='product gallery'
					className='rounded-lg hidden md:inline desk:hidden'
				/>
				<img
					src={desktopGallery1}
					alt='product gallery'
					className='rounded-lg hidden desk:inline'
				/>
				<img src={mobileGallery2} alt='product gallery' className='rounded-lg md:hidden' />
				<img
					src={tabletGallery2}
					alt='product gallery'
					className='rounded-lg hidden md:inline desk:hidden'
				/>
				<img
					src={desktopGallery2}
					alt='product gallery'
					className='rounded-lg hidden desk:inline'
				/>
			</div>
			<div>
				{/* image three */}
				<img src={mobileGallery3} alt='product gallery' className='rounded-lg md:hidden' />
				<img
					src={tabletGallery3}
					alt='product gallery'
					className='rounded-lg hidden md:inline desk:hidden'
				/>
				<img
					src={desktopGallery3}
					alt='product gallery'
					className='rounded-lg hidden desk:inline'
				/>
			</div>
		</div>
	);
};

export default ProductDetailGallery;

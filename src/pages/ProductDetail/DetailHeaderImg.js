const DetailHeaderImg = ({ slug }) => {
	const detailHeaderImgMobile = require(`../../images/product-${slug}/mobile/image-product.jpg`);
	const detailHeaderImgTablet = require(`../../images/product-${slug}/tablet/image-product.jpg`);
	const detailHeaderImgDesk = require(`../../images/product-${slug}/desktop/image-product.jpg`);

	return (
		<>
			<img src={detailHeaderImgMobile} alt='detail' className='inline md:hidden' />
			<img src={detailHeaderImgTablet} alt='detail' className='hidden md:inline desk:hidden' />
			<img src={detailHeaderImgDesk} alt='detail' className='hidden desk:inline' />
		</>
	);
};

export default DetailHeaderImg;

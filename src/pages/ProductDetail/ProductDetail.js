import { useParams } from "react-router-dom";
import PageFadeIn from "../../components/PageFadeIn";
import NewProduct from "../../components/shared/NewProduct";
import allProductData from "../../utils/data.json";
import HomeCategoryLinks from "../Home/HomeCategoryLinks";
import CategoryLink from "./CategoryLink";

const ProductDetail = () => {
	const params = useParams();

	const productDetailData = allProductData.filter(
		(product) => product.id === parseInt(params.productId)
	);

	const { name, category, price, description, features, includes, gallery, others, slug } =
		productDetailData[0];
	// cannot destructure productDetailData.new because 'new' is included in the data as a property name but 'new' is also a JS keyword
	const newProduct = productDetailData[0].new;

	// "slug": "xx99-mark-two-headphones",
	const detailHeaderImgMobile = require(`../../images/product-${slug}/mobile/image-product.jpg`);

	return (
		<PageFadeIn>
			<div className='w-full px-[1.5rem] md:px-[2.5rem] desk:px-[10.25rem] py-[1rem] md:py-[2rem] desk:py-[5rem] flex flex-col'>
				{/* product detail button to go back to product category */}
				<CategoryLink to={`/${category}`} />

				{/* img and info/add to cart, aka detail header */}
				<div className='flex flex-col md:flex-row'>
					{/* img */}
					<img src={detailHeaderImgMobile} alt='detail' className='md:hidden' />
					{/* info and add to cart */}
					<div>
						{newProduct && <NewProduct />}
						<h1>{name}</h1>
						{/* title */}
						{/* description */}
						{/* price */}
						{/* quantity and add to cart button */}
						<div>
							{/* quantity */}
							{/* add to cart */}
						</div>
					</div>
				</div>
				{/* features and in the box, col at mobile and tablet, row at desk */}
				<div className='flex flex-col desk:flex-row'>
					{/* features */}
					{/* in the box */}
				</div>
				{/* gallery */}
				{/* you may also like */}

				<HomeCategoryLinks />
			</div>
		</PageFadeIn>
	);
};

export default ProductDetail;

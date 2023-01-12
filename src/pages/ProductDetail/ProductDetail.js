import { useParams } from "react-router-dom";
import PageFadeIn from "../../components/PageFadeIn";
import NewProduct from "../../components/shared/NewProduct";
import allProductData from "../../utils/data.json";
import HomeCategoryLinks from "../Home/HomeCategoryLinks";
import CategoryLink from "./CategoryLink";
import DetailHeaderImg from "./DetailHeaderImg";

const ProductDetail = () => {
	const params = useParams();

	const productDetailData = allProductData.filter(
		(product) => product.id === parseInt(params.productId)
	);

	const { name, category, price, description, features, includes, gallery, others, slug } =
		productDetailData[0];
	// cannot destructure productDetailData.new because 'new' is included in the data as a property name but 'new' is also a JS keyword
	const newProduct = productDetailData[0].new;

	const detailHeaderImgMobile = require(`../../images/product-${slug}/mobile/image-product.jpg`);
	const detailHeaderImgTablet = require(`../../images/product-${slug}/tablet/image-product.jpg`);
	const detailHeaderImgDesk = require(`../../images/product-${slug}/desktop/image-product.jpg`);

	return (
		<PageFadeIn>
			<div className='w-full px-[1.5rem] md:px-[2.5rem] desk:px-[10.25rem] py-[1rem] md:py-[2rem] desk:py-[5rem] flex flex-col'>
				{/* product detail button to go back to product category */}
				<CategoryLink to={`/${category}`} />

				{/* img and info/add to cart, aka detail header */}
				<div className='flex flex-col md:flex-row'>
					<DetailHeaderImg slug={slug} />

					{/* info and add to cart */}
					<div className='border border-red-600'>
						{newProduct && <NewProduct />}
						{/* title */}
						<h1 className='font-bold text-[1.75rem] leading-[38px] md:leading-[32px] tracking-[1px] desk:tracking-[1.4px] uppercase text-black'>
							{name}
						</h1>
						{/* description */}
						<p className='my-[1.5rem] font-medium text-[15px] leading-[1.5rem] text-black/50'>
							{description}
						</p>
						{/* price */}
						<p className='mb-[2rem] font-bold text-[1.125rem] leading-[25px] tracking-[1.3px] uppercase text-black'>
							$ {price}
						</p>
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
					<h2>Features</h2>
					<p>{features}</p>
					{/* in the box */}
					<div className='flex flex-col'>
						<h2>In the Box</h2>
						<div>
							{includes.map((item) => (
								<div key={item.item}>
									{item.quantity}x <span>{item.item}</span>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* gallery */}
				<div className='flex'></div>
				{/* you may also like */}

				<HomeCategoryLinks />
			</div>
		</PageFadeIn>
	);
};

export default ProductDetail;

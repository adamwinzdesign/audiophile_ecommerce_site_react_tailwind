import { useParams } from "react-router-dom";
import PageFadeIn from "../../components/PageFadeIn";
import NewProduct from "../../components/shared/NewProduct";
import allProductData from "../../utils/data.json";
import HomeCategoryLinks from "../Home/HomeCategoryLinks";
import CategoryLink from "./CategoryLink";
import DetailHeaderImg from "./DetailHeaderImg";
import { useEffect, useState } from "react";
import { useCartStore } from "../../store/cartStore";
import ProductDetailFeatures from "./ProductDetailFeatures";
import ProductDetailInTheBox from "./ProductDetailInTheBox";
import ProductDetailGallery from "./ProductDetailGallery";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductAddToCart from "./ProductAddToCart";
import YouMayAlsoLike from "./YouMayAlsoLike";

const ProductDetail = () => {
	const { cart, addCartItem, updateCartItem, removeCartItem } = useCartStore();
	const params = useParams();

	const productDetailData = allProductData.filter((product) => product.slug === params.slug);

	const { id, name, category, price, description, features, includes, gallery, others, slug } =
		productDetailData[0];
	// cannot destructure productDetailData.new because 'new' is included in the data as a property name but 'new' is also a JS keyword
	const newProduct = productDetailData[0].new;
	const itemInCart = cart.find((item) => item.id === id);

	const [productQty, setProductQty] = useState(1);

	useEffect(() => {
		if (itemInCart) {
			setProductQty(itemInCart.productQty);
		}
	}, [itemInCart]);

	const decrementQty = () => {
		productQty > 0 ? setProductQty(productQty - 1) : setProductQty(0);
	};
	const incrementQty = () => setProductQty(productQty + 1);

	const addToCartProps = {
		incrementQty,
		decrementQty,
		productQty,
		itemInCart,
		addCartItem,
		id,
		name,
		price,
		updateCartItem,
		removeCartItem,
	};

	return (
		<PageFadeIn>
			<div className='w-full px-[1.5rem] md:px-[2.5rem] desk:px-[10.25rem] py-[1rem] md:py-[2rem] desk:py-[5rem] flex flex-col'>
				<CategoryLink to={`/${category}`} />

				{/* img and info/add to cart, aka detail header */}
				<div className='flex flex-col md:flex-row border border-red-600'>
					<DetailHeaderImg slug={slug} />
					{/* info and add to cart */}
					<div>
						{newProduct && <NewProduct />}
						<ProductDetailInfo name={name} description={description} price={price} />

						{/* quantity and add to cart button */}
						<ProductAddToCart {...addToCartProps} />
					</div>
				</div>
				{/* features and in the box, col at mobile and tablet, row at desk */}
				<div className='my-[5.5rem] flex flex-col desk:flex-row'>
					<ProductDetailFeatures features={features} />

					<ProductDetailInTheBox includes={includes} />
				</div>
				{/* gallery */}
				<ProductDetailGallery slug={slug} />

				{/* you may also like */}
				<YouMayAlsoLike others={others} />

				<HomeCategoryLinks />
			</div>
		</PageFadeIn>
	);
};

export default ProductDetail;

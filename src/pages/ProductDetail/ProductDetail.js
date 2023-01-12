import { Link, useParams } from "react-router-dom";
import PageFadeIn from "../../components/PageFadeIn";
import NewProduct from "../../components/shared/NewProduct";
import allProductData from "../../utils/data.json";
import CategoryLink from "./CategoryLink";

const ProductDetail = () => {
	const params = useParams();

	const productDetailData = allProductData.filter(
		(product) => product.id === parseInt(params.productId)
	);

	const { name, category, price, description, features, includes, gallery, others } =
		productDetailData[0];
	// cannot destructure productDetailData.new because 'new' is included in the data as a property name but 'new' is also a JS keyword
	const newProduct = productDetailData[0].new;

	return (
		<PageFadeIn>
			<div>
				{/* product detail button to go back to product category */}
				<CategoryLink to={`/${category}`} />
				{newProduct && <NewProduct />}
				<h1>{name}</h1>
			</div>
		</PageFadeIn>
	);
};

export default ProductDetail;

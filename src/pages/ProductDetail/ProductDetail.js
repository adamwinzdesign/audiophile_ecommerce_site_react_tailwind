import { useParams } from "react-router-dom";
import PageFadeIn from "../../components/PageFadeIn";
import allProductData from "../../utils/data.json";

const ProductDetail = () => {
	const params = useParams();

	const productDetailData = allProductData.filter(
		(product) => product.id === parseInt(params.productId)
	);

	const { name, price, description, features, includes, gallery, others } = productDetailData[0];
	// cannot destructure productDetailData.new because 'new' is included in the data as a property name but 'new' is also a JS keyword
	const newProduct = productDetailData[0].new;

	return (
		<PageFadeIn>
			<div>
				<h1>{name}</h1>
			</div>
		</PageFadeIn>
	);
};

export default ProductDetail;

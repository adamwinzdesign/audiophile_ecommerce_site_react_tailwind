import PageFadeIn from "../../components/PageFadeIn";
import CategoryHeader from "../../components/ProductCategories/CategoryHeader";
import CategoryList from "../../components/ProductCategories/CategoryList";
import allProductData from "../../utils/data.json";

const HeadphonesCategory = () => {
	const allHeadphonesProductData = allProductData.filter(
		(product) => product.category === "headphones"
	);

	console.log({ allHeadphonesProductData });
	return (
		<PageFadeIn>
			<CategoryHeader text='Headphones' />
			<CategoryList allHeadphonesProductData={allHeadphonesProductData} />
		</PageFadeIn>
	);
};

export default HeadphonesCategory;

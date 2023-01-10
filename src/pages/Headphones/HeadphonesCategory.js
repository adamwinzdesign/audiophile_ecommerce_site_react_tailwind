import PageFadeIn from "../../components/PageFadeIn";
import CategoryHeader from "../../components/ProductCategories/CategoryHeader";
import CategoryList from "../../components/ProductCategories/CategoryList";
import allProductData from "../../utils/data.json";

const HeadphonesCategory = () => {
	const allCategoryProductData = allProductData.filter(
		(product) => product.category === "headphones"
	);

	return (
		<PageFadeIn>
			<CategoryHeader text='Headphones' />
			<CategoryList allCategoryProductData={allCategoryProductData} />
		</PageFadeIn>
	);
};

export default HeadphonesCategory;

import PageFadeIn from "../../components/PageFadeIn";
import allProductData from "../../utils/data.json";
import CategoryHeader from "../../components/ProductCategories/CategoryHeader";
import CategoryList from "../../components/ProductCategories/CategoryList";

const EarphonesCategory = () => {
	const allCategoryProductData = allProductData.filter(
		(product) => product.category === "earphones"
	);
	return (
		<PageFadeIn>
			<CategoryHeader text='Earphones' />
			<CategoryList allCategoryProductData={allCategoryProductData} />
		</PageFadeIn>
	);
};

export default EarphonesCategory;

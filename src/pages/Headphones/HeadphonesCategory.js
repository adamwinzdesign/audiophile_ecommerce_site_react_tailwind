import PageFadeIn from "../../components/PageFadeIn";
import CategoryHeader from "../../components/ProductCategories/CategoryHeader";
import CategoryList from "../../components/ProductCategories/CategoryList";
import allProductData from "../../utils/data.json";
import HomeCategoryLinks from "../Home/HomeCategoryLinks";

const HeadphonesCategory = () => {
	const allCategoryProductData = allProductData.filter(
		(product) => product.category === "headphones"
	);

	return (
		<PageFadeIn>
			<CategoryHeader text='Headphones' />
			<CategoryList allCategoryProductData={allCategoryProductData} />
			<HomeCategoryLinks />
		</PageFadeIn>
	);
};

export default HeadphonesCategory;

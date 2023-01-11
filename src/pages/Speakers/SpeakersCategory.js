import PageFadeIn from "../../components/PageFadeIn";
import CategoryHeader from "../../components/ProductCategories/CategoryHeader";
import CategoryList from "../../components/ProductCategories/CategoryList";
import allProductData from "../../utils/data.json";
import HomeCategoryLinks from "../Home/HomeCategoryLinks";

const SpeakersCategory = () => {
	const allCategoryProductData = allProductData.filter(
		(product) => product.category === "speakers"
	);
	return (
		<PageFadeIn>
			<CategoryHeader text='Speakers' />
			<CategoryList allCategoryProductData={allCategoryProductData} />
			<HomeCategoryLinks />
		</PageFadeIn>
	);
};

export default SpeakersCategory;

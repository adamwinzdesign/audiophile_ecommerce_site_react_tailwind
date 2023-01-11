import PageFadeIn from "../../components/PageFadeIn";
import CategoryHeader from "../../components/ProductCategories/CategoryHeader";
import CategoryList from "../../components/ProductCategories/CategoryList";
import allProductData from "../../utils/data.json";

const SpeakersCategory = () => {
	const allCategoryProductData = allProductData.filter(
		(product) => product.category === "speakers"
	);
	return (
		<PageFadeIn>
			<CategoryHeader text='Speakers' />
			<CategoryList allCategoryProductData={allCategoryProductData} />
		</PageFadeIn>
	);
};

export default SpeakersCategory;

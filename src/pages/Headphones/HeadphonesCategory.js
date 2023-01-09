import PageFadeIn from "../../components/PageFadeIn";
import CategoryHeader from "../../components/ProductCategories/CategoryHeader";
import CategoryList from "../../components/ProductCategories/CategoryList";
import CategoryProductCard from "../../components/ProductCategories/CategoryProductCard";

const HeadphonesCategory = () => {
	return (
		<PageFadeIn>
			<CategoryHeader text='Headphones' />
			<CategoryList>
				<CategoryProductCard>XX99 Category Product Card</CategoryProductCard>
			</CategoryList>
		</PageFadeIn>
	);
};

export default HeadphonesCategory;

import PageFadeIn from "../../components/PageFadeIn";
import HomeCategoryLinks from "./HomeCategoryLinks";
import HomeHero from "./HomeHero";
import HomeProductCards from "./HomeProductCards";

const Home = () => {
	return (
		<PageFadeIn>
			<HomeHero />
			<HomeCategoryLinks />
			<HomeProductCards />
		</PageFadeIn>
	);
};

export default Home;

import PageFadeIn from "../../components/PageFadeIn";

const Home = () => {
	return (
		<PageFadeIn>
			<HomeHero></HomeHero>
		</PageFadeIn>
	);
};

export default Home;

const HomeHero = () => {
	return <div className='min-h-[32rem] bg-black'></div>;
};

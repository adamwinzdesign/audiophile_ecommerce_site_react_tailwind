import HomeYX1Card from "./HomeYX1Card";
import HomeZX7Card from "./HomeZX7Card";
import HomeZX9Card from "./HomeZX9Card";

const HomeProductCards = () => {
	return (
		<div className='h-[94.5rem] px-[1.5rem] md:px-[2.5rem] desk:px-[10.25rem] flex flex-col gap-[1.5rem]'>
			<HomeZX9Card />
			<HomeZX7Card />
			<HomeYX1Card />
		</div>
	);
};

export default HomeProductCards;

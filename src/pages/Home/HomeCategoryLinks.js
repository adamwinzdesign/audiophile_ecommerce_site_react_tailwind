import MobileCard from "../../components/Nav/MobileCard";
import HomeCategoryCard from "./HomeCategoryCard";
import headphones from "../../images/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../images/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../images/shared/desktop/image-category-thumbnail-earphones.png";

const HomeCategoryLinks = () => {
	return (
		<div
			className='
				h-[46.5rem] md:h-[25.75rem] desk:h-[35.75rem] 
				py-[2.5rem] md:px-[3.75rem] desk:px-[10.25rem] 
				md:mx-[2.5rem]
				flex flex-col md:flex-row justify-between md:items-center gap-[1rem] desk:gap-[2rem]
			'
		>
			<HomeCategoryCard img={headphones} title='headphones' dest='/headphones' />
			<HomeCategoryCard img={speakers} title='speakers' dest='/speakers' />
			<HomeCategoryCard img={earphones} title='earphones' dest='/earphones' />
		</div>
	);
};

export default HomeCategoryLinks;

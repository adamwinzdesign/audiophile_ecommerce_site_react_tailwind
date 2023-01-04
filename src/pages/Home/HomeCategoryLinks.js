// re-using the MobileCard element from MobileMenu.  We aren't using the entire MobileMenu component because it is a motion.div there and we don't want or need any of the animation props here

import MobileCard from "../../components/Nav/MobileCard";
import headphones from "../../images/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../images/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../images/shared/desktop/image-category-thumbnail-earphones.png";

const HomeCategoryLinks = () => {
	return (
		<div className='h-[47.75rem] py-[2.5rem] flex flex-col justify-between'>
			<MobileCard img={headphones} title='headphones' dest='/headphones' />
			<MobileCard img={speakers} title='speakers' dest='/speakers' />
			<MobileCard img={earphones} title='earphones' dest='/earphones' />
		</div>
	);
};

export default HomeCategoryLinks;

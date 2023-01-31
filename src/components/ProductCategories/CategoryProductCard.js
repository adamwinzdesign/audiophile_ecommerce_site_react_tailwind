import { Link } from "react-router-dom";
import BasicP from "../shared/Typography/BasicP";
import CategoryProductButton from "./CategoryProductButton";

const CategoryProductCard = ({ product }) => {
	const newProduct = product.product.new;
	const { name, description, slug } = product.product;

	const mobilePreviewURL = require(`../../images/product-${slug}/mobile/image-category-page-preview.jpg`);
	const tabletPreviewURL = require(`../../images/product-${slug}/tablet/image-category-page-preview.jpg`);
	const desktopPreviewURL = require(`../../images/product-${slug}/desktop/image-category-page-preview.jpg`);

	return (
		<div
			className={`
				flex w-full
        flex-col items-center justify-between desk:max-h-[35rem] desk:flex-row desk:even:flex-row-reverse
			`}
		>
			{/* img */}
			<div className='overflow-hidden rounded-lg desk:h-[35rem] desk:w-[33.75rem]'>
				<img src={mobilePreviewURL} alt='category preview' className='inline md:hidden' />
				<img
					src={tabletPreviewURL}
					alt='category preview'
					className='hidden md:inline desk:hidden'
				/>
				<img src={desktopPreviewURL} alt='category preview' className='hidden desk:inline' />
			</div>
			{/* info/link section */}
			{/* min-h-[23.25rem] is correct for new product, height is less for the other cards */}
			<div
				className={`
					desk:w-[40%]
					${
						newProduct
							? "min-h-[23.25rem] md:min-h-[22.25rem] desk:min-h-[21.5rem]"
							: "min-h-[20.5rem] md:min-h-[20rem] desk:min-h-[19.25]"
					}
					 flex flex-col items-center justify-between pt-[2rem] md:pt-[3.25rem] desk:items-start desk:pt-0
				`}
			>
				{/* if new product, display new product text */}
				{newProduct && (
					<h2 className='text-center text-14 uppercase leading-[19px] tracking-[10px] text-peru desk:text-left '>
						new product
					</h2>
				)}
				{/* product title */}
				{/* speakers title must be at least 2 lines per design file, but changing dimensions of the h3 to force text to wrap will also effect headphones and earphones titles onto 3 lines, so we check for window location and set max-w so title for speakers are also on 2 lines */}
				<h3
					className={`${
						window.location.href.includes("speakers") ? "max-w-[60%]" : "max-w-[85%]"
					}  min-h-[5.5rem] px-[2rem] text-center text-[1.75rem] font-bold uppercase leading-[2.375rem] tracking-1 text-black md:max-w-[50%] md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[1.4px] desk:max-w-[75%] desk:text-left`}
				>
					{name}
				</h3>
				{/* product text */}
				<BasicP>{description}</BasicP>
				{/* product link/dest */}
				<Link to={`/details/${slug}`}>
					<CategoryProductButton />
				</Link>
			</div>
		</div>
	);
};

export default CategoryProductCard;

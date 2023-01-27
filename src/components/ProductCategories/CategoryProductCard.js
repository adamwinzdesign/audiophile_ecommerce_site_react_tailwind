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
				w-full desk:max-h-[35rem]
        flex flex-col desk:flex-row desk:even:flex-row-reverse justify-between items-center
			`}
		>
			{/* img */}
			<div className='desk:w-[33.75rem] desk:h-[35rem] rounded-lg overflow-hidden'>
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
					 pt-[2rem] md:pt-[3.25rem] desk:pt-0 flex flex-col items-center desk:items-start justify-between
				`}
			>
				{/* if new product, display new product text */}
				{newProduct && (
					<h2 className='text-[14px] leading-[19px] text-center desk:text-left tracking-[10px] uppercase text-peru '>
						new product
					</h2>
				)}
				{/* product title */}
				{/* speakers title must be at least 2 lines per design file, but changing dimensions of the h3 to force text to wrap will also effect headphones and earphones titles onto 3 lines, so we check for window location and set max-w so title for speakers are also on 2 lines */}
				<h3
					className={`${
						window.location.href.includes("speakers") ? "max-w-[60%]" : "max-w-[85%]"
					}  md:max-w-[50%] desk:max-w-[75%] min-h-[5.5rem] px-[2rem] font-bold text-[1.75rem] md:text-[2.5rem] leading-[2.375rem] md:leading-[2.75rem] text-center desk:text-left tracking-[1px] md:tracking-[1.4px] uppercase text-black`}
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

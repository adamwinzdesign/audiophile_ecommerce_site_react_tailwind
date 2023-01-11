import CategoryProductCard from "./CategoryProductCard";

const CategoryList = ({ allCategoryProductData }) => {
	return (
		<div
			// flex-col-reverse is used here because the new products must appear at the top of the list and the products are listed in the data in reverse order, with the first/newest last
			className='
        mx-[1.5rem] md:mx-[2.5rem] desk:mx-[16.25rem]
        pt-[4rem] md:pt-[7.5rem] desk:pt-[10rem]
				pb-[7.5rem] desk:pb-[10rem]
        flex flex-col-reverse items-center justify-between gap-[7.5rem] bg-white
      '
		>
			{allCategoryProductData.map((product) => (
				<CategoryProductCard key={product.id} product={{ product }} />
			))}
		</div>
	);
};

export default CategoryList;

import MainP from "../../components/shared/Typography/MainP";

const ProductDetailInfo = ({ name, description, price }) => {
	return (
		<div className='flex flex-col gap-[1.5rem] pt-[1.5rem]'>
			{/* title */}
			<h1 className='max-w-[59%] text-left text-[1.75rem] font-bold uppercase leading-[38px] tracking-1 text-black md:leading-[32px] desk:tracking-[1.4px]'>
				{name}
			</h1>
			{/* description */}
			<MainP>{description}</MainP>
			{/* price */}
			<p className='mb-[2rem] text-[1.125rem] font-bold uppercase leading-25 tracking-[1.3px] text-black'>
				$ {price.toLocaleString()}
			</p>
		</div>
	);
};

export default ProductDetailInfo;

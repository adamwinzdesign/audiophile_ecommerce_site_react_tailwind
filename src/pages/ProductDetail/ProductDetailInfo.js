import MainP from "../../components/shared/Typography/MainP";

const ProductDetailInfo = ({ name, description, price }) => {
	return (
		<div className='pt-[1.5rem] flex flex-col gap-[1.5rem]'>
			{/* title */}
			<h1 className='max-w-[59%] font-bold text-[1.75rem] leading-[38px] md:leading-[32px] tracking-[1px] desk:tracking-[1.4px] uppercase text-black text-left'>
				{name}
			</h1>
			{/* description */}
			<MainP>{description}</MainP>
			{/* price */}
			<p className='mb-[2rem] font-bold text-[1.125rem] leading-[25px] tracking-[1.3px] uppercase text-black'>
				$ {price.toLocaleString()}
			</p>
		</div>
	);
};

export default ProductDetailInfo;

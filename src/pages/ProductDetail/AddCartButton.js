const AddCartButton = ({ itemInCart }) => {
	return (
		<button className='w-[10rem] h-[3rem] font-bold text-[13px] leading-[18px] tracking-[1px] uppercase text-white bg-peru'>
			{itemInCart ? "update cart" : "add to cart"}
		</button>
	);
};

export default AddCartButton;

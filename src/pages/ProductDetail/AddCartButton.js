const AddCartButton = ({ itemInCart }) => {
	return (
		<button className='h-[3rem] w-[10rem] bg-peru text-13 font-bold uppercase leading-18 tracking-[1px] text-white'>
			<p>{itemInCart ? "update cart" : "add to cart"}</p>
		</button>
	);
};

export default AddCartButton;

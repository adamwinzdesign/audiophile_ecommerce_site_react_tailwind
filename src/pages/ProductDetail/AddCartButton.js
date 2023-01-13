import { useCartStore } from "../../store/cartStore";

const AddCartButton = ({ id, productQty }) => {
	const { addCartItem } = useCartStore();

	// const handleClick = () => {
	// 	console.log(`clicked! id:${id}, qty: ${productQty}`);
	// 	addCartItem({ id, productQty });
	// };

	return (
		<button
			className='w-[10rem] h-[3rem] font-bold text-[13px] leading-[18px] tracking-[1px] uppercase text-white bg-peru'
			onClick={() => addCartItem({ id: id, productQty: productQty })}
		>
			add to cart
		</button>
	);
};

export default AddCartButton;

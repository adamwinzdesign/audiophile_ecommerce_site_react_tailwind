import { useCartStore } from "../../store/cartStore";
import allProductData from "../../utils/data.json";

const CartDebuggerViewer = () => {
	return (
		<div className='absolute top-0 right-[25%] flex flex-col items-center justify-center bg-red-600'>
			<CartMapper />
		</div>
	);
};

export default CartDebuggerViewer;

const CartMapper = () => {
	const { cart } = useCartStore();
	const allCartItems = Object.entries(cart);

	return (
		<div className='flex flex-col'>
			{allCartItems.map((item) => {
				const itemDetails = allProductData.filter((product) => product.id === parseInt(item[0]));
				const itemName = itemDetails[0].name;
				const itemPrice = itemDetails[0].price;
				return (
					<p key={item}>
						{itemName}: {item[1]} {itemPrice} for ${itemPrice * item[1]}
					</p>
				);
			})}
		</div>
	);
};

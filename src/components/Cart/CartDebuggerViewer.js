import { useCartStore } from "../../store/cartStore";

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
	console.log(allCartItems);

	return (
		<div className='flex flex-col'>
			{allCartItems.map((item) => (
				<p key={item}>
					{item[0]}: {item[1]}
				</p>
			))}
		</div>
	);
};

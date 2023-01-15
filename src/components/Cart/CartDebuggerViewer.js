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

	return (
		<div className='flex flex-col'>
			{cart.map((item, index) => {
				return (
					<p key={index}>
						{item.name}: {item.productQty} for {item.productQty * item.price}
					</p>
				);
			})}
		</div>
	);
};

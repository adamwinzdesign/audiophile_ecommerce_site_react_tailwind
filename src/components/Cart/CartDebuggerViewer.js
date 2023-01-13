import { useCartStore } from "../../store/cartStore";

const CartDebuggerViewer = () => {
	const { cart } = useCartStore();

	return (
		<div className='absolute top-0 right-0 flex flex-col items-center justify-center bg-red-600'>
			<p className='text-white'>cart.length: {cart.length}</p>
		</div>
	);
};

export default CartDebuggerViewer;

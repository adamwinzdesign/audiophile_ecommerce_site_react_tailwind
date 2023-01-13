import { useCartStore } from "../../store/cartStore";

const CartDebuggerViewer = () => {
	const { cart } = useCartStore();

	return (
		<div className='absolute top-0 right-[25%] flex flex-col items-center justify-center bg-red-600'>
			<p className='text-white'>Obj.keys(cart): {Object.keys(cart)}</p>
			<p className='text-white'>cart[5]: {cart[5]}</p>
			<p className='text-white'>cart[6]: {cart[6]}</p>
		</div>
	);
};

export default CartDebuggerViewer;

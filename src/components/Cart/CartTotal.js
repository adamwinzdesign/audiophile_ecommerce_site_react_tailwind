import { useCartSubTotal } from "../../hooks/useCartSubtotal";

const CartTotal = ({ cart }) => {
	const cartSubtotal = useCartSubTotal(cart);

	return (
		<div className='flex w-full justify-between'>
			<h3 className='text-15 font-medium uppercase leading-25 text-black/50'>total</h3>
			<h3 className='text-18 font-bold uppercase leading-25 text-black'>
				$ {cartSubtotal.toLocaleString()}
			</h3>
		</div>
	);
};

export default CartTotal;

import { useCartSubTotal } from "../../hooks/useCartSubtotal";

const CartTotal = ({ cart }) => {
	const cartSubtotal = useCartSubTotal(cart);

	return (
		<div className='w-full flex justify-between'>
			<h3 className='font-medium text-xs leading-25 text-black/50 uppercase'>total</h3>
			<h3 className='font-bold text-[18px] leading-25 text-black uppercase'>
				$ {cartSubtotal.toLocaleString()}
			</h3>
		</div>
	);
};

export default CartTotal;

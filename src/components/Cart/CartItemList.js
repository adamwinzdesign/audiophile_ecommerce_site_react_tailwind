import { useCartStore } from "../../store/cartStore";
import CartProductQuantity from "./CartProductQuantity";

const CartItemList = () => {
	const { cart, updateCartItem, removeCartItem } = useCartStore();

	return (
		<div className='w-full flex flex-col'>
			{cart.map((item) => (
				<div key={item.name} className='flex items-center justify-between'>
					{/* product photo */}
					{/* product name and price (each) */}
					<div className='h-full flex flex-col items-between'>
						<h3 className='font-bold text-[15px] leading-[25px] text-black uppercase'>
							{item.nameForCart}
						</h3>
						<p className='font-bold text-[14px] leading-[25px] text-black/50'>$ {item.price}</p>
					</div>
					{/* decrement button, current quantity, and increment button */}
					<CartProductQuantity
						id={item.id}
						productQty={item.productQty}
						updateCartItem={updateCartItem}
						removeCartItem={removeCartItem}
					/>
				</div>
			))}
		</div>
	);
};

export default CartItemList;

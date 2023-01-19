import { useCartStore } from "../../store/cartStore";
import CartProductQuantity from "./CartProductQuantity";

const CartItemList = () => {
	const { cart, updateCartItem, removeCartItem } = useCartStore();

	return (
		<div className='w-full flex flex-col'>
			{cart.map((item) => (
				<div key={item.name} className='flex'>
					{/* product photo */}
					{/* product name and price (each) */}
					<div className='flex flex-col'>
						<h3>{item.name}</h3>
						<p>$ {item.price}</p>
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

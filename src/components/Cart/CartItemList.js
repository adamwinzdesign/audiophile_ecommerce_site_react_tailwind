import { useCartStore } from "../../store/cartStore";
import CartProductQuantity from "./CartProductQuantity";

const CartItemList = () => {
	const { cart, updateCartItem, removeCartItem } = useCartStore();

	return (
		<div className='flex w-full flex-col gap-[1.5rem] py-[2rem]'>
			{cart.map((item) => {
				const cartItemThumbnail = require(`../../images/product-${item.slug}/mobile/image-product.jpg`);
				return (
					<div key={item.name} className='flex items-center justify-start'>
						{/* product photo */}
						<div className='z-20'>
							<img
								src={cartItemThumbnail}
								alt={item.name}
								className='h-[4rem] w-[4rem] rounded-lg'
							/>
						</div>
						{/* product name and price (each) */}
						<div className='items-between mr-auto ml-[1rem] flex h-full flex-col'>
							<h3 className='text-15 font-bold uppercase leading-25 text-black'>
								{item.nameForCart}
							</h3>
							<p className='text-14 font-bold leading-25 text-black/50'>
								$ {item.price.toLocaleString()}
							</p>
						</div>
						{/* decrement button, current quantity, and increment button */}
						<CartProductQuantity
							id={item.id}
							productQty={item.productQty}
							updateCartItem={updateCartItem}
							removeCartItem={removeCartItem}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default CartItemList;

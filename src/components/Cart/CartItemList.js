import { useCartStore } from "../../store/cartStore";
import CartProductQuantity from "./CartProductQuantity";

const CartItemList = () => {
	const { cart, updateCartItem, removeCartItem } = useCartStore();

	return (
		<div className='w-full py-[2rem] flex flex-col gap-[1.5rem]'>
			{cart.map((item) => {
				const cartItemThumbnail = require(`../../images/product-${item.slug}/mobile/image-product.jpg`);
				return (
					<div key={item.name} className='flex items-center justify-start'>
						{/* product photo */}
						<div className='z-20'>
							<img
								src={cartItemThumbnail}
								alt={item.name}
								className='w-[4rem] h-[4rem] rounded-lg'
							/>
						</div>
						{/* product name and price (each) */}
						<div className='h-full mr-auto ml-[1rem] flex flex-col items-between'>
							<h3 className='font-bold text-[15px] leading-[25px] text-black uppercase'>
								{item.nameForCart}
							</h3>
							<p className='font-bold text-[14px] leading-[25px] text-black/50'>
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

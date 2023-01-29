import { useCartSubTotal } from "../../hooks/useCartSubtotal";
import { useCartStore } from "../../store/cartStore";

const CheckoutItemLIst = () => {
	const { cart } = useCartStore();

	const cartSubtotal = useCartSubTotal(cart);

	const shipping = 50;
	const vat = Math.trunc(cartSubtotal * 0.2).toLocaleString();
	const grandTotal = (cartSubtotal + shipping).toLocaleString();

	return (
		<div className='w-full flex flex-col gap-[1.5rem]'>
			{cart.map((item) => {
				const cartItemThumbnail = require(`../../images/product-${item.slug}/mobile/image-product.jpg`);
				return (
					<div key={item.name} className='flex items-center justify-between'>
						{/* product photo */}
						<div>
							<img
								src={cartItemThumbnail}
								alt={item.name}
								className='w-[4rem] h-[4rem] rounded-lg'
							/>
						</div>
						{/* product name and price (each) */}
						<div className='h-full ml-[1rem] flex flex-col '>
							<h3 className='font-bold text-[15px] leading-[25px] text-black uppercase'>
								{item.nameForCart}
							</h3>
							<p className='font-bold text-[14px] leading-[25px] text-black/50'>
								$ {item.price.toLocaleString()}
							</p>
						</div>
						{/* quantity indciators */}
						<div className='ml-auto'>
							<p className='font-bold text-[15px] leading-[25px] text-black/50'>
								x{item.productQty}
							</p>
						</div>
					</div>
				);
			})}

			{/* total, shipping, vat, grand total */}
			<div className='flex flex-col'>
				<div className='flex items-center justify-between'>
					<h3 className='font-medium text-[15px] leading-[25px] text-black/50 uppercase'>Total</h3>
					<h3 className='font-bold text-[18px] leading-[25px] uppercase text-black'>
						$ {cartSubtotal.toLocaleString()}
					</h3>
				</div>
				<div className='flex items-center justify-between'>
					<h3 className='font-medium text-[15px] leading-[25px] text-black/50 uppercase'>
						Shipping
					</h3>
					<h3 className='font-bold text-[18px] leading-[25px] uppercase text-black'>
						$ {shipping}
					</h3>
				</div>
				<div className='flex items-center justify-between'>
					<h3 className='font-medium text-[15px] leading-[25px] text-black/50 uppercase'>
						VAT (Included)
					</h3>
					<h3 className='font-bold text-[18px] leading-[25px] uppercase text-black'>$ {vat}</h3>
				</div>
				<div className='flex items-center justify-between'>
					<h3 className='font-medium text-[15px] leading-[25px] text-black/50 uppercase'>
						Grand Total
					</h3>
					<h3 className='font-bold text-[18px] leading-[25px] uppercase text-black'>
						$ {grandTotal}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default CheckoutItemLIst;

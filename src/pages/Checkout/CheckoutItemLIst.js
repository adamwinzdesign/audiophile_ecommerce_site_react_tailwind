import { useCartSubTotal } from "../../hooks/useCartSubtotal";
import { useCartStore } from "../../store/cartStore";

const CheckoutItemLIst = () => {
	const { cart } = useCartStore();

	const cartSubtotal = useCartSubTotal(cart);

	const shipping = 50;
	const vat = Math.trunc(cartSubtotal * 0.2).toLocaleString();
	const grandTotal = (cartSubtotal + shipping).toLocaleString();

	return (
		<div className='flex w-full flex-col gap-[1.5rem]'>
			{cart.map((item) => {
				const cartItemThumbnail = require(`../../images/product-${item.slug}/mobile/image-product.jpg`);
				return (
					<div key={item.name} className='flex items-center justify-between'>
						{/* product photo */}
						<div>
							<img
								src={cartItemThumbnail}
								alt={item.name}
								className='h-[4rem] w-[4rem] rounded-lg'
							/>
						</div>
						{/* product name and price (each) */}
						<div className='ml-[1rem] flex h-full flex-col '>
							<h3 className='text-15 font-bold uppercase leading-25 text-black'>
								{item.nameForCart}
							</h3>
							<p className='text-14 font-bold leading-25 text-black/50'>
								$ {item.price.toLocaleString()}
							</p>
						</div>
						{/* quantity indciators */}
						<div className='ml-auto'>
							<p className='text-15 font-bold leading-25 text-black/50'>x{item.productQty}</p>
						</div>
					</div>
				);
			})}

			{/* total, shipping, vat, grand total */}
			<div className='flex flex-col gap-[0.5rem] pt-[0.5rem]'>
				<div className='flex items-center justify-between'>
					<h3 className='text-15 font-medium uppercase leading-25 text-black/50'>Total</h3>
					<h3 className='text-18 font-bold uppercase leading-25 text-black'>
						$ {cartSubtotal.toLocaleString()}
					</h3>
				</div>
				<div className='flex items-center justify-between'>
					<h3 className='text-15 font-medium uppercase leading-25 text-black/50'>Shipping</h3>
					<h3 className='text-18 font-bold uppercase leading-25 text-black'>$ {shipping}</h3>
				</div>
				<div className='flex items-center justify-between'>
					<h3 className='text-15 font-medium uppercase leading-25 text-black/50'>VAT (Included)</h3>
					<h3 className='text-18 font-bold uppercase leading-25 text-black'>$ {vat}</h3>
				</div>
				<div className='mt-[1rem] flex items-center justify-between'>
					<h3 className='text-15 font-medium uppercase leading-25 text-black/50'>Grand Total</h3>
					<h3 className='text-18 font-bold uppercase leading-25 text-peru'>$ {grandTotal}</h3>
				</div>
			</div>
		</div>
	);
};

export default CheckoutItemLIst;

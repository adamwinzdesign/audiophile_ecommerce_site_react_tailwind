import AddCartButton from "./AddCartButton";

const ProductAddToCart = ({
	incrementQty,
	decrementQty,
	productQty,
	itemInCart,
	addCartItem,
	id,
	name,
	price,
	updateCartItem,
}) => {
	return (
		<div className='w-full flex justify-between'>
			{/* quantity */}
			<div className='w-[50%] flex items-center justify-center gap-[1.25rem]'>
				<p
					className='font-bold text-[13px] leading-[18px] tracking-[1px] uppercase text-black/25 cursor-pointer'
					onClick={decrementQty}
				>
					-
				</p>
				<p className='font-bold text-[13px] leading-[18px] tracking-[1px] uppercase text-black'>
					{productQty}
				</p>
				<p
					className='font-bold text-[13px] leading-[18px] tracking-[1px] uppercase text-black/50 cursor-pointer'
					onClick={incrementQty}
				>
					+
				</p>
			</div>
			{/* add to cart */}
			{!itemInCart && (
				<div
					onClick={() => addCartItem({ id: id, name: name, productQty: productQty, price: price })}
				>
					<AddCartButton itemInCart={itemInCart} />
				</div>
			)}

			{/* update cart */}
			{itemInCart && (
				<div onClick={() => updateCartItem({ id: id, productQty: productQty })}>
					<AddCartButton itemInCart={itemInCart} />
				</div>
			)}
		</div>
	);
};

export default ProductAddToCart;

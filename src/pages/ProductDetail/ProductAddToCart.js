import AddCartButton from "./AddCartButton";
import ProductQuantity from "./ProductQuantity";

const ProductAddToCart = ({
	incrementQty,
	decrementQty,
	productQty,
	itemInCart,
	addCartItem,
	id,
	name,
	price,
	nameForCart,
	slug,
	updateCartItem,
	removeCartItem,
}) => {
	return (
		<div className='w-full h-[3rem] flex gap-[1rem]'>
			<ProductQuantity
				productQty={productQty}
				incrementQty={incrementQty}
				decrementQty={decrementQty}
			/>

			{/* add to cart */}
			{!itemInCart && productQty !== 0 && (
				<div
					onClick={() =>
						// addCartItem({ id: id, name: name, productQty: productQty, price: price, nameForCart })
						addCartItem({ id, name, productQty, price, nameForCart, slug })
					}
				>
					<AddCartButton itemInCart={itemInCart} />
				</div>
			)}

			{/* update cart */}
			{itemInCart && productQty > 0 && (
				<div onClick={() => updateCartItem({ id: id, productQty: productQty })}>
					<AddCartButton itemInCart={itemInCart} />
				</div>
			)}

			{itemInCart && productQty === 0 && (
				<div onClick={() => removeCartItem({ id: id })}>
					<AddCartButton itemInCart={itemInCart} />
				</div>
			)}
		</div>
	);
};

export default ProductAddToCart;

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
	updateCartItem,
	removeCartItem,
}) => {
	return (
		<div className='w-full flex gap-[1rem]'>
			{/* quantity */}
			<ProductQuantity
				productQty={productQty}
				incrementQty={incrementQty}
				decrementQty={decrementQty}
			/>

			{/* add to cart */}
			{!itemInCart && (
				<div
					onClick={() => addCartItem({ id: id, name: name, productQty: productQty, price: price })}
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

			{/* remove item from cart debug */}
			{itemInCart && productQty === 0 && (
				<div onClick={() => removeCartItem({ id: id })}>
					<AddCartButton itemInCart={itemInCart} />
				</div>
			)}
		</div>
	);
};

export default ProductAddToCart;

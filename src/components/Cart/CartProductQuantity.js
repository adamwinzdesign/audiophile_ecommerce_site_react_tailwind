import React from "react";

const CartProductQuantity = ({ id, productQty, updateCartItem }) => {
	const decrementQty = () => {
		productQty > 0
			? updateCartItem({ id: id, productQty: productQty - 1 })
			: updateCartItem({ id: id, productQty: 0 });
	};

	const incrementQty = () => {
		updateCartItem({ id: id, productQty: productQty + 1 });
	};

	return (
		<div className='flex items-center justify-center bg-light_grey'>
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
	);
};

export default CartProductQuantity;

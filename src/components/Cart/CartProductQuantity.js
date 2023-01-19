import React from "react";

const CartProductQuantity = ({ id, productQty, updateCartItem, removeCartItem }) => {
	const decrementQty = () => {
		productQty > 0
			? updateCartItem({ id: id, productQty: productQty - 1 })
			: removeCartItem({ id: id });
	};

	const incrementQty = () => {
		updateCartItem({ id: id, productQty: productQty + 1 });
	};

	return (
		<div className='h-[3rem] flex items-center justify-center bg-light_grey'>
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

import { useFormik } from "formik";
import { useState } from "react";
import CheckoutInput from "./CheckoutInput";
import {
	billingInputData,
	shippingInputData,
	paymentInputData,
	initialValues,
	validationSchema,
} from "./checkoutInputData";
import PageFadeIn from "../../components/PageFadeIn";
import cashIcon from "../../images/checkout/icon-cash-on-delivery.svg";

const CheckoutForm = () => {
	const [paymentMethod, setPaymentMethod] = useState("eMoney");
	// use hasSubmitted to display ThankYou and modal, site should not navigate out of checkout per design file
	// const [hasSubmitted, setHasSubmitted] = useState(false);

	const formik = useFormik({
		initialValues,
		validationSchema,
	});

	return (
		<div className='w-full p-[1.5rem] flex flex-col items-start bg-white rounded-lg'>
			<h1 className='font-bold text-[1.75rem] leading-[38px] tracking-[1px] uppercase font-black'>
				Checkout
			</h1>
			<form onSubmit={formik.handleSubmit} className='w-full'>
				<h2 className='font-bold text-[13px] leading-[25px] tracking-[0.9px] uppercase text-peru'>
					Billing Details
				</h2>

				<div className='flex flex-col'>
					{billingInputData.map((input) => (
						<CheckoutInput
							key={input.inputName}
							formik={formik}
							inputName={input.inputName}
							inputType={input.inputType}
							inputPlaceholder={input.inputPlaceholder}
							label={input.label}
						/>
					))}
				</div>

				<h2 className='font-bold text-[13px] leading-[25px] tracking-[0.9px] uppercase text-peru'>
					Shipping Info
				</h2>

				<div className='flex flex-col'>
					{shippingInputData.map((input) => (
						<CheckoutInput
							key={input.inputName}
							formik={formik}
							inputName={input.inputName}
							inputType={input.inputType}
							inputPlaceholder={input.inputPlaceholder}
							label={input.label}
						/>
					))}
				</div>

				<h2 className='font-bold text-[13px] leading-[25px] tracking-[0.9px] uppercase text-peru'>
					Payment Details
				</h2>

				{/* payment method selector */}
				<div className='flex flex-col'>
					<h2 className='font-bold text-[12px] leading-[16px] tracking-[-0.2px] text-black'>
						Payment Method
					</h2>
					<button
						onClick={() => setPaymentMethod("eMoney")}
						type='button'
						className={`w-full px-[1rem] py-[18px] font-bold text-[14px] leading-[19px] tracking-[-0.25px] text-black flex items-center justify-start gap-[1rem] rounded-lg border ${
							paymentMethod === "eMoney" ? "border-peru" : "border-border_grey"
						}`}
					>
						{/* indicator */}
						<div className='w-[20px] h-[20px] flex items-center justify-center border border-border_grey rounded-full'>
							{/* center of indicator */}
							{paymentMethod === "eMoney" && (
								<div className='w-[10px] h-[10px] bg-peru rounded-full' />
							)}
						</div>
						<p>e-Money</p>
					</button>

					<button
						onClick={() => setPaymentMethod("cash")}
						type='button'
						className={`w-full px-[1rem] py-[18px] font-bold text-[14px] leading-[19px] tracking-[-0.25px] text-black flex items-center justify-start gap-[1rem] rounded-lg border ${
							paymentMethod === "cash" ? "border-peru" : "border-border_grey"
						}`}
					>
						{/* indicator */}
						<div className='w-[20px] h-[20px] flex items-center justify-center border border-border_grey rounded-full'>
							{/* center of indicator */}
							{paymentMethod === "cash" && (
								<div className='w-[10px] h-[10px] bg-peru rounded-full' />
							)}
						</div>
						<p>Cash on Delivery</p>
					</button>
				</div>

				{paymentMethod === "eMoney" && (
					<PageFadeIn>
						<div className='flex flex-col'>
							{paymentInputData.map((input) => (
								<CheckoutInput
									key={input.inputName}
									formik={formik}
									inputName={input.inputName}
									inputType={input.inputType}
									inputPlaceholder={input.inputPlaceholder}
									label={input.label}
								/>
							))}
						</div>
					</PageFadeIn>
				)}

				{paymentMethod === "cash" && (
					<PageFadeIn>
						<div className='flex flex-col'>
							{/* cash icon */}
							<img src={cashIcon} alt='cash' className='h-[48px] w-[48px]' />
							<p className='font-medium text-[15px] leading-[25px] text-black/50 '>
								The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
								arrives at your residence. Just make sure your address is correct so that your order
								will not be cancelled.
							</p>
						</div>
					</PageFadeIn>
				)}
			</form>
		</div>
	);
};

export default CheckoutForm;
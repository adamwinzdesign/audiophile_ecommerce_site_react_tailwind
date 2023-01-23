import { useFormik } from "formik";
import { useState } from "react";
import CheckoutInput from "./CheckoutInput";
import {
	billingInputData,
	shippingInputData,
	initialValues,
	validationSchema,
} from "./checkoutInputData";
import PaymentSelector from "./PaymentSelector";

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
				<PaymentSelector
					paymentMethod={paymentMethod}
					setPaymentMethod={setPaymentMethod}
					formik={formik}
				/>
			</form>
		</div>
	);
};

export default CheckoutForm;

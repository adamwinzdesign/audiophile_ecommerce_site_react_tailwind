import { useFormik } from "formik";
// import { useState } from "react";
import * as Yup from "yup";
import CheckoutInput from "./CheckoutInput";
import { billingInputData, shippingInputData, initialValues } from "./checkoutInputData";

const CheckoutForm = () => {
	// const [paymentMethod, setPaymentMethod] = useState("eMoney");
	// use hasSubmitted to display ThankYou and modal, site should not navigate out of checkout per design file
	// const [hasSubmitted, setHasSubmitted] = useState(false);

	const formik = useFormik({
		initialValues,

		validationSchema: Yup.object({
			name: Yup.string()
				.max(40, "Name must be 40 characters or less")
				.required("Name is required")
				.matches(
					/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
					"Name can only contain letters."
				),
			email: Yup.string().email("Wrong format").required("Email is required"),
			phone: Yup.string()
				.matches(
					/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
					"Wrong format"
				)
				.required("Phone number is required"),
			address: Yup.string().required("Address is required"),
			zip: Yup.string()
				.min(5, "Zip must be between 5 and 12 digits")
				.max(12, "Zip must be between 5 and 12 digits")
				.required("Zip is required"),
			city: Yup.string().required("City is required"),
			country: Yup.string().required("Country is required"),
			// paymentMethod: Yup.string().required("Payment method is required"),
			// eMoneyNumber: Yup.number()
			// 	.min(9, "e-Money Number must be 9 digits")
			// 	.max(9, "e-Money Number must be 9 digits"),
			// eMoneyPIN: Yup.number()
			// 	.min(4, "e-Money PIN must be 4 digits")
			// 	.max(4, "e-Money PIN must be 4 digits"),
		}),
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
			</form>
		</div>
	);
};

export default CheckoutForm;

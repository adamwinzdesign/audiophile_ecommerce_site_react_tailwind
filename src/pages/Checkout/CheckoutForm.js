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
import CheckoutH1 from "./CheckoutH1";
import CheckoutH2 from "./CheckoutH2";

const CheckoutForm = () => {
	const [paymentMethod, setPaymentMethod] = useState("eMoney");

	const formik = useFormik({
		initialValues,
		validationSchema,
	});

	return (
		<div className='w-full p-[1.5rem] flex flex-col items-start bg-white rounded-lg'>
			<CheckoutH1>Checkout</CheckoutH1>
			<form onSubmit={formik.handleSubmit} className='w-full pt-[1.8rem]'>
				<CheckoutH2>Billing Details</CheckoutH2>
				<div className='pt-[1rem] mb-[1.9rem] flex flex-col gap-[1.45rem]'>
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
				<div className='flex flex-col'>
					<CheckoutH2>Shipping Info</CheckoutH2>
					<div className='pt-[1rem] mb-[1.9rem] flex flex-col gap-[1.45rem]'>
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

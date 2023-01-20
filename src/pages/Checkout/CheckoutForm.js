import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const CheckoutForm = () => {
	const [paymentMethod, setPaymentMethod] = useState("eMoney");
	// use hasSubmitted to display ThankYou and modal, site should not navigate out of checkout per design file
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const phoneRegExp =
		"/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/";

	const formik = useFormik({
		initialValues: {
			name: "",
			// email: "",
			// phoneNumber: "",
			// address: "",
			// zip: "",
			// city: "",
			// country: "",
			// paymentMethod: "",
			// eMoneyNumber: "",
			// eMoneyPIN: "",
		},

		validationSchema: Yup.object({
			name: Yup.string().max(40, "Name must be 40 characters or less").required("Name is required"),
			// email: Yup.string().email("Wrong format").required("Email is required"),
			// phoneNumber: Yup.string()
			// 	.matches(phoneRegExp, "Wrong format")
			// 	.required("Phone number is required"),
			// address: Yup.string().required("Address is required"),
			// zip: Yup.string()
			// 	.min(5, "Zip must be between 5 and 12 digits")
			// 	.max(12, "Zip must be between 5 and 12 digits")
			// 	.required("Zip is required"),
			// city: Yup.string().required("City is required"),
			// country: Yup.string().required("Country is required"),
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
		<div className='p-[1.5rem] flex flex-col items-start bg-white rounded-lg'>
			<h1 className='font-bold text-[1.75rem] leading-[38px] tracking-[1px] uppercase font-black'>
				Checkout
			</h1>
			<form onSubmit={formik.handleSubmit}>
				<h2 className='font-bold text-[13px] leading-[25px] tracking-[0.9px] uppercase text-peru'>
					Billing Details
				</h2>

				<div className='flex flex-col'>
					<label htmlFor='name' className='w-full flex justify-between'>
						<h2 className='font-bold text-[12px] leading-[16px] tracking-[-0.2px] text-black'>
							Name
						</h2>
						<p>Errors</p>
					</label>
					<input
						className={`h-[3.5rem]`}
						type='text'
						name='name'
						placeholder='Insert your name'
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>

				<h2 className='font-bold text-[13px] leading-[25px] tracking-[0.9px] uppercase text-peru'>
					Shipping Info
				</h2>
			</form>
		</div>
	);
};

export default CheckoutForm;

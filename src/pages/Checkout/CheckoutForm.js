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
			name: Yup.string()
				.max(40, "Name must be 40 characters or less")
				.required("Name is required")
				.matches(
					/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
					"Name can only contain letters."
				),
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
		<div className='w-full p-[1.5rem] flex flex-col items-start bg-white rounded-lg'>
			<h1 className='font-bold text-[1.75rem] leading-[38px] tracking-[1px] uppercase font-black'>
				Checkout
			</h1>
			<form onSubmit={formik.handleSubmit} className='w-full'>
				<h2 className='font-bold text-[13px] leading-[25px] tracking-[0.9px] uppercase text-peru'>
					Billing Details
				</h2>

				<div className='flex flex-col'>
					<label htmlFor='name' className='w-full flex justify-between'>
						<h2
							className={`font-bold text-[12px] leading-[16px] tracking-[-0.2px]
              ${formik.touched.name && formik.errors.name ? "text-error_red" : "text-black"}
            `}
						>
							Name
						</h2>
						{formik.touched.name && formik.errors.name && (
							<p className='font-med text-[12px] leading-[16px] tracking-[0.2px] text-error_red'>
								{formik.errors.name}
							</p>
						)}
					</label>
					{/* autofill:opacity-40 and autofill:shadow-[rgb] are necessary to override chrome styling after autocomplete */}
					<input
						// className={`
						//   h-[3.5rem] px-[1.5rem] py-[1.25rem]
						//   font-bold text-[14px] leading-[19px] -tracking-[0.25px] text-black/40
						//   autofill:opacity-40
						//   autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]
						//   rounded-lg
						//   autofill:focus:border-green-600
						//   autofill:active:border-yellow-600
						//   ${
						// 		formik.touched.name && formik.errors.name
						// 			? "border-[2px] border-error_red active:border-error_red"
						// 			: "border-border_grey"
						// 	}
						// `}
						className={`
              h-[3.5rem] px-[1.5rem] py-[1.25rem] font-bold text-[14px] leading-[19px] -tracking-[0.25px] text-black/40 focus:text-black caret-peru rounded-lg border
              autofill:opacity-40
						  autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]
              ${
								formik.touched.name && formik.errors.name
									? "border-[2px] border-error_red focus-visible:outline-error_red"
									: "border-border_grey focus-visible:outline-peru "
							}
            `}
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

// active form:
// border is peru

// touched and error form:
// label, error, and border are red
// text is still black

// normal form:
// border is

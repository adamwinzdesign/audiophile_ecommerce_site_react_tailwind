import CheckoutLabel from "./CheckoutLabel";

const CheckoutInput = ({ formik, inputName, inputType, inputPlaceholder, label }) => {
	return (
		<div className='flex flex-col'>
			<CheckoutLabel inputName={inputName}>
				<h2
					className={`text-12 font-bold leading-[16px] tracking-[-0.2px]
					    ${formik.touched[inputName] && formik.errors[inputName] ? "text-error_red" : "text-black"}
					  `}
				>
					{label}
				</h2>

				{formik.touched[inputName] && formik.errors[inputName] && (
					<p className='font-med text-12 leading-[16px] tracking-[0.2px] text-error_red'>
						{formik.errors[inputName]}
					</p>
				)}
			</CheckoutLabel>
			{/* autofill:opacity-40 and autofill:shadow-[rgb] are necessary to override chrome styling after autocomplete */}
			<input
				className={`
          h-[3.5rem] rounded-lg border px-[1.5rem] py-[1.25rem] text-14 font-bold leading-[19px] -tracking-[0.25px] text-black/40 caret-peru autofill:opacity-40
          autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] focus:text-black
          ${
						formik.touched[inputName] && formik.errors[inputName]
							? "border-[2px] border-error_red focus-visible:outline-error_red"
							: "border-border_grey focus-visible:outline-peru "
					}
        `}
				type={inputType}
				name={inputName}
				placeholder={inputPlaceholder}
				value={formik.values.inputName}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
		</div>
	);
};

export default CheckoutInput;

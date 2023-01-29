import CheckoutLabel from "./CheckoutLabel";

const CheckoutInput = ({ formik, inputName, inputType, inputPlaceholder, label }) => {
	return (
		<div className='flex flex-col'>
			<CheckoutLabel inputName={inputName}>
				<h2
					className={`font-bold text-[12px] leading-[16px] tracking-[-0.2px]
					    ${formik.touched[inputName] && formik.errors[inputName] ? "text-error_red" : "text-black"}
					  `}
				>
					{label}
				</h2>

				{formik.touched[inputName] && formik.errors[inputName] && (
					<p className='font-med text-[12px] leading-[16px] tracking-[0.2px] text-error_red'>
						{formik.errors[inputName]}
					</p>
				)}
			</CheckoutLabel>
			{/* autofill:opacity-40 and autofill:shadow-[rgb] are necessary to override chrome styling after autocomplete */}
			<input
				className={`
          h-[3.5rem] px-[1.5rem] py-[1.25rem] font-bold text-[14px] leading-[19px] -tracking-[0.25px] text-black/40 focus:text-black caret-peru rounded-lg border
          autofill:opacity-40 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]
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

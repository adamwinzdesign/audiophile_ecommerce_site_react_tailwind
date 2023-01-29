const CheckoutLabel = ({ inputName, children }) => {
	return (
		<label htmlFor={inputName} className='w-full mb-[0.6rem] flex justify-between'>
			{children}
		</label>
	);
};

export default CheckoutLabel;

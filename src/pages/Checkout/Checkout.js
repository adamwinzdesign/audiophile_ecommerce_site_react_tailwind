import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
	return (
		<div className='w-full px-[1.5rem] md:px-[2.5rem] desk:px-[10.25rem] py-[1rem] md:py-[2rem] desk:py-[5rem] flex flex-col bg-bg_grey'>
			<Link
				to='/'
				className='w-[3.75rem] mb-[1.5rem] w-full font-medium text-[15px] leading-[25px] text-black/50'
			>
				Go Back
			</Link>
			<CheckoutForm />
		</div>
	);
};

export default Checkout;

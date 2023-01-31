import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";

const Checkout = () => {
	return (
		<div className='relative mb-[2rem] flex w-full flex-col bg-bg_grey px-[1.5rem] py-[1rem] md:px-[2.5rem] md:py-[2rem] desk:px-[10.25rem] desk:py-[5rem]'>
			<Link
				to='/'
				className='mb-[1.5rem] w-[3.75rem] w-full text-15 font-medium leading-25 text-black/50'
			>
				Go Back
			</Link>
			<CheckoutForm />
			<CheckoutSummary />
		</div>
	);
};

export default Checkout;

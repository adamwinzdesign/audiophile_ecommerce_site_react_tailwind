import PageFadeIn from "../../components/PageFadeIn";
import { paymentInputData } from "./checkoutInputData";
import CheckoutInput from "./CheckoutInput";
import cashIcon from "../../images/checkout/icon-cash-on-delivery.svg";
import CheckoutH2 from "./CheckoutH2";

const PaymentSelector = ({ paymentMethod, setPaymentMethod, formik }) => {
	return (
		<>
			<CheckoutH2>Payment Details</CheckoutH2>

			{/* payment method selector */}
			<div className='pt-[1.1rem] flex flex-col gap-[1rem]'>
				<h2 className='font-bold text-[12px] leading-[16px] tracking-[-0.2px] text-black'>
					Payment Method
				</h2>
				<button
					onClick={() => setPaymentMethod("eMoney")}
					type='button'
					className={`w-full px-[1rem] py-[18px] font-bold text-[14px] leading-[19px] tracking-[-0.25px] text-black flex items-center justify-start gap-[1rem] rounded-lg border ${
						paymentMethod === "eMoney" ? "border-peru" : "border-border_grey"
					}`}
				>
					{/* indicator */}
					<div className='w-[20px] h-[20px] flex items-center justify-center border border-border_grey rounded-full'>
						{/* center of indicator */}
						{paymentMethod === "eMoney" && (
							<div className='w-[10px] h-[10px] bg-peru rounded-full' />
						)}
					</div>
					<p>e-Money</p>
				</button>

				<button
					onClick={() => setPaymentMethod("cash")}
					type='button'
					className={`w-full px-[1rem] py-[18px] font-bold text-[14px] leading-[19px] tracking-[-0.25px] text-black flex items-center justify-start gap-[1rem] rounded-lg border ${
						paymentMethod === "cash" ? "border-peru" : "border-border_grey"
					}`}
				>
					{/* indicator */}
					<div className='w-[20px] h-[20px] flex items-center justify-center border border-border_grey rounded-full'>
						{/* center of indicator */}
						{paymentMethod === "cash" && <div className='w-[10px] h-[10px] bg-peru rounded-full' />}
					</div>
					<p>Cash on Delivery</p>
				</button>
			</div>

			{paymentMethod === "eMoney" && (
				<PageFadeIn>
					{/* <div className='flex flex-col'> */}
					<div className='pt-[1.3rem] mt-[0.5rem] flex flex-col gap-[1.25rem]'>
						{paymentInputData.map((input) => (
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
				</PageFadeIn>
			)}

			{paymentMethod === "cash" && (
				<PageFadeIn>
					<div className='mt-[2rem] flex flex-col'>
						{/* cash icon */}
						<img src={cashIcon} alt='cash' className='h-[48px] w-[48px] mb-[0.5rem]' />
						<p className='font-medium text-xs leading-25 text-black/50 '>
							The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
							arrives at your residence. Just make sure your address is correct so that your order
							will not be cancelled.
						</p>
					</div>
				</PageFadeIn>
			)}
		</>
	);
};

export default PaymentSelector;

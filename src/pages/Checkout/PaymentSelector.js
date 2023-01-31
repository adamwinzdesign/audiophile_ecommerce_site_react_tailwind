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
			<div className='flex flex-col gap-[1rem] pt-[1.1rem]'>
				<h2 className='text-[12px] font-bold leading-[16px] tracking-[-0.2px] text-black'>
					Payment Method
				</h2>
				<button
					onClick={() => setPaymentMethod("eMoney")}
					type='button'
					className={`flex w-full items-center justify-start gap-[1rem] rounded-lg border px-[1rem] py-[18px] text-14 font-bold leading-[19px] tracking-[-0.25px] text-black ${
						paymentMethod === "eMoney" ? "border-peru" : "border-border_grey"
					}`}
				>
					{/* indicator */}
					<div className='flex h-[20px] w-[20px] items-center justify-center rounded-full border border-border_grey'>
						{/* center of indicator */}
						{paymentMethod === "eMoney" && (
							<div className='h-[10px] w-[10px] rounded-full bg-peru' />
						)}
					</div>
					<p>e-Money</p>
				</button>

				<button
					onClick={() => setPaymentMethod("cash")}
					type='button'
					className={`flex w-full items-center justify-start gap-[1rem] rounded-lg border px-[1rem] py-[18px] text-14 font-bold leading-[19px] tracking-[-0.25px] text-black ${
						paymentMethod === "cash" ? "border-peru" : "border-border_grey"
					}`}
				>
					{/* indicator */}
					<div className='flex h-[20px] w-[20px] items-center justify-center rounded-full border border-border_grey'>
						{/* center of indicator */}
						{paymentMethod === "cash" && <div className='h-[10px] w-[10px] rounded-full bg-peru' />}
					</div>
					<p>Cash on Delivery</p>
				</button>
			</div>

			{paymentMethod === "eMoney" && (
				<PageFadeIn>
					{/* <div className='flex flex-col'> */}
					<div className='mt-[0.5rem] flex flex-col gap-[1.25rem] pt-[1.3rem]'>
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
						<img src={cashIcon} alt='cash' className='mb-[0.5rem] h-[48px] w-[48px]' />
						<p className='text-15 font-medium leading-25 text-black/50 '>
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

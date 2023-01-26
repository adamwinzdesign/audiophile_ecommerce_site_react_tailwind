import { motion } from "framer-motion";
import { svgAnimation } from "../../utils/animations";

const Checkmark = ({ paymentProcessed }) => {
	return (
		<div className='w-[64px] h-[64px] flex items-center justify-center bg-peru rounded-full'>
			<motion.svg viewBox='0 0 64 64' animate={paymentProcessed ? "visible" : "hidden"}>
				<g fill='none' fill-rule='evenodd'>
					<motion.path
						d='m20.754 33.333 6.751 6.751 15.804-15.803'
						stroke='#FFF'
						strokeWidth='4'
						variants={svgAnimation}
					/>
				</g>
			</motion.svg>
		</div>
	);
};

export default Checkmark;

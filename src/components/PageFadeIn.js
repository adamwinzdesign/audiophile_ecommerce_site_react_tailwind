import { motion } from "framer-motion";
import { pageFadeIn } from "../utils/animations";

const PageFadeIn = ({ children }) => {
	return (
		<motion.div variants={pageFadeIn} initial='hidden' animate='show' exit='exit'>
			{children}
		</motion.div>
	);
};

export default PageFadeIn;

import { Link } from "react-router-dom";

const MobileLink = ({ dest, text }) => {
	return (
		<Link to={dest}>
			<p className='font-bold text-[13px] leading-[1.125rem] tracking-[1px] uppercase text-black/50'>
				shop
			</p>
		</Link>
	);
};

export default MobileLink;

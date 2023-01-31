import { Link } from "react-router-dom";

const StyledLink = ({ dest, text }) => {
	return (
		<Link
			to={dest}
			className='font-bold text-[13px] leading-25 tracking-[2px] uppercase text-white hover:text-peru duration-500'
		>
			<p>{text}</p>
		</Link>
	);
};

export default StyledLink;

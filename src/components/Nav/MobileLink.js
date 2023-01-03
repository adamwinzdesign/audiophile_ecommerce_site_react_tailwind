import { Link } from "react-router-dom";

const MobileLink = ({ dest, text }) => {
	return (
		<Link to={dest} className='font-bold text-[] leading-[] tracking-[] uppercase text-black'>
			{text}
		</Link>
	);
};

export default MobileLink;

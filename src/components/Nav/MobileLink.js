import { Link } from "react-router-dom";

const MobileLink = ({ dest }) => {
	return (
		<Link to={dest}>
			<p className='text-13 font-bold uppercase leading-[1.125rem] tracking-1 text-black/50'>
				shop
			</p>
		</Link>
	);
};

export default MobileLink;

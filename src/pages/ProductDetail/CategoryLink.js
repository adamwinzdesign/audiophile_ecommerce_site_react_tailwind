import { Link } from "react-router-dom";

const CategoryLink = ({ to }) => {
	return (
		<Link
			to={to}
			className='mb-[1.5rem] w-full font-medium text-[15px] leading-[25px] text-black/50'
		>
			Go Back
		</Link>
	);
};

export default CategoryLink;

import { Link } from "react-router-dom";

const CategoryLink = ({ to }) => {
	return (
		<Link to={to} className='mb-[1.5rem] w-full text-15 font-medium leading-25 text-black/50'>
			Go Back
		</Link>
	);
};

export default CategoryLink;

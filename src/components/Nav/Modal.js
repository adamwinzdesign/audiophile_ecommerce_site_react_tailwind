export const Modal = ({ setModalOpen }) => {
	return (
		<div
			className='absolute top-0 left-0 w-full h-[100%] bg-black/40'
			onClick={() => setModalOpen(false)}
		/>
	);
};

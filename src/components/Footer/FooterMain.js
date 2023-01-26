const FooterMain = ({ children }) => {
	return (
		<footer
			className='
			relative h-[40.875rem] md:h-[25rem] desk:h-[22.875rem] w-full 
			pt-[3.25rem] md:pt-[3.75rem] desk:pt-[4.75rem] 
			md:pb-[2.875rem] desk:pb-[3.5rem] 
			px-[1.6rem] md:px-[2.375rem] desk:px-[10.375rem] 
			flex flex-col items-center md:items-start md:justify-between gap-[3rem] md:gap-0 
			bg-black
			'
		>
			{children}
		</footer>
	);
};

export default FooterMain;

import logo from "../../images/shared/desktop/logo.svg";
import facebook from "../../images/shared/desktop/icon-facebook.svg";
import twitter from "../../images/shared/desktop/icon-twitter.svg";
import instagram from "../../images/shared/desktop/icon-instagram.svg";
import StyledLink from "../Nav/StyledLink";

// left off with spacing on footer at tablet width.  Spacing has been updated/specified, but was rendered incorrect when we had to group the logo and links together to switch to flex row for the links at desktop width

const Footer = () => {
	return (
		<div className='relative h-[40.875rem] md:h-[25rem] desk:h-[22.875rem] w-full pt-[3.25rem] md:pt-[3.75rem] desk:pt-[4.75rem] pb-[2.375rem] md:pb-[2.875rem] desk:pb-[3.5rem] px-[1.6rem] md:px-[2.375rem] desk:px-[10.375rem] flex flex-col items-center md:items-start md:justify-between gap-[3rem] md:gap-0 bg-black'>
			{/* brand accent */}
			<div className='absolute top-0 md:left-[2.375rem] desk:left-[10.375rem] w-[101px] h-[4px] bg-peru' />
			{/* logo and links */}
			<div className='w-full flex flex-col items-center desk:flex-row desk:justify-between gap-[3rem] md:gap-0'>
				{/* logo */}
				<img src={logo} alt='audiophile logo' className='w-[9rem]' />
				{/* links */}
				<div className='flex flex-col md:flex-row items-center gap-[1rem] md:gap-[2.125rem]'>
					<StyledLink dest='/' text='Home' />
					<StyledLink dest='/headphones' text='Headphones' />
					<StyledLink dest='/speakers' text='Speakers' />
					<StyledLink dest='/earphones' text='Earphones' />
				</div>
			</div>
			{/* info */}
			<div>
				<p className='desk:w-[33rem] text-[15px] leading-[25px] text-white/50 text-center md:text-left md:pb-[3.2rem]'>
					Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
					lovers and sound specialists who are devoted to helping you get the most out of personal
					audio. Come and visit our demo facility - we’re open 7 days a week.
				</p>
			</div>
			{/* copyright and socials */}
			<div className='relative w-full flex flex-col md:flex-row items-center md:justify-between'>
				{/* copyright */}
				<div>
					<p className='text-[15px] leading-[25px] text-white/50 text-center'>
						Copyright 2021. All Rights Reserved
					</p>
				</div>
				{/* socials */}
				<div className='desk:absolute desk:right-0 desk:bottom-[5rem] flex gap-[1rem]'>
					<img src={facebook} alt='facebook' />
					<img src={twitter} alt='twitter' />
					<img src={instagram} alt='instagram' />
				</div>
			</div>
		</div>
	);
};

export default Footer;

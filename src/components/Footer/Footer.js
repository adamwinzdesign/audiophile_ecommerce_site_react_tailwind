import logo from "../../images/shared/desktop/logo.svg";
import facebook from "../../images/shared/desktop/icon-facebook.svg";
import twitter from "../../images/shared/desktop/icon-twitter.svg";
import instagram from "../../images/shared/desktop/icon-instagram.svg";
import StyledLink from "../Nav/StyledLink";
import FooterMain from "../Footer/FooterMain";

// left off with spacing on footer at tablet width.  Spacing has been updated/specified, but was rendered incorrect when we had to group the logo and links together to switch to flex row for the links at desktop width

const Footer = () => {
	return (
		<FooterMain>
			{/* brand accent */}
			<div className='absolute top-0 md:left-[2.375rem] desk:left-[10.375rem] w-[101px] h-[4px] bg-peru' />
			{/* logo and links */}
			<div className='w-full flex flex-col items-center md:items-start desk:flex-row desk:justify-between gap-[3rem] md:gap-0'>
				{/* logo */}
				<img src={logo} alt='audiophile logo' className='w-[9rem] md:mb-[2rem]' />
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
			<div className='relative w-full flex flex-col md:flex-row items-center md:justify-between gap-[3rem]'>
				{/* copyright */}
				<div>
					<p className='text-[15px] leading-[25px] text-white/50 text-center'>
						Copyright 2021. All Rights Reserved
					</p>
				</div>
				{/* socials */}
				<div className='desk:absolute desk:right-0 desk:bottom-[5rem] flex gap-[1rem]'>
					<img src={facebook} alt='facebook' className='hover:cursor-pointer' />
					<img src={twitter} alt='twitter' className='hover:cursor-pointer' />
					<img src={instagram} alt='instagram' className='hover:cursor-pointer' />
				</div>
			</div>
		</FooterMain>
	);
};

export default Footer;

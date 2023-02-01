import logo from "../../images/shared/desktop/logo.svg";
import facebook from "../../images/shared/desktop/icon-facebook.svg";
import twitter from "../../images/shared/desktop/icon-twitter.svg";
import instagram from "../../images/shared/desktop/icon-instagram.svg";
import StyledLink from "../Nav/StyledLink";
import FooterMain from "../Footer/FooterMain";

const Footer = () => {
	return (
		<FooterMain>
			{/* brand accent */}
			<div className='absolute top-0 h-[4px] w-[101px] bg-peru md:left-[2.375rem] desk:left-[10.375rem]' />
			{/* logo and links */}
			<div className='flex w-full flex-col items-center gap-[3rem] md:items-start md:gap-0 desk:flex-row desk:justify-between'>
				{/* logo */}
				<img src={logo} alt='audiophile logo' className='w-[9rem] md:mb-[2rem]' />
				{/* links */}
				<div className='flex flex-col items-center gap-[1rem] md:flex-row md:gap-[2.125rem]'>
					<StyledLink dest='/' text='Home' />
					<StyledLink dest='/headphones' text='Headphones' />
					<StyledLink dest='/speakers' text='Speakers' />
					<StyledLink dest='/earphones' text='Earphones' />
				</div>
			</div>
			{/* info */}
			<div>
				<p className='text-center text-15 leading-25 text-white/50 md:pb-[3.2rem] md:text-left desk:w-[33rem]'>
					Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
					lovers and sound specialists who are devoted to helping you get the most out of personal
					audio. Come and visit our demo facility - we’re open 7 days a week.
				</p>
			</div>
			{/* copyright and socials */}
			<div className='relative flex w-full flex-col items-center gap-[3rem] md:flex-row md:justify-between'>
				{/* copyright */}
				<div>
					<p className='text-center text-15 font-bold leading-25 text-white/50'>
						Copyright 2021. All Rights Reserved
					</p>
				</div>
				{/* socials */}
				<div className='flex gap-[1rem] desk:absolute desk:right-0 desk:bottom-[5rem]'>
					<img src={facebook} alt='facebook' className='hover:cursor-pointer' />
					<img src={twitter} alt='twitter' className='hover:cursor-pointer' />
					<img src={instagram} alt='instagram' className='hover:cursor-pointer' />
				</div>
			</div>
		</FooterMain>
	);
};

export default Footer;

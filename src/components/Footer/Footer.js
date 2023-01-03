import logo from "../../images/shared/desktop/logo.svg";
import facebook from "../../images/shared/desktop/icon-facebook.svg";
import twitter from "../../images/shared/desktop/icon-twitter.svg";
import instagram from "../../images/shared/desktop/icon-instagram.svg";
import StyledLink from "../Nav/StyledLink";

const Footer = () => {
	return (
		<div className='relative h-[40.875rem] md:h-[25rem] desk:h-[22.875rem] w-full pt-[3.25rem] pb-[2.375rem] px-[1.6rem] flex flex-col items-center gap-[3rem] bg-black'>
			{/* brand accent */}
			<div className='absolute top-0 w-[101px] h-[4px] bg-peru' />
			{/* logo */}
			<img src={logo} alt='audiophile logo' className='w-[9rem]' />
			{/* links */}
			<div className='flex flex-col items-center gap-[1rem]'>
				<StyledLink dest='/' text='Home' />
				<StyledLink dest='/headphones' text='Headphones' />
				<StyledLink dest='/speakers' text='Speakers' />
				<StyledLink dest='/earphones' text='Earphones' />
			</div>
			{/* info */}
			<div>
				<p className='text-[15px] leading-[25px] text-white/50 text-center'>
					Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
					lovers and sound specialists who are devoted to helping you get the most out of personal
					audio. Come and visit our demo facility - we’re open 7 days a week.
				</p>
			</div>
			{/* copyright */}
			<div>
				<p className='text-[15px] leading-[25px] text-white/50 text-center'>
					Copyright 2021. All Rights Reserved
				</p>
			</div>
			{/* socials */}
			<div className='flex gap-[1rem]'>
				<img src={facebook} alt='facebook' />
				<img src={twitter} alt='twitter' />
				<img src={instagram} alt='instagram' />
			</div>
		</div>
	);
};

export default Footer;

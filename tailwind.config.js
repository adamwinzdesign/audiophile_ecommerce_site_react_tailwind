/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// components and pages would be necessary for nextJS, but src is for CRA
		// "./components/**/*.{js,jsx,ts,tsx}",
		// "./pages/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				homeHeroBGMobile: "url(../src/images/home/mobile/image-header.jpg)",
				homeHeroBGTablet: "url(../src/images/home/tablet/image-header.jpg)",
				homeHeroBGDesk: "url(../src/images/home/desktop/image-hero.jpg)",
				homeZX7BGMobile: "url(../src/images/home/mobile/image-speaker-zx7.jpg)",
				homeZX7BGTablet: "url(../src/images/home/tablet/image-speaker-zx7.jpg)",
				homeZX7BGDesk: "url(../src/images/home/desktop/image-speaker-zx7.jpg)",
				homeYX1BGMobile: "url(../src/images/home/mobile/image-earphones-yx1.jpg)",
				homeYX1BGTablet: "url(../src/images/home/tablet/image-earphones-yx1.jpg)",
				homeYX1BGDesk: "url(../src/images/home/desktop/image-earphones-yx1.jpg)",
				aboutBGMobile: "url(../src/images/shared/mobile/image-best-gear.jpg)",
				aboutBGTablet: "url(../src/images/shared/tablet/image-best-gear.jpg)",
				aboutBGDesk: "url(../src/images/shared/desktop/image-best-gear.jpg)",
				zx9Rings: "url(../src/images/home/desktop/pattern-circles.svg)",
			},
			backgroundSize: {
				944: "944px",
			},
			colors: {
				peru: "#D87D4A",
				very_light_tangelo: "#FBAF85",
				black: "#000",
				white: "#FFF",
				border_grey: "#979797",
			},
			screens: {
				desk: "1440px",
			},
		},
	},
	plugins: [],
};

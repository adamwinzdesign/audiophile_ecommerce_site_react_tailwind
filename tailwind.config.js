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
				heroBGMobile: "url(../public/images/home/mobile/image-header.jpg)",
				zx9Rings: "url(../public/images/home/desktop/pattern-circles.svg)",
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

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
				detailxx992Mobile:
					"url(../src/images/product-xx99-mark-two-headphones/mobile/image-product.jpg)",
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
				error_red: "#CD2C2C",
				very_light_tangelo: "#FBAF85",
				black: "#000",
				white: "#FFF",
				bg_grey: "#FAFAFA",
				light_grey: "#F1F1F1",
				border_grey: "#CFCFCF",
			},
			fontSize: {
				13: "0.8125rem", // 13px
				14: "0.875rem", // 14px
				15: "0.9375rem", // 15px
				18: "1.125rem", // 18px
			},
			height: {
				heightXS: "0.9375rem",
			},
			lineHeight: {
				18: "1.125rem", // 18px
				25: "1.5625rem", // 25px
			},
			letterSpacing: {
				1: "0.0625rem", // 1px
				128: "0.08rem", // 1.28px
			},
			screens: {
				desk: "1440px",
			},
		},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};

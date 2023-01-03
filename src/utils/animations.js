export const pageFadeIn = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const modalFadeIn = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const menuSlideDown = {
	hidden: {
		y: "-100%",
	},
	show: {
		y: 1,
		transition: {
			duration: 0.7,
			delay: 0.5,
		},
	},
	exit: {
		y: "-100%",
		transition: {
			duration: 0.5,
		},
	},
};

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
		x: "-100%",
		transition: {
			duration: 0.5,
		},
	},
	show: {
		x: 0,
		transition: {
			duration: 0.9,
		},
	},
	exit: {
		x: "-100%",
		transition: {
			duration: 0.5,
		},
	},
};

export const svgAnimation = {
	visible: {
		pathLength: 1,
		fillOpacity: 1,
		transition: {
			pathLength: {
				duration: 1,
			},
			fillOpacity: {
				duration: 1,
				delay: 1,
			},
		},
	},
	hidden: {
		pathLength: 0,
		fillOpacity: 0,
		transition: {
			pathLength: {
				duration: 2,
				delay: 1,
			},
			fillOpacity: {
				duration: 1,
			},
		},
	},
};

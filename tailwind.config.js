const colors = require('tailwindcss/colors')

module.exports = { 
	mode: 'jit',
	purge: [
		'./src/**/*.{html,js}',
	],
	darkMode: 'class', //false,  or 'media' or 'class'
	theme: { 
		extend: {
			zIndex: {
				'-1': '-1',
				'-2': '-2',
				'-3': '-3',
				'60': '60',
				'70': '70',
			},
			padding: {
				"youtube": "56.25%"
			}, 
			borderRadius: { 
				"full": "50%",
				"pill": "9999px",
			},  
			colors: {
				cyan: colors.cyan,
				fuchsia: colors.fuchsia,
				orange: colors.orange,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

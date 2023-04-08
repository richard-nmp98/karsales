/** @type {import('tailwindcss').Config}*/
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	// prefix: 'tw-',
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
			},
		},
		screens: {
			ssrsm: '380px',
			sssm: '410px',
			ssm: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1440px',
			xxxl: '1600px',
		},
		extend: {
			colors: {
				main: {
					500: '#FB4E4C',
				},
				secondary: {
					500: '#003DC6',
				},
				footer: {
					600: 'rgba(255,255,255,.6)',
				},
				date: {
					500: '#797979',
				},
				title: {
					news: {
						500: '#003DC6',
					},
				},
				blue: {
					main: '#141ED2',
					text: '#003DC6',
				},
				pink: {
					// main: '#DD0071',
					main: '#FB4E4C',
				},
				primary: '#fb4390',
				second: '#01C4DE',
				third: '#5bc5f2',
				four: '#165BAA',
				five: '#141ED2',
				footerColor: '#00377A',
				primaryBlur: '#FFE9EF',
				blueBlur: '#A8D2F0',
				fiveBlur: '#E4F7FF',
				grayBlur: '#F8F8F8',
				light: '#99A2AD',
				tempBlue: '#3F47D2',
				borderPink: '#FFC6C6',
				lineChart: '#5BC5F2',
				blueSAA: '#0033AB',
			},
			borderColor: {
				primary: '#fb4390',
				borderColor: '#d9d9d9',
				borderLineColor: '#E7E9EC',
				borderInputColor: '#eee',
			},
			textColor: {
				primary: '#112843',
				textColor: '#112843',
			},
			zIndex: {
				9: 9,
				100: 100,
				101: 101,
				102: 102,
				103: 103,
				900: 900,
				999: 999,
			},
			maxWidth: {
				sm: '768px',
				md: '992px',
				lg: '1170px',
				xl: '1440px',
				xxl: '1800px',
				'1/4': '25%',
				'1/2': '50%',
				45: '55%',
			},
			height: {
				450: '550px',
			},
			width: {
				'6/12-important': '50%!important',
				'full-important': '100%!important',
			},
			fontFamily: {
				heading: [
					'Gilroy',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Fira Sans',
					'Droid Sans',
					'Helvetica Neue',
					'sans-serif',
				],
				body: [
					'Source Sans Pro',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Fira Sans',
					'Droid Sans',
					'Helvetica Neue',
					'sans-serif',
				],
			},
		},
	},
	variants: {
		extend: {
			//
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/container-queries'),
	],
};

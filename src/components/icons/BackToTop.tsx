import type { FC } from 'react';

type Props = React.SVGProps<SVGSVGElement>;
export const BackToTop: FC<Props> = (props) => (
	<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<g filter="url(#filter0_d)">
			<circle cx="28" cy="26" r="20" fill="white" />
		</g>
		<g clipPath="url(#clip0)">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M30.1377 20.675L28.4502 20.675L28.4502 34.25L27.7752 34.25L27.7752 20.675L25.8627 20.675L28.0752 17.75L30.1377 20.675Z"
				fill="#FB4390"
			/>
		</g>
		<defs>
			<filter
				id="filter0_d"
				x="0"
				y="0"
				width="56"
				height="56"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
				<feOffset dy="2" />
				<feGaussianBlur stdDeviation="4" />
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
			</filter>
			<clipPath id="clip0">
				<rect width="18" height="18" fill="white" transform="translate(37 17) rotate(90)" />
			</clipPath>
		</defs>
	</svg>
);

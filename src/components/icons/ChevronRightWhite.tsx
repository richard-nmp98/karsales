import type { FC } from 'react';

type Props = React.SVGProps<SVGSVGElement>;
export const ChevronRightWhite: FC<Props> = (props) => (
	<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<circle opacity="0.36" cx="30" cy="30" r="29" stroke="white" strokeWidth="2" />
		<path
			d="M25.0001 41C24.7443 41 24.4883 40.9023 24.2931 40.707C23.9023 40.3162 23.9023 39.6835 24.2931 39.293L33.586 30L24.2931 20.707C23.9023 20.3162 23.9023 19.6835 24.2931 19.293C24.6838 18.9025 25.3165 18.9022 25.707 19.293L35.7069 29.293C36.0977 29.6837 36.0977 30.3165 35.7069 30.707L25.707 40.707C25.5118 40.9023 25.2558 41 25.0001 41Z"
			fill="white"
		/>
	</svg>
);

import type { FC } from 'react';

type Props = React.SVGProps<SVGSVGElement>;
export const PlanArrow: FC<Props> = (props) => (
	<svg width="38" height="10" viewBox="0 0 38 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M30.8335 9.75L30.8335 6L0.666828 6L0.666828 4.5L30.8335 4.5L30.8335 0.25L37.3335 5.16667L30.8335 9.75Z"
			fill="#FB4390"
		/>
	</svg>
);

import type { FC } from 'react';

type Props = React.SVGProps<SVGSVGElement>;
export const MinusWhite: FC<Props> = (props) => (
	<svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.3333 1.16683C15.3333 1.62708 14.9229 2.00016 14.4167 2.00016H1.58334C1.07708 2.00016 0.666672 1.62708 0.666672 1.16683C0.666672 0.706579 1.07708 0.333496 1.58334 0.333496H14.4167C14.9229 0.333496 15.3333 0.706579 15.3333 1.16683Z"
			fill="white"
		/>
	</svg>
);

import type { FC } from 'react';

type Props = React.SVGProps<SVGSVGElement>;
export const Down: FC<Props> = (props) => (
	<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M9.56802 0.666649C9.53688 0.592892 9.46468 0.544922 9.3845 0.544922L0.616288 0.545019C0.536208 0.545019 0.463911 0.59299 0.432677 0.666746C0.401539 0.740502 0.417595 0.825837 0.473447 0.883246L4.85755 5.39239C4.89502 5.43092 4.94659 5.45272 5.00039 5.45272C5.0542 5.45272 5.10577 5.43092 5.14324 5.39239L9.52734 0.883149C9.58319 0.825642 9.59915 0.740405 9.56802 0.666649Z"
			fill="#112843"
		/>
	</svg>
);
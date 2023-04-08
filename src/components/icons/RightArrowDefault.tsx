import type { FC } from 'react';

type Props = React.SVGProps<SVGSVGElement>;
export const RightArrowDefault: FC<Props> = (props) => (
	<svg width="24" height="44" viewBox="0 0 24 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M2.0001 44C1.48861 44 0.976615 43.8045 0.586119 43.414C-0.195373 42.6325 -0.195373 41.367 0.586119 40.586L19.1719 22L0.586119 3.41394C-0.195373 2.63244 -0.195373 1.36694 0.586119 0.585938C1.36761 -0.195063 2.6331 -0.195563 3.41409 0.585938L23.4139 20.586C24.1954 21.3675 24.1954 22.633 23.4139 23.414L3.41409 43.414C3.02359 43.8045 2.5116 44 2.0001 44Z"
			fill="#112843"
		/>
	</svg>
);

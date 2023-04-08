import type { FC } from 'react';

type Props = React.SVGProps<SVGSVGElement>;
export const Checked: FC<Props> = (props) => (
	<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<rect width="28" height="28" rx="4" fill="#FB4390" />
		<path
			d="M21.0697 8.40185C20.7494 8.12164 20.2615 8.15329 19.9806 8.4744L11.7612 17.8679L8.00197 13.8577C7.71019 13.5474 7.22233 13.532 6.91124 13.823C6.60016 14.114 6.58394 14.6034 6.87572 14.9145L11.2178 19.546C11.3644 19.7011 11.5674 19.7891 11.7813 19.7891H11.7944C12.0128 19.786 12.2182 19.6903 12.3625 19.5259L21.1431 9.49103C21.4233 9.16991 21.3909 8.68283 21.0697 8.40185Z"
			fill="white"
		/>
	</svg>
);

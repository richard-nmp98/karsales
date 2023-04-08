import type { FC, AnchorHTMLAttributes } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: FC<Props> = ({ children, ...props }) => {
	return <a {...props}>{children}</a>;
};

export default Link;

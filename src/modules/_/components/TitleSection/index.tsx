import React, { memo, ReactElement } from 'react';
import { Wrapper } from './styled';

interface Props {
	children: ReactElement;
	lineTop?: boolean | false;
}

const TitleSection: React.FC<Props> = (props) => {
	const { children, lineTop } = props;

	return (
		<>
			<Wrapper className={`md:pt-[25px] mb-[30px] mt-[25px] ${lineTop ? 'line-top' : ''}`}>
				<div className="font w-full">{children}</div>
			</Wrapper>
		</>
	);
};

export default memo(TitleSection);

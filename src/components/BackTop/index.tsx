import { UpOutlined } from '@ant-design/icons';
import React, { memo, useEffect, useState } from 'react';
import { Wrapper } from './styled';

const BackTop: React.FC = () => {
	const [showButton, setShowButton] = useState(false);

	const handleScroll = () => {
		if (window.pageYOffset > 1000) {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<>
			<Wrapper>
				<div className={`back-to-top ${showButton ? 'show' : ''}`} onClick={handleClick}>
					<UpOutlined style={{ color: '#FB4E4C' }} />
				</div>
			</Wrapper>
		</>
	);
};

export default memo(BackTop);

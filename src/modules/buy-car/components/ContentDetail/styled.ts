import styled from 'styled-components';
export const Wrapper = styled.div`
	.tabs {
		position: relative;

		&:before {
			content: '';
			position: absolute;
			bottom: 5px;
			left: 0;
			height: 3px;
			width: 100px;
			background: #fb4e4c;
		}
	}
`;

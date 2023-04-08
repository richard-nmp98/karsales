import styled from 'styled-components';

export const Wrapper = styled.div`
	.tabs {
		position: relative;

		&:before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			height: 3px;
			width: 30%;
			background: #fb4e4c;
		}
	}

	.more-news {
		&:last-child {
			.line {
				display: none;
			}
		}
	}
`;

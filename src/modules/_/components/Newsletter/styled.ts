import styled from 'styled-components';

export const Wrapper = styled.div`
	.sub-news {
		position: relative;

		&:before {
			content: '';
			position: absolute;
			top: 10px;
			left: 0;
			width: 5px;
			height: 5px;
			background: #003dc6;
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

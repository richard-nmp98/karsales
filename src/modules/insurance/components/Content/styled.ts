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
			width: 200px;
			background: #fb4e4c;
		}

		&.line-top {
			&:before {
				top: -10px;
			}
		}
	}

	.brand-box {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.09);

		&:hover {
			box-shadow: 2px 2px 3px 0px rgb(0 0 0 / 30%);
		}
	}
`;

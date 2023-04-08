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

	.brand-box {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.09);

		&:hover {
			box-shadow: 2px 2px 3px 0px rgb(0 0 0 / 30%);
		}
	}

	.card {
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.063);
	}

	.active {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 12px;
		height: 12px;
		background: #1c74e4;
		border-radius: 50%;
	}
`;

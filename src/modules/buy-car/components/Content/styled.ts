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

	.card {
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.063);
	}

	.title {
		position: relative;

		&:before {
			content: '';
			position: absolute;
			top: calc(100% + 5px);
			left: 0;
			width: 100%;
			height: 1px;
			background: #ededed;
		}
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

	.filter {
		width: 210px;

		@media (max-width: 1023px) {
			position: absolute;
			z-index: 9;
			min-height: 100vh;
			height: 100%;
			top: 0;
			left: -300px;
			transition: all 0.3s ease-out;

			&.show {
				left: 0;
			}
		}
	}

	.content {
		width: calc(100% - 210px);

		@media (max-width: 1023px) {
			width: 100%;
		}
	}
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
	.rounded {
		overflow: hidden;
		border: 0.5px solid #0a43c3;

		> * {
			border-radius: 0;
			border: 0px !important;
		}

		* {
			&:focus {
				box-shadow: none !important;
			}
		}
	}

	.brand-box {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.09);

		&:hover {
			box-shadow: 2px 2px 3px 0px rgb(0 0 0 / 30%);
		}
	}

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
`;

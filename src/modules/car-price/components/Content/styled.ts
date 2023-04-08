import styled from 'styled-components';

export const Wrapper = styled.div`
	.tab-cus {
		position: relative;

		&::-webkit-scrollbar {
			display: none;
		}

		&:before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			height: 3px;
			width: 100%;
			background: #e1e1e1;
		}

		@media (max-width: 639px) {
			&:before {
				content: unset;
			}
		}

		.tab {
			&:before {
				content: '';
				width: 0;
				transition: all 0.3s ease-out;
			}

			&.tab-active {
				position: relative;

				&:before {
					content: '';
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translateX(-50%);
					height: 3px;
					width: 100%;
					background: #fb4e4c;
				}
			}
		}
	}
`;

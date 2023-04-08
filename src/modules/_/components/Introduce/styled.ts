import styled from 'styled-components';

export const Wrapper = styled.div`
	background: #fafafa;

	.background {
		min-height: 200px;
		background-image: url('/images/home-page/background-introduce.png');
		background-size: cover;
		background-position: right;
		background-repeat: no-repeat;

		@media (max-width: 767px) {
			background-image: none;
		}

		.group-button {
			transform: translateY(50%);

			@media (max-width: 767px) {
				transform: unset;
				padding: 20px 0px;
				box-sizing: border-box;
			}
		}
	}
`;

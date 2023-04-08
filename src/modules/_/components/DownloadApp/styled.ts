import styled from 'styled-components';

export const Wrapper = styled.div`
	min-height: 245px;
	height: 100%;
	background: #f4f4f4;

	@media (max-width: 445px) {
		.container {
			padding-left: 5px;
			padding-right: 5px;
		}
	}

	.review-mobile-app {
		bottom: 0;

		@media (max-width: 639px) {
			img {
				width: 130px;
			}
		}

		@media (max-width: 445px) {
			img {
				width: 100px;
			}
		}

		@media (max-width: 360px) {
			img {
				width: 80px;
			}
		}
	}
`;

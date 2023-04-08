import styled from 'styled-components';

export const Wrapper = styled.div`
	max-height: calc(100vh - 64px);
	overflow: hidden;

	&.loading {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.carousel-cus {
		height: 404px;

		.img-carousel-cus {
			min-height: 100%;
			width: 100%;
		}
	}
`;

export const WrapText = styled.div`
	clip-path: polygon(0 0, 100% 0%, 81% 100%, 0% 100%);
	background: #ffd726;
	height: 100%;
	position: absolute;
	left: 0px;
	top: 0;
	overflow: hidden;

	.read-more {
		background: #fb4e4c;
		border-radius: 3px;
		width: 126px;
		padding: 11px 0px;
		box-sizing: border-box;
	}
`;

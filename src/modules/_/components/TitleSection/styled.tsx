import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;

	&:before {
		content: '';
		position: absolute;
		top: calc(100% + 3px);
		left: 0;
		height: 3px;
		width: 85px;
		background: #fb4e4c;
	}

	&.line-top {
		&:before {
			content: '';
			position: absolute;
			top: -5px;
			left: 0;
			height: 3px;
			width: 100%;
			background: #ebebeb;
		}

		&:after {
			content: '';
			position: absolute;
			top: -5px;
			left: 0;
			height: 3px;
			max-width: 295px;
			width: 100%;
			background: #fb4e4c;
		}
	}

	.font,
	.font p {
		font-size: 150%;
		font-weight: 700;
		color: #003dc6;

		@media (max-width: 767px) {
			font-size: 120%;
		}
	}
`;

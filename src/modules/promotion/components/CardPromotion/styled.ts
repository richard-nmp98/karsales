import styled from 'styled-components';

export const Wrapper = styled.div`
	.title {
		height: 52px;

		&:before {
			content: 'Khuyến mãi';
			position: absolute;
			top: 20%;
			left: -12%;
			transform: rotate(-45deg);
			text-transform: uppercase;
			background: #fed63e;
			color: #000;
			padding: 5px;
			box-sizing: border-box;
			font-weight: 700;
			font-size: 6px;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 45%;
		}
	}

	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.09);
`;

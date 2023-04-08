import styled from 'styled-components';

export const Wrapper = styled.div`
	.line {
		position: relative;
		width: 100%;
		height: 3px;
		background: #ebebeb;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			max-width: 295px;
			width: 100%;
			background: #fb4e4c;
		}
	}

	.found-text {
		position: relative;

		&:before {
			content: '';
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 0;
			width: 1px;
			height: 11px;
			background: #fb4e4c;
		}
	}

	.line-card {
		height: 1px;
		width: 90%;
		background: #e1e1e1;
	}
`;

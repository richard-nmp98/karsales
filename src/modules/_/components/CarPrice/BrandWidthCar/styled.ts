import styled from 'styled-components';

export const Wrapper = styled.div`
	.card {
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.063);
	}

	.title {
		position: relative;

		&:before {
			content: '';
			position: absolute;
			top: calc(100% + 2px);
			left: 0;
			width: 100%;
			height: 1px;
			background: #ededed;
		}
	}
`;

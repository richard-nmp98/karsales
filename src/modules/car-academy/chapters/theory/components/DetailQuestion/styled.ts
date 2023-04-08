import styled from 'styled-components';

export const Wrapper = styled.div`
	.incorrect.ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
		border-color: #fb4e4c;
		background-color: transparent;

		&:after {
			width: 30px;
			height: 30px;
			margin-block-start: -15px;
			margin-inline-start: -15px;
			background-color: #fb4e4c;
		}
	}

	.correct.ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
		border-color: #003dc6;
		background-color: transparent;

		&:after {
			width: 30px;
			height: 30px;
			margin-block-start: -15px;
			margin-inline-start: -15px;
			background-color: #003dc6;
		}
	}
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
	.back-to-top {
		display: none;
		position: fixed;
		bottom: 20px;
		right: 20px;
		z-index: 999;
		font-size: 1.8rem;
		color: #003dc6;
		background: #fff;
		border: none;
		cursor: pointer;
		transition: opacity 0.3s ease-in-out;
		width: 40px;
		height: 40px;
		border: 1px solid #fb4e4c;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
	}

	.back-to-top.show {
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 1;
	}
`;

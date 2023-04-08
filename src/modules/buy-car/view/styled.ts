import styled from 'styled-components';

export const Wrapper = styled.div`
	.group-contact-seller {
		@media (max-width: 385px) {
			flex-wrap: wrap;
		}
	}
`;

export const Bottom = styled.div`
	.tabs {
		position: relative;

		&:before {
			content: '';
			position: absolute;
			bottom: 5px;
			left: 0;
			height: 3px;
			width: 100px;
			background: #fb4e4c;
		}
	}
`;

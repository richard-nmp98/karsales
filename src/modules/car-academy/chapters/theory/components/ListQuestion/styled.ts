import styled from 'styled-components';

export const Wrapper = styled.div`
	.list-question {
		grid-template-columns: repeat(15, minmax(0, 1fr));
	}

	@media (max-width: 1439px) {
		.list-question {
			grid-template-columns: repeat(12, minmax(0, 1fr));
		}
	}

	@media (max-width: 1023px) and (min-width: 768px) {
		.list-question {
			grid-template-columns: repeat(10, minmax(0, 1fr));
		}
	}
`;

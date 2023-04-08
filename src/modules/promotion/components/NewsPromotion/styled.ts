import styled from 'styled-components';

export const Wrapper = styled.div`
	.select_custom_border {
		overflow: hidden;
		border: 0.5px solid #0a43c3;

		> * {
			border-radius: 0;
			border: 0px !important;
		}

		* {
			&:focus {
				box-shadow: none !important;
			}
		}
	}
`;

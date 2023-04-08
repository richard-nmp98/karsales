import styled from 'styled-components';

export const Wrapper = styled.div`
	.rounded {
		/* overflow: hidden; */
		/* border: 0px solid #0A43C3; */

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

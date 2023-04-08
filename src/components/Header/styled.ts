import styled from 'styled-components';

export const Wrapper = styled.div`
	* {
		cursor: pointer;
	}

	.link {
		position: relative;
		&:before {
			content: '';
			position: absolute;
			left: 0;
			bottom: calc(-6px);
			height: 3px;
			width: 0;
			background: #ffd726;
			transition: all 0.3s ease-out;
		}

		@media (max-width: 1023px) {
			&:before {
				bottom: calc(-4px);
			}
		}

		@media (max-width: 767px) {
			&:before {
				bottom: 10px;
			}
		}

		&:hover {
			&:before {
				width: 100%;
			}

			@media (max-width: 767px) {
				&:before {
					width: 50px;
					bottom: 10px;
				}
			}
		}

		&.active {
			@media (max-width: 767px) {
				&:before {
					bottom: 10px;
				}
			}

			&:before {
				width: 100%;
			}

			@media (max-width: 767px) {
				&:before {
					width: 50px;
					bottom: 10px;
				}
			}
		}
	}

	@media (min-width: 768px) {
		.nav {
			height: unset !important;
		}
	}

	@media (max-width: 767px) {
		.nav {
			&.hidden,
			&.block {
				display: block !important;
			}
			&.hidden {
				height: 0 !important;
				overflow: hidden;
				padding-top: 0 !important;
				padding-bottom: 0 !important;
			}

			transition: all 0.3s ease-out;
		}
	}
`;

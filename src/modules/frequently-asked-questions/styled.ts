import styled from 'styled-components';

export const Wrapper = styled.div`
	.ant-collapse-header {
		background: #f4f5f7;
		/* border-radius: 8px 8px 0 0!important; */
	}

	.ant-collapse-content {
		background: #f4f5f7;
		/* border-top: 0px; */
		position: relative;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			height: 1px;
			width: 95%;
			background: #fff;
		}
	}

	.ant-collapse-content.ant-collapse-content-active {
		border-top: 0;
	}

	.ant-collapse,
	.ant-collapse * {
		border: 0;
	}

	.ant-collapse-item {
		border-bottom: 0;
	}

	.ant-collapse {
		border: 0;
		overflow: hidden;
		background: #f4f5f7;
	}

	@media (max-width: 410px) {
		.content-faq {
			width: 90%;
		}
	}
`;

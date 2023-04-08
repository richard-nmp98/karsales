import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	background: #fb4e4c;
	padding-top: 66.18px;
	padding-bottom: 41.82px;
	box-sizing: border-box;
	border-top: solid 6px #003dc6;
`;

export const Content = styled.div`
	box-sizing: border-box;
	margin: auto;
`;

export const Body = styled.div``;

export const KarLogo = styled.div`
	font-size: 34px;
	line-height: 41px;
	color: #ffffff;
	font-style: italic;
	font-weight: 900;
	text-transform: uppercase;
	margin-bottom: 19px;
`;

export const Bodies = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	@media (max-width: 991px) {
		flex-wrap: wrap;
	}
`;

export const KarInfo = styled.div`
	&.__info {
		@media (max-width: 991px) {
			width: 100%;
			margin-bottom: 20px;
		}
	}
`;

export const KarInfoWrap = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
`;

export const KarsaleInfo = styled.div`
	max-width: 320px;

	@media (max-width: 991px) {
		max-width: 100%;
	}
`;

export const KarText = styled.div`
	margin-bottom: 21px;
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;
	color: #fff;
`;

export const KarLink = styled.div`
	margin-bottom: 3px;

	a {
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		color: rgba(255, 255, 255, 0.6);

		&:hover {
			color: #fff;
		}
	}
`;

export const MinistryIndustryTrade = styled.div`
	padding: 3px;
	box-sizing: border-box;
	background: #fff;
	border-radius: 3px;
	width: 105px;
	height: 37px;
`;

export const MinistryIndustryTradeIcon = styled.img`
	width: 100%;
	height: 100%;
`;

export const TextInfo = styled.div`
	font-weight: 300;
	font-size: 16px;
	line-height: 22px;
	color: rgba(255, 255, 255, 0.6);
	margin-bottom: 12px;
`;

export const Line = styled.div`
	height: 1px;
	width: 100%;
	background: #fff;
	margin: 23px 0;
`;

import Document, { Head, Main, Html, NextScript } from 'next/document';
import { FB_PIXEL_ID } from 'src/helpers/fpixel';

export default class RootDocument extends Document {
	render() {
		return (
			<Html lang="vi" dir="ltr">
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
					<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
					<link rel="shortcut icon" href="/favicon/favicon.ico" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
					<meta name="theme-color" content="#141ed2" />
					<meta httpEquiv="Accept-CH" content="DPR, Width, Viewport-Width, ECT, Device-Memory" />
					<meta httpEquiv="Accept-CH-Lifetime" content="86400" />
				</Head>
				<body className={'pt-[64px] lg:pt-[68px]'}>
					<noscript>
						<img
							alt="Facebook pixel"
							height="1"
							width="1"
							style={{ display: 'none' }}
							src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
						/>
					</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

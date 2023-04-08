import 'src/styles/fonts.css';
import 'src/styles/globals.css';
import 'src/styles/custom.scss';
import 'src/devtools/wdyr';
import 'src/devtools/axe';

import React from 'react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { seoConfig } from '../next-seo.config';
import { PageContextProvider } from 'src/context/PageContext';
import { ApolloProvider } from '@apollo/client';
import { client } from 'src/apollo/client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import 'moment/locale/vi';
import moment from 'moment';
import BackTop from '@/components/BackTop';
import { AppContextProvider } from '@/context/AppContext';

moment.updateLocale('vi', {
	calendar: {
		sameDay: 'LT | DD/MM/YYYY',
		nextDay: 'LT | DD/MM/YYYY',
		nextWeek: 'LT | DD/MM/YYYY',
		lastDay: 'LT | DD/MM/YYYY',
		lastWeek: 'LT | DD/MM/YYYY',
		sameElse: 'LT | DD/MM/YYYY',
	},
});

const Empty: React.FC = ({ children }: any) => <>{children}</>;

function RootApp({ Component, pageProps }: AppProps) {
	const Layout = (Component as any).Layout || Empty;
	return (
		<PageContextProvider value={{ isMobile: pageProps?.isMobile }}>
			<ApolloProvider client={client}>
				<AppContextProvider>
					<DefaultSeo {...seoConfig} />
					<Layout pageProps={pageProps}>
						<Header />
						<main id="main">
							<Component {...pageProps} />
							<BackTop />
						</main>
						<Footer />
					</Layout>
				</AppContextProvider>
			</ApolloProvider>
		</PageContextProvider>
	);
}

export default RootApp;

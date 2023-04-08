import { NextSeo } from 'next-seo';
import { SSRData, withUrqlClient } from 'next-urql';
// import type { HeaderMenuFooterSitemapsQueryResponse } from 'src/graphql/queries/common-header-footer-sitemap.generated';
// import type { HomePageQueryResponse } from 'src/graphql/queries/homePage.generated';
import { BASE_URL } from 'src/helpers/environment';
// import { getPreloadImages } from 'src/helpers/get-preload-image';
import HomePage from 'src/modules/_';
import type { LangSupport, NextPageLayout } from 'src/types';

const lang: LangSupport = 'vi';

type Props = {
	// homeData: Partial<
	// 	Pick<HomePageQueryResponse['homePage'], 'featuredImage' | 'seoTitle' | 'seoKeyword' | 'seoDescription'>
	// >;
	// data?: HeaderMenuFooterSitemapsQueryResponse;
	homeData: any;
	data?: any;
	builderData: any;
	lang: LangSupport;
	urqlState?: SSRData;
};

const IndexPage: NextPageLayout<any> = ({ data, homeData, builderData }: Props) => {
	// const images = getPreloadImages(builderData);
	return (
		<>
			<NextSeo
				title={homeData?.seoTitle ?? 'Kar Sale'}
				description={homeData?.seoDescription ?? ''}
				additionalMetaTags={[
					{
						name: 'keywords',
						content: homeData?.seoKeyword?.join(', ') ?? '',
					},
				]}
				languageAlternates={[
					{
						href: `${BASE_URL}/en`,
						hrefLang: 'en',
					},
					{
						href: BASE_URL,
						hrefLang: 'x-default',
					},
				]}
				canonical={BASE_URL}
				openGraph={{
					url: BASE_URL,
					title: homeData?.seoTitle ?? 'Kar Sale',
					description: homeData?.seoDescription ?? '',
					images: [
						{
							url: homeData?.featuredImage
								? homeData?.featuredImage.startsWith('http')
									? homeData?.featuredImage
									: `${BASE_URL}${homeData?.featuredImage}`
								: '',
							alt: homeData?.seoTitle ?? 'Kar Sale',
						},
					],
				}}
			/>
			<HomePage />
		</>
	);
};

export default withUrqlClient(
	() => ({
		url: (typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_API_URL : process.env.SERVER_API_URL) as string,
		fetchOptions: {
			headers: {
				language: lang,
			},
		},
	}),
	{ ssr: false },
)(IndexPage);

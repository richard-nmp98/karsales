import type { PageConfig } from 'next';
import { useEffect } from 'react';
import Link from 'src/components/Link';
// import type { HeaderMenuFooterSitemapsQueryResponse } from 'src/graphql/queries/common-header-footer-sitemap.generated';
import type { LangSupport, NextPageLayout } from 'src/types';
// import { client } from 'src/client/client';

export const config: PageConfig = { amp: false };
type Props = {
	// data?: HeaderMenuFooterSitemapsQueryResponse;
	lang: LangSupport;
};

const NotFound: NextPageLayout<Props> = () => {
	useEffect(() => {
		// client
		//   .query<HeaderMenuFooterSitemapsQueryResponse, HeaderMenuFooterSitemapsQueryVariables>(
		//     HeaderMenuFooterSitemapsDocument,
		//     {
		//       lang: getLanguage('vi'),
		//     },
		//   )
		//   .toPromise()
		//   .then((res) => {
		//     setData(res.data);
		//   });
	}, []);
	return (
		<>
			<div className="tw-px-10 tw-py-16 xxl:tw-py-20 tw-text-center tw-flex-col">
				<div className="tw-text-center">
					<img className="tw-mx-auto" alt="404" src="/images/404.png" width="640" height="488" loading="lazy" />
				</div>
				<span>Oops! Không tìm thấy trang</span>
				<div>
					<Link href="/">Quay Lại</Link>
				</div>
			</div>
		</>
	);
};

export default NotFound;

import React from 'react';
import VehicleReviewDetailExcerpt from '@/modules/_/components/VehiclesReview/Detail/Excerpt';
import VehicleReviewDetail from '@/modules/_/components/VehiclesReview/Detail';
// import MostView from '@/components/News/MostView';
import News from '@/components/News';
import NewsVehicleReview from '@/components/News/VehicleReview';
import RelatedNewsCarousel from '@/components/News/Carousel/Related';
// import MostViewNewsCarousel from '@/components/News/Carousel/MostView';
import Carousel from '@/components/Carousel';
import { useGetReviewDetailQuery } from '@/graphql/queries/getReviewDetail.generated';
import { BannerPositionEnum, ReviewsEntity } from '@/graphql/type.interface';
import { useAppState } from '@/context/AppContext';
import { useGetListReviewsQuery } from '@/graphql/queries/getListReviews.generated';
import { Skeleton } from 'antd';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const RELATED_NEWS_MAX = 8;

const NewsDetail: React.FC = () => {
	const router = useRouter();
	const slug = router.query.slug as string;
	const [postReview, setPostReview] = React.useState<ReviewsEntity>({} as ReviewsEntity);
	const [relatedNews, setRelatedNews] = React.useState<ReviewsEntity[]>([]);
	const { appState, setAppState } = useAppState();
	const { loading: reviewDetailLoading } = useGetReviewDetailQuery({
		fetchPolicy: 'cache-first',
		variables: {
			slug: slug,
		},
		onCompleted: (res) => {
			setPostReview((res?.getReviewDetail || {}) as ReviewsEntity);
			setAppState({
				...appState,
				relatedIgnore: appState.relatedIgnore.concat([res?.getReviewDetail || {}]),
			});
		},
	});

	// if (!reviewDetailLoading) {
	// 	if (!postReview?.id || !postReview.isActive) {
	// 		router.push('/404');
	// 		return null;
	// 	}
	// }

	const { loading: reViewRelatedLoading } = useGetListReviewsQuery({
		fetchPolicy: 'cache-first',
		variables: {
			input: {
				take: RELATED_NEWS_MAX,
				skip: 1,
				category: postReview.category,
				ignoreId: appState?.relatedIgnore?.map((item: ReviewsEntity) => {
					return item?.id;
				}),
			},
		},
		onCompleted: (res) => {
			setRelatedNews(res?.getListReviews?.items || []);
		},
	});

	const relatedBreakPoints = {
		slidesPerView: 2,
		breakpoints: {
			1024: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 2,
			},
			640: {
				slidesPerView: 2,
			},
		},
	};

	return (
		<>
			<NextSeo
				title={postReview?.nameVi || ''}
				description={postReview?.descriptionVi || ''}
				openGraph={{
					title: postReview?.nameVi || '',
					description: postReview?.descriptionVi || '',
					url: `${postReview?.slug || ''}`,
					images: [
						{
							url: postReview.thumnail || '',
						},
					],
				}}
			/>
			<Carousel position={BannerPositionEnum.WEBSITE_BODY} />
			<div className={'container mb-4'}>
				<div className="lg:max-w-screen-lg mx-auto text-center py-8 md:py-10 space-y-4">
					<Skeleton loading={reviewDetailLoading} active>
						<VehicleReviewDetailExcerpt postReview={postReview} />
					</Skeleton>
				</div>
				<div className={'grid grid-cols-12 gap-6 md:gap-y-0'}>
					<div className={'col-span-12 lg:col-span-9'}>
						<Skeleton loading={reviewDetailLoading} active paragraph={{ rows: 30 }}>
							<VehicleReviewDetail postReview={postReview} />
						</Skeleton>
					</div>
					<div className={'col-span-12 lg:col-span-3'}>
						<img
							className="m-auto sm:m-0 w-full xl:max-w-none max-w-[300px]"
							src="https://nftstorage.link/ipfs/bafkreienbv7zb7n4nghfawop7ubzt7obvqqv2m7354zgra73o7i72b2qmy"
							alt=""
						/>
						{/*<MostView />*/}
						<News />
						<NewsVehicleReview />
						<img
							className="w-full xl:max-w-none max-w-[300px] mt-4"
							src="https://nftstorage.link/ipfs/bafkreienbv7zb7n4nghfawop7ubzt7obvqqv2m7354zgra73o7i72b2qmy"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className={'container mb-9'}>
				<div className={'mb-8'}>
					<Skeleton loading={reViewRelatedLoading} active>
						<RelatedNewsCarousel
							archiveLink={'/tin-tuc'}
							swiperOptions={relatedBreakPoints}
							items={relatedNews}
							title={'Tin Tức Bạn Quan Tâm'}
						/>
					</Skeleton>
				</div>
				{/*<hr />*/}
				{/*<div className={'mb-5 mt-2'}>*/}
				{/*	<MostViewNewsCarousel />*/}
				{/*</div>*/}
			</div>
		</>
	);
};

export default NewsDetail;

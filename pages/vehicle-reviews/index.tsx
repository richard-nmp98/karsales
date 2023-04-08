import React, { memo, useState } from 'react';
import CarPrice from '@/components/CarPrice';
import ListHasTag from '@/modules/_/components/VehiclesReview/ListHasTag';
// import MostView from '@/components/News/MostView';
import News from '@/components/News';
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import GridTemplate1 from '@/components/News/GridTemplate/Template-1';
import NewsVehicleReview from '@/components/News/VehicleReview';
import CarouselBanner from '@/components/Carousel';
import { Skeleton, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { GetListReviewsDocument } from '@/graphql/queries/getListReviews.generated';
import { ReviewsEntity } from '@/graphql/type.interface';
// import { useAppState } from '@/context/AppContext';
import { NextSeo } from 'next-seo';
import { apolloClient } from '@/client/client';

const getReviews = async (take: number, category: string, ignoreId: [] = []) => {
	const { data } = await apolloClient.query({
		query: GetListReviewsDocument,
		variables: {
			input: {
				take: take,
				skip: 1,
				category: category,
				ignoreId: ignoreId,
			},
		},
	});

	return data?.getListReviews;
};

export async function getServerSideProps() {
	// const dataReviewsNewTake3 = await getReviewsNewTake3();
	const dataReviewsNewTake3 = await getReviews(3, process.env.reviewsCategoryNew as string);
	let ignoreId = dataReviewsNewTake3?.items?.map((item: ReviewsEntity) => {
		return item?.id;
	});
	// const dataReviewsAllTake4 = await getReviewsAllTake4(ignoreId);
	const dataReviewsAllTake4 = await getReviews(4, '', ignoreId);
	ignoreId = ignoreId.concat(dataReviewsAllTake4?.items?.map((item: ReviewsEntity) => item?.id));
	const ignoreIdVehicle = dataReviewsAllTake4?.items?.map((item: ReviewsEntity) => item?.id);
	// const dataReviewsVehicleTake4 = await getReviewsVehicleTake4(ignoreIdVehicle);
	const dataReviewsVehicleTake4 = await getReviews(4, process.env.reviewsCategoryVehicle as string, ignoreIdVehicle);
	// const dataReviewsNewTake4 = await getReviewsNewTake4(ignoreId);
	const dataReviewsNewTake4 = await getReviews(4, process.env.reviewsCategoryNew as string, ignoreId);

	// Pass data to the page via props
	return {
		props: {
			reviewsNewTake3: dataReviewsNewTake3 || [],
			reviewsAll: dataReviewsAllTake4 || [],
			reviewsNewTake4: dataReviewsNewTake4 || [],
			reviewsVehicleTake4: dataReviewsVehicleTake4 || [],
			ignoreId: ignoreId || [],
		},
	};
}

const VehicleReviews: React.FC = (props: any) => {
	const { reviewsNewTake3, reviewsAll, reviewsNewTake4, reviewsVehicleTake4, ignoreId } = props;
	const [current] = useState<BreadcrumbItem>({ title: 'Đánh giá xe' });
	const [reViewsAll] = useState<ReviewsEntity[]>(reviewsAll?.items);
	const [reViewsNew] = useState<ReviewsEntity[]>(reviewsNewTake4?.items);
	const [reViewsVehicle] = useState<ReviewsEntity[]>(reviewsVehicleTake4?.items);

	const tabItems: TabsProps['items'] = [
		{
			key: 'tat-ca',
			label: `Tất cả`,
			children: (
				<Skeleton loading={false} active>
					<GridTemplate1
						className={'border-b-2 mb-5 pb-5'}
						items={reViewsAll}
						hasTag={true}
						archiveLink={'/danh-gia-xe'}
					/>
				</Skeleton>
			),
		},
		{
			key: 'tin-moi',
			label: `Tin mới`,
			children: (
				<GridTemplate1
					className={'border-b-2 mb-5 pb-5'}
					items={reViewsNew}
					hasTag={true}
					archiveLink={'/danh-gia-xe'}
				/>
			),
		},
		{
			key: 'danh-gia-xe',
			label: `Đánh giá xe`,
			children: (
				<GridTemplate1
					className={'border-b-2 mb-5 pb-5'}
					items={reViewsVehicle}
					hasTag={true}
					archiveLink={'/danh-gia-xe'}
				/>
			),
		},
	];
	// console.log({ hook: appState });
	// console.log({ reviewNewLoading, reViewAllLoading, reviewVehicleLoading });
	return (
		<>
			<NextSeo title={'Đánh giá xe'} description={'Đánh giá xe'}></NextSeo>
			<CarouselBanner />
			<CarPrice reviewsNew={reviewsNewTake3?.items} />
			<Breadcrumb current={current} />
			<div className="container mt-8">
				<div className={`mb-5 pb-5`}>
					<Tabs defaultActiveKey="1" items={tabItems} className={`tabs-news`} />
				</div>
			</div>
			<div className="container">
				<div className="grid grid-cols-12 md:gap-x-8 gap-x-0 md:gap-y-0 gap-y-4 mb-8">
					<div className="lg:col-span-9 col-span-12" id={`review-list`}>
						<ListHasTag ignoreId={ignoreId} archiveLink={'/danh-gia-xe'} scrollToElement={'review-list'} />
					</div>
					<div className="lg:col-span-3 col-span-12">
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
		</>
	);
};

export default memo(VehicleReviews);

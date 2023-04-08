/** */
import React, { createContext, memo, useState } from 'react';
import CarPriceComponent from '@/components/CarPrice';
import Content from './components/Content';
import News from '@/components/News';
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import Head from '@/components/Head';
import { BannerPositionEnum, ReviewsEntity } from '@/graphql/type.interface';
import Carousel from '@/components/Carousel';
import { useGetListReviewsQuery } from '@/graphql/queries/getListReviews.generated';

export const InstallmentEstimateDetailLink = 'du-toan-tra-gop-chi-tiet';

export const Context = createContext({});

const CarPrice: React.FC = () => {
	const lstItem: BreadcrumbItem[] = [{ title: 'Giá xe', url: '/gia-xe' }];

	const [current, setCurrent] = useState<BreadcrumbItem>({ title: '' });
	const [reViews, setReViews] = useState<ReviewsEntity[]>([]);

	const { loading: reViewLoading } = useGetListReviewsQuery({
		fetchPolicy: 'cache-first',
		variables: {
			input: {
				take: 3,
				skip: 1,
				category: process.env.reviewsCategoryNew,
			},
		},
		onCompleted: (res) => {
			setReViews((res?.getListReviews?.items as ReviewsEntity[]) || []);
			// console.log('Car', { appState });
		},
	});

	return (
		<>
			<Head title={`Giá Xe ${current?.title ? '- ' + current?.title : ''}`} />
			<Carousel position={BannerPositionEnum.WEBSITE_BODY} />
			<CarPriceComponent reviewsNew={reViews} reviewsLoading={reViewLoading} />
			<Breadcrumb lstItem={lstItem} current={current} />
			<div className="container md:pt-[39px] pt-0 px-[19px] grid grid-cols-12 lg:gap-[39px] box-border">
				<div className="xl:col-span-9 lg:col-span-8 col-span-12">
					<Content setCurrentBreadcrumb={setCurrent} />
				</div>
				<div className="xl:col-span-3 lg:col-span-4 col-span-12">
					<News ads={true} />
				</div>
			</div>
		</>
	);
};

export default memo(CarPrice);

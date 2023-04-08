import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import Carousel from '@/components/Carousel';
import News from '@/components/News';
import { BannerPositionEnum } from '@/graphql/type.interface';
import React, { memo, useState } from 'react';
import Content from './components/Content';
import NewsPromotion from './components/NewsPromotion';

const Promotion = () => {
	const [current] = useState<BreadcrumbItem>({ title: 'Khuyến mãi' });

	return (
		<>
			<Carousel position={BannerPositionEnum.WEBSITE_BODY} />
			<Breadcrumb current={current} />
			<div className="container grid grid-cols-12 lg:gap-[59px] box-border">
				<div className="news-promotion col-span-12 py-[21px] box-border">
					<NewsPromotion />
				</div>
			</div>

			<div className="container grid grid-cols-12 lg:gap-[59px] box-border">
				<div className="xl:col-span-9 lg:col-span-8 col-span-12">
					<Content />
				</div>
				<div className="xl:col-span-3 lg:col-span-4 col-span-12">
					<News />
				</div>
			</div>
		</>
	);
};

export default memo(Promotion);

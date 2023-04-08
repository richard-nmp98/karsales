import React, { memo, useState } from 'react';
import Content from './components/Content';
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import { BannerPositionEnum } from '@/graphql/type.interface';
import Carousel from '@/components/Carousel';

type Props = {};

const Insurance: React.FC<Props> = () => {
	const [current] = useState<BreadcrumbItem>({ title: 'Mua xe' });

	return (
		<>
			<Carousel position={BannerPositionEnum.WEBSITE_BODY} />
			<Breadcrumb current={current} />
			<div className="container container-sm grid grid-cols-12 lg:gap-[59px] box-border">
				<div className="col-span-12">
					<Content />
				</div>
			</div>
		</>
	);
};

export default memo(Insurance);

import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import Carousel from '@/components/Carousel';
import { BannerPositionEnum } from '@/graphql/type.interface';
import React, { memo, useState } from 'react';
import ExamPreparation from './components/exam-preparation';
import PrestigeDrivingSchool from './components/prestige-driving-school';
import DownloadApp from '../_/components/DownloadApp';

const CarAcademy: React.FC = () => {
	const [current] = useState<BreadcrumbItem>({ title: 'Học viện ôtô' });

	return (
		<>
			<Carousel position={BannerPositionEnum.WEBSITE_BODY} />
			<Breadcrumb current={current} />
			<div className="container md:pt-[78px] pt-[18px] mb-[100px]">
				<ExamPreparation />
				<PrestigeDrivingSchool />
			</div>
			<DownloadApp />
		</>
	);
};

export default memo(CarAcademy);

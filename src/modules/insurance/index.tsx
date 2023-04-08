import React, { memo, useState } from 'react';
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import News from '@/components/News';
import Content from './components/Content';
import MainSlide from '@/components/Swiper/Main';

const Insurance: React.FC = () => {
	const slide = [
		{
			title: 'Bronco Family',
			thumbnail:
				'https://www.freewebheaders.com/wp-content/gallery/cars/honda-small-sports-ev-concept-electric-car-website-header.jpg',
			description: 'Bronco Family',
		},
		{
			title: 'Bronco Family',
			thumbnail:
				'https://www.freewebheaders.com/wp-content/gallery/cars/bmw-4-gran-coupe-car-and-desert-landscape-web-header.jpg',
			description: 'Bronco Family',
		},
	];
	const [current] = useState<BreadcrumbItem>({ title: 'Bảo hiểm' });

	return (
		<>
			<MainSlide id={'main-slide'} items={slide} />
			<Breadcrumb current={current} />
			<div className="container grid grid-cols-12 lg:gap-[59px] box-border">
				<div className="xl:col-span-9 lg:col-span-8 col-span-12">
					<Content />
				</div>
				<div className="xl:col-span-3 lg:col-span-4 col-span-12">
					<News ads={true} />
				</div>
			</div>
		</>
	);
};

export default memo(Insurance);

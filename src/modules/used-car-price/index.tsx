import React, { memo, useState } from 'react';
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import MainSlide from '@/components/Swiper/Main';
import Content from './components/Content';

const UsedCarPrice: React.FC = () => {
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
	const [current] = useState<BreadcrumbItem>({ title: 'Giá Xe Cũ' });

	return (
		<>
			<MainSlide id={'main-slide'} items={slide} />
			<Breadcrumb current={current} />
			<div className="title py-[31px] bg-[#ededed]">
				<div className="container">
					<p className="max-w-[670px] font-normal text-base text-[#797979]">
						Dựa trên kho dữ liệu khổng lồ trên cả nước về các mẫu xe đã qua sử dụng. KARSALE đưa ra các phân tích về giá
						cả theo các yêu tố nh hưởng dến xe đã qua sử dụng.
					</p>
				</div>
			</div>
			<div className="ssm:container container-sm grid grid-cols-12 lg:gap-[59px] box-border">
				<div className="col-span-12">
					<Content />
				</div>
			</div>
		</>
	);
};

export default memo(UsedCarPrice);

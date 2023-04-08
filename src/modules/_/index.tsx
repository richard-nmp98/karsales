import Head from '@/components/Head';
import { BannerPositionEnum } from '@/graphql/type.interface';
import { memo } from 'react';
import AutoExperience from './components/AutoExperience';
import Carousel from '@/components/Carousel';
import CarPrice from './components/CarPrice';
import DownloadApp from './components/DownloadApp';
import Introduce from './components/Introduce';
import Newsletter from './components/Newsletter';
import VehiclesReview from './components/VehiclesReview';
import VehiclesSale from './components/VehiclesSale';

type Props = {};

const HomePage = memo<Props>(() => {
	return (
		<>
			<Head title="Trang chủ" />
			<Carousel />
			<Introduce />
			<div className="container mt-[22px] md:mt-[50px]">
				<div className="px-[12px]">
					<VehiclesSale />
					<Newsletter />
					<VehiclesReview />
				</div>
				<Carousel position={BannerPositionEnum.WEBSITE_BODY} />
				<div className="px-[19px]">
					<CarPrice />
					<AutoExperience />
				</div>
				<DownloadApp />
			</div>
		</>
	);
});

export default memo(HomePage);

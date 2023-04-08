import Brand from '@/components/Brand';
import React, { memo } from 'react';
import TitleSection from '../TitleSection';
import Ads from './Ads';
import BrandWidthCar from './BrandWidthCar';

const CarPrice: React.FC = () => {
	return (
		<>
			<TitleSection>
				<p>Giá xe ôtô</p>
			</TitleSection>
			<div className="block sm:flex justify-between gap-[20px] mb-[31px] items-start">
				<div>
					<span className="text-lg text-blue-text">
						<span>Bảng giá cập nhật</span>
						<span className="font-bold">&nbsp;tháng 4/ 2022&nbsp;</span>
						<span>của hơn 30 hãng xe tại Việt Nam.</span>
					</span>
				</div>
				{/* <Link href="/read-more" className="flex gap-2 items-center whitespace-nowrap">
					<span className="font-bold text-blue-text">Xem tất cả giá xe</span>
					<img src="/images/icons/arrowRightCircle.svg" alt="" />
				</Link> */}
			</div>
			<Brand />
			<p className="flex gap-2 items-center pb-[10px] pt-[50px] font-bold text-blue-text text-2xl">Được xem nhiều</p>
			<BrandWidthCar />
			<Ads />
		</>
	);
};

export default memo(CarPrice);

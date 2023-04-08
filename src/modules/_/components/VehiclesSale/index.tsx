import Link from 'next/link';
import React, { memo } from 'react';
import TitleSection from '../TitleSection';
import Card from './Card';

const VehiclesSale: React.FC = () => {
	return (
		<>
			<TitleSection>
				<div className="flex justify-between items-center gap-3.5 w-full flex-wrap">
					<p>Xe đang bán</p>
					<div className="flex flex-wrap">
						<Link
							href={`/mua-xe`}
							className="flex items-center gap-[5px] font-bold text-sm text-[#003DC6] whitespace-nowrap"
						>
							Xem tất cả xe
							<img src="/images/icons/arrowRightCircle.svg" alt="" />
						</Link>
					</div>
				</div>
			</TitleSection>
			<Card />
		</>
	);
};

export default memo(VehiclesSale);

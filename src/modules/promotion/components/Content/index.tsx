import BrandComponent from '@/components/Brand';
import React, { memo } from 'react';
import CardPromotion from '../CardPromotion';
import { Wrapper } from './styled';

const Content: React.FC = () => {
	return (
		<>
			<Wrapper className="grid grid-cols-12 mb-[100px]">
				<div className="col-span-12 py-[29px] flex flex-col">
					<div className="tabs flex mb-4 gap-[31px]">
						<div className="text-secondary-500 font-semibold py-2 cursor-pointer xl:text-[32px] sm:text-[20px] text-[24px] tab">
							Khuyến mãi <span className="text-pink-main">HOT</span>
						</div>
					</div>
				</div>
				<div className="col-span-12 list-promotion grid grid-cols-12 gap-[20px]">
					{new Array(3).fill(null).map((item, index) => (
						<div className="lg:col-span-6 xl:col-span-4 md:col-span-4 ssm:col-span-6 col-span-12" key={index}>
							<CardPromotion />
						</div>
					))}
				</div>
				<div className="col-span-12 py-[29px] flex flex-col">
					<div className="tabs flex mb-4 gap-[31px]">
						<div className="text-secondary-500 font-semibold py-2 cursor-pointer xl:text-[32px] sm:text-[20px] text-[24px] tab">
							Các hãng xe đang có khuyến mãi
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<BrandComponent gridCols="md:grid-cols-6 grid-cols-4" maxData={12} />
				</div>
			</Wrapper>
		</>
	);
};

export default memo(Content);

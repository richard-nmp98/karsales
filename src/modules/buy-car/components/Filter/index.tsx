import Brand from '@/components/Select/Brand';
import Model from '@/components/Checkbox/Model';
import React, { memo } from 'react';
import { Wrapper } from './styled';
import Status from '@/components/Select/Status';
import Currency from '@/components/Select/Currency';
import { MaxPrice, MinPrice } from '@/components/Input/MinMaxPrice';
import Place from '@/components/Select/Place';
import { AppRoutes } from '@/helpers/app.routes';

const Filter: React.FC = () => {
	return (
		<>
			<Wrapper className="py-[39px] pl-[5px] pr-[25px] box-border">
				<div className="flex flex-wrap gap-[14px]">
					<img src="/images/icons/filter.svg" alt="" className="icon" />
					<p className="font-bold text-base">Tìm kiếm nâng cao</p>
				</div>
				<div className="line w-full h-[1px] bg-[#E5E5E5] mt-[7.5px] mb-[19.5px]" />
				<div className="mb-[15px]">
					<p className="font-bold text-sm mb-[13px] text-date-500">Trạng thái xe</p>
					<Status path={AppRoutes.buyCar} />
				</div>
				<div className="line w-full h-[1px] bg-[#E5E5E5] mt-[7.5px] mb-[19.5px]" />
				<div className="mb-[15px]">
					<p className="font-bold text-sm mb-[13px] text-date-500">Tỉnh thành </p>
					<Place path={AppRoutes.buyCar} />
				</div>
				<div className="mb-[15px]">
					<p className="font-bold text-sm mb-[13px] text-date-500">Hãng xe </p>
					<Brand path={AppRoutes.buyCar} />
				</div>
				<div className="line w-full border-dashed border-[0.5px] border-[#E2E2E2] mt-[8.5px] mb-[14px] col-span-12" />
				<div>
					<p className="font-bold text-sm mb-[13px] text-date-500">Mẫu xe </p>
					<Model path={AppRoutes.buyCar} />
				</div>
				<div className="line w-full border-dashed border-[0.5px] border-[#E2E2E2] mt-[8.5px] mb-[14px] col-span-12" />
				<div className="mb-[15px]">
					<div className="mb-[15px] flex flex-wrap gap-[10px]">
						<div className="w-full">
							<p className="font-bold mb-[7px] text-sm text-date-500">Tiền tệ</p>
							<Currency path={AppRoutes.buyCar} />
						</div>
						<p className="font-bold text-sm text-date-500">Giá tối thiểu </p>
						<div className="w-full flex justify-between items-center gap-[10px] mb-[10px] font-bold text-sm">
							<MinPrice path={AppRoutes.buyCar} />
						</div>
						<p className="font-bold text-sm text-date-500">Giá tối đa </p>
						<div className="w-full flex justify-between items-center gap-[10px] mb-[10px] font-bold text-sm">
							<MaxPrice path={AppRoutes.buyCar} />
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(Filter);

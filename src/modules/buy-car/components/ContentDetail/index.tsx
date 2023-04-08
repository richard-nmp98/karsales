import { PostEntity } from '@/graphql/type.interface';
import { formatConditionType, formatTransmisstionType } from '@/helpers/common';
import React, { memo } from 'react';
import { Wrapper } from './styled';

type Props = {
	post?: PostEntity | null;
};

const ContentDetail: React.FC<Props> = ({ post }) => {
	return (
		<>
			<Wrapper className="w-full mb-[0px]">
				<div className="pb-[9px] flex flex-col">
					<div className="tabs flex mb-0 gap-[31px]">
						<div className="text-secondary-500 font-semibold pb-2 cursor-pointer xl:text-[32px] sm:text-[20px] text-[24px] tab">
							Thông tin xe
						</div>
					</div>
				</div>
				<div className="grid grid-cols-12 sm:gap-[10px] gap-x-[20px] gap-y-[5px] mb-[21px]">
					<div className="lg:col-span-6 sm:col-span-4 ssm:col-span-6 col-span-12 font-sm text-base flex whitespace-nowrap sm:gap-[10px] gap-[10px]">
						<div className="sm:w-[100px]">Năm sản xuất:</div>
						<div className="font-bold text-base">{post?.year ?? '-'}</div>
					</div>
					<div className="lg:col-span-6 sm:col-span-4 ssm:col-span-6 col-span-12 font-sm text-base flex whitespace-nowrap sm:gap-[10px] gap-[10px]">
						<div className="sm:w-[100px]">Tình trạng: </div>
						<div className="font-bold text-base">{formatConditionType(post?.condition ?? '-')}</div>
					</div>
					<div className="lg:col-span-6 sm:col-span-4 ssm:col-span-6 col-span-12 font-sm text-base flex whitespace-nowrap sm:gap-[10px] gap-[10px]">
						<div className="sm:w-[100px]">Tỉnh thành: </div>
						<div className="font-bold text-base">{post?.city?.name ?? '-'}</div>
					</div>
					<div className="lg:col-span-6 sm:col-span-4 ssm:col-span-6 col-span-12 font-sm text-base flex whitespace-nowrap sm:gap-[10px] gap-[10px]">
						<div className="sm:w-[100px]">Kiểu dáng: </div>
						<div className="font-bold text-base">{post?.bodyType?.name ?? '-'}</div>
					</div>
					<div className="lg:col-span-6 sm:col-span-4 ssm:col-span-6 col-span-12 font-sm text-base flex whitespace-nowrap sm:gap-[10px] gap-[10px]">
						<div className="sm:w-[100px]">Odo: </div>
						<div className="font-bold text-base">{post?.odometer?.toLocaleString('it-IT') ?? '-'} km</div>
					</div>
					<div className="lg:col-span-6 sm:col-span-4 ssm:col-span-6 col-span-12 font-sm text-base flex whitespace-nowrap sm:gap-[10px] gap-[10px]">
						<div className="sm:w-[100px]">Hộp số: </div>
						<div className="font-bold text-base">{formatTransmisstionType(post?.transmission ?? '-')}</div>
					</div>
					<div className="lg:col-span-6 sm:col-span-4 ssm:col-span-6 col-span-12 font-sm text-base flex whitespace-nowrap sm:gap-[10px] gap-[10px]">
						<div className="sm:w-[100px]">Hệ dẫn động: </div>
						<div className="font-bold text-base">{post?.driverType?.nameVi ?? '-'}</div>
					</div>
					<div className="lg:col-span-6 sm:col-span-4 ssm:col-span-6 col-span-12 font-sm text-base flex whitespace-nowrap sm:gap-[10px] gap-[10px]">
						<div className="sm:w-[100px]">Nhiên liệu: </div>
						<div className="font-bold text-base">{post?.fuelType?.name ?? '-'}</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(ContentDetail);

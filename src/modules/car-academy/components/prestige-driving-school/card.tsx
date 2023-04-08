import React, { memo } from 'react';
import { Wrapper } from './card.styled';
import Link from 'next/link';
import { CenterDriverLicenseEntity } from '@/graphql/type.interface';

type Props = {
	data?: CenterDriverLicenseEntity;
};

const Card: React.FC<Props> = ({ data }) => {
	return (
		<>
			<Wrapper className="p-[9px] pb-[31px] h-full border-box grid grid-cols-12 sssm:gap-[28px] gap-x-0 w-full">
				<div className="sm:col-span-3 col-span-12 sm:h-[unset] h-[150px] overflow-hidden relative">
					<img
						className="sm:block hidden w-full"
						src={`${data?.medias ? data?.medias[0]?.mediaDetail?.filePathOriginal ?? '' : ''}`}
						alt=""
					/>
					<div
						className="w-full h-full sm:hidden"
						style={{
							background: `url(${
								data?.medias ? data?.medias[0]?.mediaDetail?.filePathOriginal ?? '' : ''
							}) center center / 100% no-repeat`,
						}}
					></div>
				</div>
				<div className="sm:col-span-9 col-span-12">
					<div className="name mb-[10px]">
						<p className="text-[20px] font-bold">{data?.title ?? ''}</p>
					</div>
					<div className="addresses">
						<div className="address flex gap-[8px]">
							<div className="flex items-start w-[12px] pt-[7px]">
								<img className="icon min-w-[12px] w-[12px]" src="/images/icons/geo.svg" alt="" />
							</div>
							<p>
								<span>Trụ sở:&nbsp;</span>
								<span className="font-bold">{data?.address ?? '-'}</span>
							</p>
						</div>
						<div className="address flex gap-[8px] items-start">
							<div className="flex items-start w-[12px] pt-[7px]">
								<img className="icon min-w-[12px] w-[12px]" src="/images/icons/phone-kar.svg" alt="" />
							</div>
							<p>
								<span>Hotline:&nbsp;</span>
								{data?.phone ? (
									<Link target="_blank" href={`tel:${data?.phone ?? ''}`}>
										{data?.phone ?? '-'}
									</Link>
								) : (
									<span className="font-bold">-</span>
								)}
							</p>
						</div>
						{data?.website ? (
							<div className="address flex gap-[8px]">
								<div className="flex items-start w-[12px] pt-[7px]">
									<img className="icon min-w-[12px] w-[12px]" src="/images/icons/global.svg" alt="" />
								</div>
								<p>
									<span>Website:&nbsp;</span>
									<span className="font-bold underline text-blue-main">
										<Link target="_blank" href={data?.website ?? ''}>
											{data?.website ?? '-'}
										</Link>
									</span>
								</p>
							</div>
						) : (
							<></>
						)}
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(Card);

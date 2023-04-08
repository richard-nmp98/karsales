import React, { memo, useState } from 'react';
import { Wrapper } from './styled';
import Card from './card';
import Pagination from '@/components/Pagination';
import { useCenterDriverLisensePaginationQuery } from '@/graphql/queries/centerDriverLisensePagination.generated';
import { FetchPolicyEnum } from '@/helpers/constant';
import { PaginationProps, Skeleton } from 'antd';
import PlaceSetParam from '@/components/Select/PlaceSetParam';
import DistrictSetParam from '@/components/Select/DistrictSetParam';

const MAXDATA = 10;

const PrestigeDrivingSchool: React.FC = () => {
	const [page, setPage] = useState(1);
	const [totalItem, setTotalItem] = useState(0);
	const [province, setProvince] = useState('');
	const [district, setDistrict] = useState('');

	const { data: dataCenterDriverLisensePagination, loading: loadingCenterDriverLisensePagination } =
		useCenterDriverLisensePaginationQuery({
			fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
			variables: {
				input: {
					skip: page,
					take: MAXDATA,
					province: province,
					district: district,
				},
			},
			onCompleted(data) {
				if (data && data.centerDriverLisensePagination) {
					setTotalItem(data.centerDriverLisensePagination.meta.totalItems);
				}
			},
		});

	const handleOnChangePage: PaginationProps['onChange'] = (featurePage) => {
		setPage(featurePage);
	};

	return (
		<>
			<Wrapper>
				<div className="line mb-[13px]"></div>
				<div className="mb-[31px]">
					<p className="font-normal lg:text-[32px] sm:text-[24px] text-[20px] text-blue-main mb-[20px]">
						Tìm Nơi Học Lái Xe UY Tín
					</p>
				</div>
				<div className="rounded overflow-hidden">
					<div className="filter ssm:py-[23px] py-[10px] ssm:px-[37px] px-[10px] border-box bg-[#F0F0F0]">
						<div className="flex flex-nowrap max-w-[650px] w-full sm:gap-[60px] ssm:gap-[20px] gap-[5px]">
							<div className="w-6/12">
								<p className="font-bold mb-[13px]">Tỉnh/ hành phố</p>
								<PlaceSetParam province={province} set={setProvince} />
							</div>
							<div className="w-6/12">
								<p className="font-bold mb-[13px]">Quận/ Huyện</p>
								<DistrictSetParam district={district} provineCode={province} set={setDistrict} />
							</div>
						</div>
					</div>
					<div className="content ssm:py-[19px] py-[10px] ssm:px-[37px] px-[10px] border-box bg-[#FAFAFA]">
						<div className="found-text text-[12px] pl-[5px] mb-[32px]">{totalItem} kết quả tìm được</div>
						<div className="grid grid-cols-12 sssm:gap-x-[7px] gap-x-0 gap-y-[31px]">
							{loadingCenterDriverLisensePagination
								? new Array(4).fill(null).map((_, index) => (
										<div className="lg:col-span-6 col-span-12" key={index}>
											<Skeleton active />
										</div>
								  ))
								: dataCenterDriverLisensePagination?.centerDriverLisensePagination?.items.map((item, index) => (
										<div className="lg:col-span-6 col-span-12" key={index}>
											<Card data={item} />
											{dataCenterDriverLisensePagination?.centerDriverLisensePagination?.items ? (
												<div
													className={`line-card ${
														index ===
														dataCenterDriverLisensePagination?.centerDriverLisensePagination?.items?.length - 2
															? 'lg:hidden'
															: ''
													} ${
														index ===
														dataCenterDriverLisensePagination?.centerDriverLisensePagination?.items?.length - 1
															? 'hidden'
															: ''
													}`}
												></div>
											) : (
												<></>
											)}
										</div>
								  ))}
							<div className="col-span-12 flex justify-center">
								<Pagination
									wrapperClassName={'text-center kar-pagination-small experience-pagination'}
									total={totalItem}
									pageSize={MAXDATA}
									current={page}
									onChange={handleOnChangePage}
								/>
							</div>
						</div>
					</div>
					<div className="mt-[76px]">
						<div className="line"></div>
						<p className="font-normal lg:text-[32px] sm:text-[24px] text-[20px] text-blue-main mb-[9px]">
							Tải APP KARSALES{' '}
						</p>
						<p>
							Không chỉ là nền tảng mua bán trao đổi xe chuyên nghiệp, Karsales còn nhiều tiện ích hữu ích đáng được
							trải nghiệm.
						</p>
						<p>Tải ngay ứng dụng và cùng khám phá với Karsales nhé!</p>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(PrestigeDrivingSchool);

import React, { memo } from 'react';
import { Wrapper } from './styled';
import { Skeleton, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table/interface';
import Brand from '@/components/Brand';
import BrandOption from '@/components/Select/Brand';
import { useRouter } from 'next/router';
import { AppRoutes } from '@/helpers/app.routes';
import { useGetListBrandsQuery } from '@/graphql/queries/getListBrands.generated';
import { ColorSelectProps } from '@/components/SelectOptionCustom';
import { useGetListModelsQuery } from '@/graphql/queries/getListModels.generated';
import { useGetListVersionsQuery } from '@/graphql/queries/getListVersions.generated';
import { CarVersionEntity } from '@/graphql/type.interface';
import { FetchPolicyEnum, keysQuery } from '@/helpers/constant';
import Model from '@/components/Select/Model';
import { checkArraySelect, handleObjectQuery } from '@/helpers/common';

const columns: ColumnsType<CarVersionEntity> = [
	{
		title: 'Phiên bản',
		dataIndex: 'name',
		width: '65%',
		defaultSortOrder: 'descend',
		sorter: (a: CarVersionEntity, b: CarVersionEntity) => (a?.name ? a?.name?.localeCompare(b?.name ?? '') : 0),
	},
	{
		title: 'Giá (vnđ)',
		dataIndex: 'price',
		width: '35%',
		defaultSortOrder: 'descend',
		sorter: (a: CarVersionEntity, b: CarVersionEntity) =>
			a?.priceCarVersion ? a?.priceCarVersion?.toString()?.localeCompare(b?.priceCarVersion?.toString() ?? '') : 0,
		render: (cell: any, row: CarVersionEntity, index: any) => {
			return Number(row?.priceCarVersion).toLocaleString('it-IT');
		},
	},
];

const RenderImage: React.FC<{ version?: CarVersionEntity[] }> = (props) => {
	let count = 0;
	return (
		<div className="sm:col-span-4 col-span-12 gap-[20px] h-full">
			{props?.version?.length === 0 ? (
				<></>
			) : (
				props?.version?.map((item, index) => {
					if (count < 1 && item?.mediaDetail && item?.mediaDetail?.filePathOriginal) {
						count = count + 1;
						return (
							<>
								<img
									key={index}
									className="w-full rounded mb-[5px] sm:hidden block"
									style={{ border: 0 }}
									src={item?.mediaDetail?.filePathOriginal}
									alt=""
								/>
								<div
									className="w-full h-full max-h-[295px] sm:block hidden"
									style={{
										background: `url('${item?.mediaDetail?.filePathOriginal}') center top / 100% no-repeat`,
										// backgroundSize: '100% auto',
										// backgroundPosition: 'top',
										// backgroundRepeat: 'no-repeat',
									}}
								></div>
							</>
						);
					}
				})
			)}
		</div>
	);
};

const ListedPrice: React.FC = () => {
	const router = useRouter();

	useGetListBrandsQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		onCompleted(res) {
			if (res && res.getListBrands && !router.query[keysQuery.BRAND]) {
				handleObjectQuery(router, keysQuery.BRAND, res?.getListBrands[0]?.slug, AppRoutes.carPrice);
			}
		},
	});

	const { data: dataModels } = useGetListModelsQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			input: {
				brand: checkArraySelect(router.query[keysQuery.BRAND]),
			},
		},
		onCompleted(res) {
			if (res && res?.getListModels) {
				if (!router?.query[keysQuery?.MODEL]) {
					handleObjectQuery(router, keysQuery.MODEL, res?.getListModels[0]?.slug, AppRoutes.carPrice);
				} else {
					const findIndex = res?.getListModels.findIndex((item) => item.slug === router.query[keysQuery.MODEL]);
					if (findIndex === -1) {
						handleObjectQuery(router, keysQuery.MODEL, res?.getListModels[0]?.slug, AppRoutes.carPrice);
					}
				}
			}
		},
	});

	const { data: dataVersion, loading: loadingVersion } = useGetListVersionsQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			input: {
				// eslint-disable-next-line
				model: dataModels?.getListModels?.find((item) => item?.slug === router.query[keysQuery?.MODEL])?.id as string
			},
		},
	});

	return (
		<>
			<Wrapper className="grid grid-cols-12 gap-[20px]">
				<div className="sm:col-span-6 col-span-12">
					<div className="gap-[17px] w-full grid grid-cols-12">
						<div className="col-span-6">
							<p className="font-bold text-sm text-[#797979] mb-3">Hãng xe:</p>
							<BrandOption color={ColorSelectProps.BLUE} showTotalPost={false} all={false} path={AppRoutes.carPrice} />
						</div>
						<div className="col-span-6">
							<p className="font-bold text-sm text-[#797979] mb-3">Dòng xe:</p>
							<Model color={ColorSelectProps.BLUE} showTotalPost={false} all={false} path={AppRoutes.carPrice} />
						</div>
					</div>
					<div className="col-span-12">
						<div className="price-detail gap-[17px] w-full grid grid-cols-12">
							<div className="col-span-12">
								{/* <p className="date font-normal tex-[14px] text-[#797979] mb-8">(Cập nhật ngày 23/02/2022)</p> */}
								{loadingVersion ? (
									<div className="grid grid-cols-12 gap-[15px]">
										<div className="sm:col-span-8 col-span-12">
											<Skeleton active />
										</div>
										<div className="sm:col-span-4 col-span-12 gap-[20px]">
											<div className="w-full mb-[10px]">
												<Skeleton active className="w-full-important" />
											</div>
										</div>
									</div>
								) : (
									<div className="grid grid-cols-12 gap-[15px]">
										<div className="col-span-12">
											{/* <div
												className="text-base font-normal text-[#252525] mb-9"
												dangerouslySetInnerHTML={{ __html: descriptionDemo }}
											/> */}
											{dataVersion?.getListVersions && dataVersion?.getListVersions?.length > 0 ? (
												<Table columns={columns} dataSource={dataVersion?.getListVersions ?? []} pagination={false} />
											) : (
												<img src="/images/404/car-price-not-found.svg" className="w-9/12 m-auto my-[20px]" alt="" />
											)}
											<div className="links flex flex-wrap gap-[10px] mt-[10px] lg:justify-start justify-center">
												<button
													onClick={() => {
														const as: any = undefined;
														router.replace(
															{
																pathname: AppRoutes.carPrice,
																query: {
																	...router.query,
																	tab: 'gia-lan-banh',
																},
															},
															as,
															{ shallow: true },
														);
													}}
													className="py-2.5 px-2.5 whitespace-nowrap bg-blue-text rounded text-white font-bold text-base w-[150px]"
													style={{ border: 0 }}
												>
													Tính giá lăn bánh
												</button>
												<button
													onClick={() => {
														const as: any = undefined;
														router.replace(
															{
																pathname: AppRoutes.carPrice,
																query: {
																	...router.query,
																	tab: 'du-toan-tra-gop',
																},
															},
															as,
															{ shallow: true },
														);
													}}
													className="py-2.5 px-2.5 whitespace-nowrap bg-[#FFD726] rounded text-black font-bold text-base w-[150px]"
													style={{ border: 0 }}
												>
													Ưu đãi trả góp
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="sm:col-span-6 col-span-12">
					<div className="sm:col-span-6 col-span-12 h-full">
						<RenderImage version={dataVersion?.getListVersions || []} />
					</div>
				</div>
				<div className="line w-full h-[1px] bg-[#E2E2E2] mt-[10px] mb-[10px] col-span-12" />
				<div className="col-span-12">
					<div className="pb-[9px] flex flex-col">
						<div className="tabs flex mb-4 gap-[31px]">
							<div className="text-secondary-500 font-semibold py-2 cursor-pointer xl:text-[32px] sm:text-[20px] text-[24px] tab">
								Xe đang bán trên Karsales
							</div>
						</div>
					</div>
					<Brand gridCols="md:grid-cols-6 grid-cols-4" maxData={18} link={AppRoutes.buyCar} />
				</div>
			</Wrapper>
		</>
	);
};

export default memo(ListedPrice);

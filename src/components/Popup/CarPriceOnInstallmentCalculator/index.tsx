import React, { memo, ReactNode, useEffect, useState } from 'react';
import { Wrapper } from './styled';
import { InputNumber, Modal, Skeleton } from 'antd';
import { useGetListBrandsQuery } from '@/graphql/queries/getListBrands.generated';
import { useGetListModelsQuery } from '@/graphql/queries/getListModels.generated';
import { useGetListVersionsQuery } from '@/graphql/queries/getListVersions.generated';
import { calculateRollingPriceNoFixed, handleInstallmentEstimateDetailLink } from '@/helpers/common';
import { useGetCarPurchaseCostProvinceByIdQuery } from '@/graphql/queries/getCarPurchaseCostProvinceById.generated';
import { useProvincesQuery } from '@/graphql/queries/provinces.generated';
import {
	borrowedTime as lstBorrowedTime,
	CONDITIONLINK,
	CONDITIONTYPE,
	COUNTRY_DEFAULT,
	FetchPolicyEnum,
	keysQuery,
	prepaidPercentage,
} from '@/helpers/constant';
import { useRouter } from 'next/router';
import { PostEntity } from '@/graphql/type.interface';
import SelectOptionCustom, { ItemSelectProps } from '@/components/SelectOptionCustom';

interface PropsSelectType {
	defaultValue?: string | number | null;
	value?: string | number | null;
	event?: any;
	loading?: boolean;
	show?: boolean;
	items?: ItemSelectProps[];
}

interface WheelchairPriceProps {
	brands?: PropsSelectType;
	models?: PropsSelectType;
	versions?: PropsSelectType;
	province?: PropsSelectType;
	carPrice?: {
		value?: string | number;
		event?: any;
	};
}

const WheelchairPrice: React.FC<WheelchairPriceProps> = (props) => {
	const propsOption = [
		{
			text: 'HÃNG XE',
			data: props?.brands,
			key: 'brand',
		},
		{
			text: 'DÒNG XE',
			data: props?.models,
			key: 'model',
		},
		{
			text: 'PHIÊN BẢN',
			data: props?.versions,
			key: 'version',
		},
	];

	return (
		<>
			{propsOption?.map((item, index) => {
				if (item?.data?.show) {
					return (
						<div className="grid grid-cols-12 gap-[10px] mb-[10px] items-start" key={index}>
							<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979] pt-[10px]">{item?.text}</div>
							<div className="sm:col-span-8 col-span-12">
								{item?.data?.loading ? (
									<div className="skeleton-input-full-width w-full">
										<Skeleton.Input active />
									</div>
								) : (
									<div>
										<SelectOptionCustom
											placeHolder={`Chọn một ${item?.text?.toLocaleLowerCase()}`}
											// defaultValue={item?.data?.defaultValue}
											value={item?.data?.value ?? (item?.data?.items ? item?.data?.items[0]?.value : '')}
											items={item?.data?.items ?? []}
											onChange={item?.data?.event}
										/>
									</div>
								)}
							</div>
						</div>
					);
				}
			})}
			<div className="grid grid-cols-12 gap-[10px] mb-[20px] sm:mb-[10px] items-start">
				<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979] pt-[10px]">GIÁ XE</div>
				<div className="sm:col-span-8 col-span-12">
					<div>
						<InputNumber
							defaultValue={Number(props?.carPrice?.value)}
							placeholder="Giá xe"
							formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
							onChange={(value) => props?.carPrice?.event((value?.toString() ?? '').replace(/,/g, ''))}
							className="flex items-center w-full h-[40px] border-0 box-shadow font-normal text-base text-blue-text"
						/>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-[10px] mb-[20px] sm:mb-[10px] items-start">
				<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979] pt-[10px]">NƠI ĐĂNG KÝ</div>
				<div className="sm:col-span-8 col-span-12">
					{props?.province?.loading ? (
						<div className="skeleton-input-full-width w-full">
							<Skeleton.Input active />
						</div>
					) : (
						<div>
							<SelectOptionCustom
								placeHolder="Chọn nơi đăng ký"
								value={props?.province?.value}
								items={props?.province?.items ?? []}
								onChange={props?.province?.event}
							/>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

interface Props {
	children?: ReactNode;
	post?: PostEntity | null;
}

const Popup: React.FC<Props> = ({ post }) => {
	const router = useRouter();
	const [brand, setBrand] = useState<string | null>(post?.brand?.slug ?? null);
	const [model, setModel] = useState<string | null>(post?.model?.slug ?? null);
	const [version, setVersion] = useState<string | null>(post?.bodyType?.slug ?? null);
	const [province, setProvince] = useState<string | null>(post?.city?.slug ?? null);
	const [price, setPrice] = useState<number>(post?.price ?? 0);
	const [pepaidPercent, setpPepaidPercent] = useState<number>(Number(prepaidPercentage[0].value));
	const [interestRate, setInterestRate] = useState<number>(1);
	const [borrowedTime, setBorrowedTime] = useState<number>(Number(lstBorrowedTime[0].value));

	const { data: dataBrand, loading: loadingBrand } = useGetListBrandsQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		onCompleted(data) {
			if (data && data?.getListBrands) {
				const index = data.getListBrands.findIndex((item) => item.slug === brand);
				if (index === -1) {
					setBrand(data.getListBrands[0].slug);
				}
			}
		},
	});

	const { data: dataModel, loading: loadingModel } = useGetListModelsQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			input: {
				brand: [brand ?? ''],
			},
		},
		onCompleted(res) {
			if (res && res.getListModels && brand) {
				const index = res.getListModels.findIndex((item) => item.slug === model);
				if (index === -1) {
					setModel(res.getListModels[0].slug);
				}
			}
		},
	});

	const { data: dataVersion, loading: loadingVersion } = useGetListVersionsQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			input: {
				model: (dataModel?.getListModels?.find((item) => item?.slug === model)?.id as string) ?? '',
			},
		},
	});

	/* eslint-disable */
	useEffect(() => {
		if (!router.query[keysQuery.VERSION] && dataVersion && dataVersion.getListVersions && brand) {
			const index = dataVersion.getListVersions.findIndex((item) => item.slug === version);
			if (index === -1) {
				setVersion(dataVersion.getListVersions[0]?.slug ?? '');
			}
		}
	}, [router.query]);
	/* eslint-enable */

	const { data: dataProvince, loading: loadingProvinces } = useProvincesQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			countryCode: COUNTRY_DEFAULT,
			input: {
				skip: 1,
				take: 200,
			},
		},
	});

	/* eslint-disable */
	useEffect(() => {
		if (brand && model && version) {
			if (dataProvince && dataProvince.provinces && dataProvince.provinces.items) {
				if (!province) {
					setProvince('HN')
				}
			}
		}
	}, [brand, model, version])
	/* eslint-enable */

	const { data: dataCarPurchaseCostProvince, loading: loadingCarPurchaseCostProvince } =
		useGetCarPurchaseCostProvinceByIdQuery({
			fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
			variables: {
				provinceId: dataProvince?.provinces?.items?.find((item) => item.slug === province)?.id ?? '',
			},
		});

	const onFinish = () => {
		const link: string = handleInstallmentEstimateDetailLink({
			brand: brand ?? '',
			model: model ?? '',
			version: version ?? '',
			province: province ?? '',
			pepaidPercent: pepaidPercent ?? '',
			interestRate: interestRate ?? '',
			borrowedTime: borrowedTime ?? '',
			status: post?.condition === CONDITIONTYPE[0].value ? CONDITIONLINK[0].link : CONDITIONLINK[1].link,
			price: post?.price ?? 0,
		});
		router.push(`/gia-xe?tab=du-toan-tra-gop&${link}`);
	};
	return (
		<div>
			<div className="md:px-20 sm:px-10 ssm:px-5 px-2 py-10 box-border">
				<div className="grid grid-cols-1 gap-[10px]">
					<p className="font-bold sm:text-5xl text-3xl text-blue-text text-center mb-[22px]">Ước tính giá xe trả góp</p>
					<p className="italic font-normal text-sm text-center mb-10">
						* Chi phí dưới đây là <span className="text-pink-main">ước tính</span> , đây là một số chi phí cố định mà
						bạn buộc phải trả khi mua và đăng ký xe. Các chi phí khác có thể phát sinh (và không bắt buộc) trong quá
						trình đăng ký xe.{' '}
					</p>
				</div>
				<WheelchairPrice
					brands={{
						loading: loadingBrand,
						items: dataBrand?.getListBrands?.map((item) => {
							return {
								label: item?.name,
								value: item?.slug,
							};
						}),
						show: true,
						value: brand,
						event: (value: any) => {
							setBrand(value);
							setModel(null);
							setVersion(null);
						},
					}}
					models={{
						loading: loadingModel,
						items: dataModel?.getListModels?.map((item) => {
							return {
								label: item?.name,
								value: item?.slug,
							};
						}),
						show: true,
						value: model,
						event: (value: any) => {
							setModel(value);
							setVersion(null);
						},
					}}
					versions={{
						loading: loadingVersion,
						items: dataVersion?.getListVersions?.map((item) => {
							return {
								label: item?.name ?? '',
								value: item?.slug?.toString(),
							};
						}),
						value: version,
						event: (value: any) => {
							setVersion(value);
						},
						show: post?.condition === CONDITIONTYPE[0].value ? true : false,
					}}
					province={{
						loading: loadingProvinces,
						items: dataProvince?.provinces?.items?.map((item) => {
							return {
								label: item?.name ?? '',
								value: item?.slug?.toString(),
							};
						}),
						show: true,
						value: province,
						event: (value: any) => {
							setProvince(value);
						},
					}}
					carPrice={{
						value: price,
						event: (value: any) => {
							setPrice(Number(value));
						},
					}}
				/>
				<div className="grid grid-cols-12 gap-[10px] mb-[20px] sm:mb-[10px] items-center">
					<p className="sm:col-span-4 col-span-12 font-normal text-sm underline">Giá lăn bánh: </p>
					{loadingProvinces || loadingCarPurchaseCostProvince ? (
						<div className="sm:col-span-8 col-span-12 flex justify-end">
							<Skeleton.Input active />
						</div>
					) : (
						<p className="sm:col-span-8 col-span-12 font-bold text-[22px] text-blue-text text-end">
							{calculateRollingPriceNoFixed({
								carPrice: price?.toString(), // price
								condition: post?.condition, // Car old, new
								param: dataCarPurchaseCostProvince?.getCarPurchaseCostProvinceById // Province cost purchase
									? dataCarPurchaseCostProvince?.getCarPurchaseCostProvinceById[0]
									: null,
							}) ?? '-'}
						</p>
					)}
				</div>
				<div className="line w-full border-dashed border-[0.5px] border-[#E2E2E2] mt-[19px] mb-[17px]" />
				<p className="text-blue-text font-bold text-lg mb-[15px]">Tính giá xe trả góp :</p>
				<div className="grid grid-cols-12 gap-[10px] mb-[20px] sm:mb-[10px] items-start">
					<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979] pt-[10px]">TRẢ TRƯỚC</div>
					<div className="sm:col-span-8 col-span-12">
						<div>
							<SelectOptionCustom
								placeHolder={`Chọn phần trăm trả trước`}
								value={pepaidPercent}
								items={prepaidPercentage}
								onChange={(value: any) => {
									setpPepaidPercent(value);
								}}
							/>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-12 gap-[10px] mb-[20px] sm:mb-[10px] items-start">
					<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979] pt-[10px]">LÃI XUẤT (% NĂM)</div>
					<div className="sm:col-span-8 col-span-12">
						<div>
							<InputNumber
								value={interestRate}
								placeholder="Lãi xuất (% năm)"
								onChange={(value: any) => setInterestRate(value)}
								className="flex items-center w-full h-[40px] border-0 box-shadow font-normal text-base text-blue-text"
							/>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-12 gap-[10px] mb-[48px] items-start">
					<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979] pt-[10px]">THỜI HẠN (NĂM)</div>
					<div className="sm:col-span-8 col-span-12">
						<div>
							<SelectOptionCustom
								placeHolder={`Chọn thời hạn vay`}
								value={borrowedTime}
								items={lstBorrowedTime}
								onChange={(value: any) => {
									setBorrowedTime(value);
								}}
							/>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<button
						className="py-2.5 px-6 bg-[#FFD726] rounded text-black font-bold text-base"
						style={{ border: 0 }}
						onClick={onFinish}
					>
						Tính toán
					</button>
				</div>
			</div>
		</div>
	);
};

const CarPriceOnInstallmentCalculator: React.FC<Props> = ({ children, post }) => {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<>
			<Wrapper className="modal">
				<div onClick={() => setModalOpen(true)}>{children}</div>
				{modalOpen ? (
					<Modal
						title=""
						centered
						open={modalOpen}
						onCancel={() => setModalOpen(false)}
						footer={null}
						closeIcon={<img src="/images/icons/close.svg" alt="" />}
						className="max-w-[820px] w-100-important modal-custom-height"
					>
						<Popup post={post} />
					</Modal>
				) : (
					<></>
				)}
			</Wrapper>
		</>
	);
};

export default memo(CarPriceOnInstallmentCalculator);

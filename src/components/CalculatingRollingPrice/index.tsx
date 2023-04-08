import { useAppState } from '@/context/AppContext';
import { AppRoutes } from '@/helpers/app.routes';
import { keysQuery } from '@/helpers/constant';
import { Checkbox, InputNumber } from 'antd';
import { useRouter } from 'next/router';
import React, { memo, useEffect, useState } from 'react';
import Brand from '../Select/Brand';
import Model from '../Select/Model';
import RegisterPlace from '../Select/RegisterPlace';
import Version from '../Select/Version';
import { ColorSelectProps } from '../SelectOptionCustom';
import { Wrapper } from './styled';

const RenderImage: React.FC = () => {
	const { appState } = useAppState();
	return (
		<div className="sm:col-span-4 col-span-12 gap-[20px]">
			<img
				className="w-full rounded mb-6"
				style={{ border: 0 }}
				src={appState.carVersion?.mediaDetail?.filePathOriginal ?? ''}
				alt=""
			/>
		</div>
	);
};

const CalculatingRollingPrice = () => {
	const [otherFee, setOtherFee] = useState([
		{
			label: 'Phí trước bạ',
			value: 0,
			checked: true,
		},
		{
			label: 'Phí đăng kiểm',
			value: 0,
			checked: true,
		},
		{
			label: 'Phí bảo trì đường bộ',
			value: 0,
			checked: true,
		},
		{
			label: 'Bảo hiểm dân sự',
			value: 0,
			checked: true,
		},
		{
			label: 'Phí biển số',
			value: 0,
			checked: true,
		},
		{
			label: 'Bảo hiểm thân vỏ (1 năm)',
			value: 0,
			checked: true,
		},
	]);

	const router = useRouter();
	const { appState } = useAppState();

	/* eslint-disable */
	useEffect(() => {
		if (appState?.carPurchaseCostProvince) {
			const _otherFee = otherFee;
			const price = Number(router.query[keysQuery.PRICE]);
			_otherFee[0].value = (Number(appState?.carPurchaseCostProvince?.registrationFeeNewCar) *
				Number(price)) /
				100

			_otherFee[1].value = Number(appState?.carPurchaseCostProvince?.registry);
			_otherFee[2].value = Number(appState?.carPurchaseCostProvince?.roadMaintenanceFee);
			_otherFee[3].value = Number(appState?.carPurchaseCostProvince?.civilInsurance);
			_otherFee[4].value = Number(appState?.carPurchaseCostProvince?.licensePlateFee);
			_otherFee[5].value =
				(Number(appState?.carPurchaseCostProvince?.bodyInsuranceOneYear) * Number(price)) /
				100;
			setOtherFee([..._otherFee]);
		}
	}, [router.query[keysQuery.PRICE], appState.carPurchaseCostProvince]);
	/* eslint-enable */

	return (
		<>
			<div className="md:col-span-7 col-span-12">
				<Wrapper className="w-full">
					<div className="grid grid-cols-12 gap-[15px]">
						<div className="col-span-12">
							<div className="grid grid-cols-12 gap-[10px] mb-[20px] sm:mb-[10px] items-center">
								<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979]">HÃNG XE</div>
								<div className="sm:col-span-8 col-span-12">
									<Brand color={ColorSelectProps.BLUE} showTotalPost={false} all={false} path={AppRoutes.carPrice} />
								</div>
							</div>
							<div className="grid grid-cols-12 gap-[10px] mb-[20px] sm:mb-[10px] items-center">
								<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979]">DÒNG XE</div>
								<div className="sm:col-span-8 col-span-12">
									<Model color={ColorSelectProps.BLUE} showTotalPost={false} all={false} path={AppRoutes.carPrice} />
								</div>
							</div>
							<div className="grid grid-cols-12 gap-[10px] mb-[20px] sm:mb-[10px] items-center">
								<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979]">PHIÊN BẢN</div>
								<div className="sm:col-span-8 col-span-12">
									<Version color={ColorSelectProps.BLUE} showTotalPost={false} all={false} path={AppRoutes.carPrice} />
								</div>
							</div>
							<div className="grid grid-cols-12 gap-[10px] mb-[20px] sm:mb-[10px] items-center">
								<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979]">GIÁ XE</div>
								<div className="sm:col-span-8 col-span-12">
									<InputNumber
										placeholder="Giá xe"
										disabled
										value={Number(router.query[keysQuery.PRICE])}
										formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										className="flex items-center w-full h-[40px] border-0 box-shadow font-normal text-base text-blue-text"
									/>
								</div>
							</div>
							<div className="grid grid-cols-12 gap-[10px] mb-[20px] sm:mb-[10px] items-center">
								<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979]">NƠI ĐĂNG KÝ</div>
								<div className="sm:col-span-8 col-span-12">
									<RegisterPlace
										color={ColorSelectProps.BLUE}
										showTotalPost={false}
										all={false}
										path={AppRoutes.carPrice}
									/>
								</div>
							</div>
							<div className="line w-full border-dashed border-[0.5px] border-[#E2E2E2] mt-[19px] mb-[17px]" />
							<div className="col-span-12">
								{otherFee?.map((item, index) => (
									<div key={index} className="other-fee grid grid-cols-12 gap-[10px] mb-[10px]">
										<div className="sm:col-span-4 col-span-12">{index === 0 ? 'CÁC LOẠI PHÍ' : ''}</div>
										<div className="sm:col-span-8 col-span-12">
											<div className="grid grid-cols-12 gap-[10px]">
												<div className="col-span-6">
													<Checkbox
														defaultChecked={true}
														onChange={(event) => {
															const _otherFee = otherFee;
															_otherFee[index].checked = event.target.checked;
															setOtherFee([..._otherFee]);
														}}
													>
														{item?.label}
													</Checkbox>
												</div>
												<div className="col-span-6 text-end">
													{isNaN(Number(item?.value)) ? '-' : Number(item?.value)?.toLocaleString('vn-VN')} vnđ
												</div>
												<div className="line w-full border-dashed border-[0.5px] border-[#E2E2E2] mt-[8.5px] mb-[8.5px] col-span-12" />
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="line w-full h-[1px] bg-blue-text mt-[32px] mb-[7px]" />
							<div className="flex flex-wrap gap-5 items-center justify-between">
								<p className="font-normal text-[22px]">Giá lăn bánh: </p>
								<p className="font-bold text-[38px] text-blue-text">
									{!isNaN(
										Number(router.query[keysQuery.PRICE]) +
											otherFee.reduce((acc, curr) => {
												if (curr.checked) {
													return acc + curr.value;
												}
												return acc;
											}, 0),
									)
										? (
												Number(router.query[keysQuery.PRICE]) +
												otherFee.reduce((acc, curr) => {
													if (curr.checked) {
														return acc + curr.value;
													}
													return acc;
												}, 0)
										  ).toLocaleString('it-IT') + ' vnđ'
										: '-'}
								</p>
							</div>
						</div>
					</div>
				</Wrapper>
			</div>
			<div className="md:col-span-5 col-span-12 gap-[20px]">
				<RenderImage />
			</div>
		</>
	);
};

export default memo(CalculatingRollingPrice);

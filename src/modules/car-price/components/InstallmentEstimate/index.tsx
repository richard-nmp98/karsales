import Brand from '@/components/Brand';
import BrandSelect from '@/components/Select/Brand';
import InstallmentSchedule from '@/components/Popup/InstallmentSchedule';
import Model from '@/components/Select/Model';
import { ColorSelectProps } from '@/components/SelectOptionCustom';
import { useCalculatingInstallmentCarLoanQuery } from '@/graphql/queries/calculatingInstallmentCarLoan.generated';
import { AppRoutes } from '@/helpers/app.routes';
import { borrowedTime, FORM_PAYMENT, keysQuery, prepaidPercentage } from '@/helpers/constant';
import { Checkbox, InputNumber } from 'antd';
import { useRouter } from 'next/router';
import React, { memo, useEffect, useState } from 'react';
import { Wrapper } from './styled';
import Version from '@/components/Select/Version';
import RegisterPlace from '@/components/Select/RegisterPlace';
import { useAppState } from '@/context/AppContext';
import { CarTypeEnum } from '@/graphql/type.interface';

const InstallmentEstimate: React.FC = () => {
	const router = useRouter();
	const { appState } = useAppState();
	const [interest, setInterest] = useState<number>(1);
	const [brrTime, setBrrTime] = useState(borrowedTime[2].value);
	const [prepaidPercent, setPrepaidPercent] = useState(prepaidPercentage[2].value);
	const [formPayment, setFormPayment] = useState(FORM_PAYMENT[0].value);

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

	const { data: dataCalculatingInstallmentCarLoan, loading: loadingCalculatingInstallmentCarLoan } =
		useCalculatingInstallmentCarLoanQuery({
			fetchPolicy: 'no-cache',
			variables: {
				input: {
					version: appState.carVersion?.id,
					provinceId: appState.carPurchaseCostProvince?.proviceDetail?.id,
					priceCarVersion: Number(appState.carVersion?.priceCarVersion ?? 0),
					prepaidCarAmountRate: Number(prepaidPercent),
					interestRate: Number(interest),
					loanTime: Number(brrTime),
					paymentForm: formPayment,
					carType: CarTypeEnum.NEW,
				},
			},
		});

	/* eslint-disable */
	useEffect(() => {
		if (appState?.carPurchaseCostProvince) {
			const _otherFee = otherFee;
			const price = Number(router.query[keysQuery.PRICE]);
			_otherFee[0].value = (Number(appState?.carPurchaseCostProvince?.registrationFeeNewCar) * Number(price)) / 100
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

	const handleObjectQuery = async (key: string, value: any) => {
		const as: any = undefined;
		await router.push(
			{
				pathname: AppRoutes.carPrice,
				query: {
					...router.query,
					[key]: value,
				},
			},
			as,
			{ shallow: true },
		);
	};

	/* eslint-disable */
	useEffect(() => {
		if (!router.query[keysQuery.PREPAID_PERCENTAGE]) {
			handleObjectQuery(keysQuery.PREPAID_PERCENTAGE, prepaidPercentage[0].value)
		}

		if (!router.query[keysQuery.BORROWED_TIME]) {
			handleObjectQuery(keysQuery.BORROWED_TIME, borrowedTime[0].value)
		}

		if (!router.query[keysQuery.FORM_PAYMENT]) {
			handleObjectQuery(keysQuery.FORM_PAYMENT, FORM_PAYMENT[0].link)
		}
	}, [])
	/* eslint-enable */

	return (
		<>
			<Wrapper className="grid grid-cols-12 gap-[8px]">
				<div className="sm:col-span-6 col-span-12 bg-white py-[30px] px-[19px] box-border">
					<div className="w-full grid grid-cols-12 gap-[10px] items-center mb-[14px]">
						<div className="col-span-12 font-normal text-sm text-[#797979]">HÃNG XE</div>
						<div className="col-span-12">
							<BrandSelect color={ColorSelectProps.BLUE} showTotalPost={false} all={false} path={AppRoutes.carPrice} />
						</div>
					</div>
					<div className="w-full grid grid-cols-12 gap-[10px] items-center mb-[14px]">
						<div className="col-span-12 font-normal text-sm text-[#797979]">DÒNG XE</div>
						<div className="col-span-12">
							<Model color={ColorSelectProps.BLUE} showTotalPost={false} all={false} path={AppRoutes.carPrice} />
						</div>
					</div>
					<div className="w-full grid grid-cols-12 gap-[10px] items-center mb-[14px]">
						<div className="col-span-12 font-normal text-sm text-[#797979]">PHIÊN BẢN</div>
						<div className="col-span-12">
							<Version color={ColorSelectProps.BLUE} showTotalPost={false} all={false} path={AppRoutes.carPrice} />
						</div>
					</div>
					<div className="w-full grid grid-cols-12 gap-[10px] items-center mb-[14px]">
						<div className="col-span-12 font-normal text-sm text-[#797979]">GIÁ XE</div>
						<div className="col-span-12">
							<InputNumber
								value={Number(router.query[keysQuery.PRICE]) ?? 1000000000}
								formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
								// onPressEnter={(event: any) => {
								// 	handleObjectQuery(keysQuery.PRICE, event.target.value.replace(/,/g, ''));
								// }}
								disabled
								className="flex items-center w-full h-[40px] border-0 box-shadow font-normal text-base text-blue-text"
								placeholder="Giá xe"
								min={0}
							/>
						</div>
					</div>
					<div className="w-full grid grid-cols-12 gap-[10px] items-center mb-[14px]">
						<div className="col-span-12 font-normal text-sm text-[#797979]">NƠI ĐĂNG KÝ</div>
						<div className="col-span-12">
							<RegisterPlace
								color={ColorSelectProps.BLUE}
								showTotalPost={false}
								all={false}
								path={AppRoutes.carPrice}
							/>
						</div>
					</div>
					<div className="w-full grid grid-cols-12 gap-[10px] items-center mb-[14px]">
						<div className="col-span-12 font-normal text-sm text-[#797979]">TRẢ TRƯỚC</div>
						<div className="col-span-12 flex flex-wrap gap-1.5">
							{prepaidPercentage?.map((item, index) => (
								<button
									className={`drop-shadow flex justify-center items-center px-2 py-1.5 box-border rounded ${
										item.value === prepaidPercent ? 'bg-blue-text text-white' : ''
									}`}
									onClick={() => {
										setPrepaidPercent(item?.value);
									}}
									key={index}
								>
									{item.label}
								</button>
							))}
						</div>
					</div>
					<div className="w-full grid grid-cols-12 gap-[10px] items-center mb-[14px]">
						<div className="col-span-12 font-normal text-sm text-[#797979]">LÃI XUẤT (% NĂM)</div>
						<div className="col-span-12">
							<InputNumber
								placeholder="Lãi xuất (% năm)"
								min={0}
								onChange={(value) => {
									setInterest(Number(value));
								}}
								value={interest}
								className="flex items-center w-full h-[40px] border-0 box-shadow font-normal text-base text-blue-text"
							/>
						</div>
					</div>
					<div className="w-full grid grid-cols-12 gap-[10px] items-center mb-[14px]">
						<div className="col-span-12 font-normal text-sm text-[#797979]">THỜI HẠN VAY (NĂM)</div>
						<div className="col-span-12 flex flex-wrap gap-1.5">
							{borrowedTime?.map((item, index) => (
								<button
									className={`drop-shadow flex justify-center items-center w-[35px] h-[35px] box-border rounded ${
										item.value === brrTime ? 'bg-blue-text text-white' : ''
									}`}
									onClick={() => {
										setBrrTime(item?.value);
									}}
									key={index}
								>
									{item.value}
								</button>
							))}
						</div>
					</div>
					<div className="w-full grid grid-cols-12 gap-[10px] items-center mb-[14px]">
						<div className="col-span-12 font-normal text-sm text-[#797979]">HÌNH THỨC CHI TRẢ</div>
						<div className="col-span-12 flex flex-wrap gap-1.5">
							{FORM_PAYMENT?.map((item, index) => (
								<button
									className={`drop-shadow flex justify-center items-center px-[10px] border-box h-[35px] box-border rounded ${
										item.value === formPayment ? 'bg-blue-text text-white' : ''
									}`}
									onClick={() => {
										setFormPayment(item?.value);
									}}
									key={index}
								>
									{item.text}
								</button>
							))}
						</div>
					</div>
				</div>
				<div className="sm:col-span-6 col-span-12">
					<img
						className="w-full rounded mb-6"
						style={{ border: 0 }}
						src={appState.carVersion?.mediaDetail?.filePathOriginal ?? ''}
						alt=""
					/>
					<div className="grid grid-cols-12 gap-[10px]">
						<div className="col-span-12">
							<div className="flex flex-wrap justify-between items-center gap-[10px] mb-2.5">
								<p className="font-normal text-base">Giá xe</p>
								<p className="font-bold text-base">
									{isNaN(Number(dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.priceCarVersion))
										? '-'
										: dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.priceCarVersion.toLocaleString(
												'it-IT',
										  ) ?? '-'}
									VNĐ
								</p>
							</div>
							<div className="flex flex-wrap justify-between items-center gap-1 mb-2.5">
								<p className="font-normal text-base">Các loại phí:</p>
								<p className="font-bold text-base">
									{isNaN(Number(dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.totalCost))
										? '-'
										: Number(
												dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.totalCost,
										  ).toLocaleString('it-IT') ?? '-'}{' '}
									VNĐ
								</p>
							</div>
							<div className="rounded border border-dashed py-2.5 px-4 box-border mb-[17px]">
								<div className="grid grid-cols-12">
									<div className="col-span-12">
										{otherFee?.map((item, index) => (
											<div key={index} className="other-fee grid grid-cols-12 gap-[10px] mb-[10px]">
												<div className="col-span-12">
													<div className="grid grid-cols-12 gap-[5px]">
														<div className="col-span-6">
															<Checkbox checked={item?.checked} disabled={false} value={item?.label}>
																{item?.label}
															</Checkbox>
														</div>
														<div className="col-span-6 text-end">
															{isNaN(Number(item?.value)) ? '-' : Number(item?.value)?.toLocaleString('vn-VN')} vnđ
														</div>
														<div className="line w-full border-dashed border-[0.5px] border-[#E2E2E2] my-[2.5px] col-span-12" />
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="flex flex-wrap justify-between items-center gap-1 mb-2.5">
								<p className="font-bold text-base max-w-[200px] whitespace-normal">Giá lăn bánh</p>
								<p className="font-bold text-base text-blue-text">
									{isNaN(Number(dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.rollingPrice))
										? '-'
										: Number(
												dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.rollingPrice,
										  ).toLocaleString('it-IT') ?? '-'}
									VNĐ
								</p>
							</div>
							<div className="flex flex-wrap justify-between items-center gap-1 mb-2.5">
								<p className="font-normal text-base">Trả trước ({router.query[keysQuery.PREPAID_PERCENTAGE]}%)</p>
								<p className="font-bold text-base">
									{(isNaN(Number(dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.pricePrepaidCar))
										? '-'
										: Number(
												dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.pricePrepaidCar,
										  ).toLocaleString('it-IT')) ?? '-'}{' '}
									VNĐ
								</p>
							</div>
							<div className="line w-full border-dashed border-[0.5px] border-[#E2E2E2] my-4 col-span-12" />
							<div className="flex flex-wrap justify-between items-center gap-1">
								<p className="font-normal text-base">Tổng tiền vay</p>
								<p className="font-bold text-base">
									{(isNaN(Number(dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.totalLoanAmount))
										? '-'
										: Number(
												dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.totalLoanAmount,
										  ).toLocaleString('it-IT')) ?? '-'}{' '}
									VNĐ
								</p>
							</div>
							<div className="line w-full border-dashed border-[0.5px] border-[#E2E2E2] my-4 col-span-12" />
							<div className="flex flex-wrap justify-between items-center gap-1">
								<p className="font-normal text-base">Tổng tiền lãi</p>
								<p className="font-bold text-base">
									{(isNaN(Number(dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.totalInterest))
										? '-'
										: Number(
												dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.totalInterest,
										  ).toLocaleString('it-IT')) ?? '-'}{' '}
									VNĐ
								</p>
							</div>
							<div className="line w-full border-dashed border-[0.5px] border-[#E2E2E2] my-4 col-span-12" />
							<div className="flex flex-wrap justify-between items-center gap-1">
								<p className="font-normal text-base">Tổng tiền còn lại (gốc & Lãi)</p>
								<p className="font-bold text-blue-text text-xl">
									{(isNaN(
										Number(
											dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan
												?.totalAmountRemainPrincipalAndInterest,
										),
									)
										? '-'
										: Number(
												dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan
													?.totalAmountRemainPrincipalAndInterest,
										  ).toLocaleString('it-IT')) ?? '-'}{' '}
									VNĐ
								</p>
							</div>

							<div className="flex">
								<p className="italic font-normal text-sm text-flex my-[27px]">
									* Chi phí trên đây là ước tính , đây là một số chi phí cố định mà bạn buộc phải trả khi mua và đăng ký
									xe. Các chi phí khác có thể phát sinh (và không bắt buộc) trong quá trình đăng ký xe.
								</p>
							</div>

							{loadingCalculatingInstallmentCarLoan ? (
								<></>
							) : (
								<InstallmentSchedule
									name={`${appState?.carVersion?.brandDetail?.name} ${appState?.carVersion?.modelDetail?.name} ${appState?.carVersion?.name}`}
									data={dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan}
								>
									<button className="w-full h-[40px] flex items-center justify-center bg-blue-text rounded text-white">
										Lịch trả góp
									</button>
								</InstallmentSchedule>
							)}
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<div className="line w-full h-[1px] bg-[#E2E2E2] mt-[39px] mb-[40px]" />
					<Brand gridCols="md:grid-cols-6 grid-cols-4" maxData={18} />
				</div>
			</Wrapper>
		</>
	);
};

export default memo(InstallmentEstimate);

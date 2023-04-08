import InstallmentSchedule from '@/components/Popup/InstallmentSchedule';
import RegisterPlace from '@/components/Select/RegisterPlaceSetSate';
import { ColorSelectProps } from '@/components/SelectOptionCustom';
import { useAppState } from '@/context/AppContext';
import { useCalculatingInstallmentCarLoanQuery } from '@/graphql/queries/calculatingInstallmentCarLoan.generated';
import { CarTypeEnum, Maybe, PostEntity, PostMediasEntity } from '@/graphql/type.interface';
import { AppRoutes } from '@/helpers/app.routes';
import { borrowedTime, CONDITIONLINK, FORM_PAYMENT, prepaidPercentage } from '@/helpers/constant';
import { Checkbox, Collapse, InputNumber, Select } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import { Wrapper } from './styled';

const { Panel } = Collapse;

const RenderImage: React.FC<{ media?: Maybe<Array<PostMediasEntity>> }> = (props) => {
	let count = 0;
	return (
		<>
			{props?.media?.length === 0 ? (
				<></>
			) : (
				props?.media?.map((item, index) => {
					if (count < 1 && item?.mediaDetail && item?.mediaDetail?.filePathOriginal) {
						count = count + 1;
						return (
							<>
								<img
									key={index}
									className="w-full rounded mb-[30px]"
									style={{ border: 0 }}
									src={item?.mediaDetail?.filePathOriginal}
									alt=""
								/>
							</>
						);
					}
				})
			)}
		</>
	);
};

type Props = {
	setShowPrice?: any;
	post?: PostEntity | null;
};

const ContentOnePage: React.FC<Props> = (props) => {
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

	const [payment, setPayment] = useState(FORM_PAYMENT[0].link);
	const [brrTime, setBrrTime] = useState(borrowedTime[2].value);
	const [prepaidPercent, setPrepaidPercent] = useState(prepaidPercentage[2].value);
	const [interest, setInterest] = useState<number>(3);
	const [registerPlace, setRegisterPlace] = useState();
	const { appState } = useAppState();

	const { data: dataCalculatingInstallmentCarLoan, loading: loadingCalculatingInstallmentCarLoan } =
		useCalculatingInstallmentCarLoanQuery({
			fetchPolicy: 'no-cache',
			variables: {
				input: {
					provinceId: registerPlace ?? '',
					priceCarVersion: Number(props.post?.price ?? 0),
					prepaidCarAmountRate: Number(prepaidPercent),
					interestRate: Number(interest),
					loanTime: Number(brrTime),
					paymentForm: FORM_PAYMENT.find((item) => item.link === payment)?.value ?? FORM_PAYMENT[0].value,
					carType: props.post?.condition === CONDITIONLINK[0].value ? CarTypeEnum.NEW : CarTypeEnum.OLD,
				},
			},
		});

	/* eslint-disable */
	useEffect(() => {
		if (appState?.carPurchaseCostProvince) {
			const _otherFee = otherFee;
			const price = Number(props.post?.price);
			_otherFee[0].value = Number(dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.registrationFee)
			_otherFee[1].value = Number(dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.registry);
			_otherFee[2].value = Number(dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.roadMaintenanceFee);
			_otherFee[3].value = Number(dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.civilInsurance);
			_otherFee[4].value = Number(dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.licensePlateFee);
			_otherFee[5].value = Number(appState?.carPurchaseCostProvince?.bodyInsuranceOneYear) * Number(price) / 100;
			setOtherFee([..._otherFee]);
		}
	}, [dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan]);
	/* eslint-enable */

	return (
		<>
			<div className="container flex gap-[10px] items-center mb-3">
				<img onClick={() => props.setShowPrice(false)} src={`/images/icons/icon-arrow-left.svg`} alt="" />
				<p className="text-blue-text font-bold text-[32px]">Dự Toán Trả Góp</p>
			</div>
			<Wrapper className="container grid grid-cols-12 lg:gap-[64px] gap-[10px]">
				<div className="w-full lg:col-span-6 col-span-12 bg-[#F5F5F5] py-[30px] px-[19px] box-border rounded">
					{<RenderImage media={props?.post?.medias} />}
					<div className="w-full grid grid-cols-12 gap-[10px] items-center mb-[14px]">
						<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979]">HÃNG XE</div>
						<div className="sm:col-span-8 col-span-12 sm:mb-[10px] mb-[5px]">
							<Select
								className="w-full rounded antd-select-border-0 antd-select-box-shadow ant-select-h-40 font-normal text-base text-blue-text"
								showSearch={false}
								disabled
								placeholder="Select a brand"
								optionFilterProp="children"
								value={props.post?.brand?.slug}
								suffixIcon={<img src={'/images/icons/dropdown.svg'} alt="" />}
								filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
								options={[
									{
										label: props.post?.brand?.name,
										value: props.post?.brand?.slug,
									},
								]}
							/>
						</div>
					</div>
					<div className="w-full grid grid-cols-12 gap-[10px] items-center mb-[14px]">
						<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979]">MẪU XE</div>
						<div className="sm:col-span-8 col-span-12 sm:mb-[10px] mb-[5px]">
							<Select
								className="w-full rounded antd-select-border-0 antd-select-box-shadow ant-select-h-40 font-normal text-base text-blue-text"
								showSearch
								disabled
								placeholder="Select a model"
								optionFilterProp="children"
								value={props.post?.model?.slug}
								suffixIcon={<img src={'/images/icons/dropdown.svg'} alt="" />}
								onChange={() => {}}
								onSearch={() => {}}
								filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
								options={[
									{
										label: props.post?.model?.name,
										value: props.post?.model?.slug,
									},
								]}
							/>
						</div>
					</div>
					<div className="w-full grid grid-cols-12 gap-[10px] items-center mb-[14px]">
						<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979]">NƠI ĐĂNG KÝ</div>
						<div className="sm:col-span-8 col-span-12 sm:mb-[10px] mb-[5px]">
							<RegisterPlace
								color={ColorSelectProps.BLUE}
								showTotalPost={false}
								all={false}
								path={`${AppRoutes.buyCar}/${props.post?.slug || props.post?.id}`}
								state={registerPlace}
								setState={setRegisterPlace}
							/>
						</div>
					</div>
					<div className="w-full grid grid-cols-12 gap-[10px] items-center mb-[14px]">
						<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979]">TRẢ TRƯỚC</div>
						<div className="sm:col-span-8 col-span-12 sm:mb-[10px] mb-[5px] flex flex-wrap gap-1.5">
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
						<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979]">LÃI XUẤT (% NĂM)</div>
						<div className="sm:col-span-8 col-span-12 sm:mb-[10px] mb-[5px]">
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
						<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979]">THỜI HẠN VAY (NĂM)</div>
						<div className="sm:col-span-8 col-span-12 sm:mb-[10px] mb-[5px] flex flex-wrap gap-1.5">
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
						<div className="sm:col-span-4 col-span-12 font-normal text-sm text-[#797979]">HÌNH THỨC CHI TRẢ</div>
						<div className="sm:col-span-8 col-span-12 sm:mb-[10px] mb-[5px] flex flex-wrap gap-1.5">
							{FORM_PAYMENT?.map((item, index) => (
								<button
									className={`drop-shadow flex justify-center items-center px-[10px] border-box h-[35px] box-border rounded ${
										item.link === payment ? 'bg-blue-text text-white' : ''
									}`}
									onClick={() => {
										setPayment(item?.link);
									}}
									key={index}
								>
									{item.text}
								</button>
							))}
						</div>
					</div>
				</div>
				<div className="w-full lg:col-span-6 col-span-12 bg-white py-[30px] px-[19px] box-border">
					<div className="grid grid-cols-12 gap-[15px]">
						{/* ------------------------------------- */}
						<div className="col-span-12">
							<div className="grid grid-cols-12 gap-[10px] justify-between items-center">
								<p className="col-span-7 text-start font-bold sm:text-[19px] text-base">
									Giá xe {props.post?.brand?.name}&nbsp;{props.post?.model?.name}
								</p>
								<p className="col-span-5 text-end font-bold sm:text-[19px] text-base text-pink-main">
									{dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.priceCarVersion.toLocaleString(
										'it-IT',
									)}{' '}
									VNĐ
								</p>
							</div>
						</div>
						<div className="col-span-12">
							<div className="flex flex-wrap gap-[10px] justify-between items-center">
								<p className="font-bold text-base">Các loại phí:</p>
								<p className="font-bold text-base">
									{dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.totalCost.toLocaleString('it-IT')}{' '}
									VNĐ
								</p>
							</div>
						</div>
						{/* ------------------------------------- */}
						<div className="col-span-12 ssm:pl-[20px]">
							<Collapse
								expandIcon={() => <img src="/images/icons/dropdown.svg" alt="" />}
								bordered={false}
								style={{ background: 'none', padding: 0 }}
								defaultActiveKey="1"
							>
								<Panel header="Chi tiết các loại phí:" key="1">
									<div className="rounded border border-dashed py-2.5 px-4 box-border">
										{otherFee?.map((item, index) => (
											<div key={index} className="other-fee grid grid-cols-12 gap-[5px] mb-[5px]">
												<div className="col-span-12">
													<div className="grid grid-cols-12 gap-[5px]">
														<div className="col-span-6">
															<Checkbox checked={true} value={item?.label}>
																{item?.label}
															</Checkbox>
														</div>
														<div className="col-span-6 text-end">
															{Number(item?.value)?.toLocaleString('vn-VN')} vnđ
														</div>
														<div className="line w-full border-dashed border-[0.5px] border-[#E2E2E2] mt-[1.5px] mb-[4.5px] col-span-12" />
													</div>
												</div>
											</div>
										))}
									</div>
								</Panel>
							</Collapse>
						</div>
						{/* ------------------------------------- */}
						<div className="col-span-12">
							<div className="line w-full h-[1px] bg-[#E1E1E1] mt-[20px] mb-[7px]" />
						</div>
						<div className="col-span-12">
							<div className="grid grid-cols-12 gap-[10px] justify-between items-center">
								<p className="col-span-7 text-start font-bold sm:text-[19px] text-base">
									Giá lăn bánh {props.post?.brand?.name}&nbsp;{props.post?.model?.name}
								</p>
								<p className="col-span-5 text-end font-bold sm:text-[19px] text-base text-pink-main">
									{dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.rollingPrice.toLocaleString(
										'it-IT',
									)}{' '}
									VNĐ
								</p>
							</div>
						</div>
						<div className="col-span-12">
							<div className="flex flex-wrap gap-[10px] justify-between items-center">
								<p className="font-bold sm:text-[18px] text-sm">Trả trước ({prepaidPercent}%)</p>
								<p className="font-bold sm:text-[18px] text-sm">
									{dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.pricePrepaidCar.toLocaleString(
										'it-IT',
									)}{' '}
									VNĐ
								</p>
							</div>
						</div>
						<div className="col-span-12">
							<div className="line w-full h-[1px] bg-[#E1E1E1] mt-[20px] mb-[7px]" />
						</div>
						{/* ------------------------------------- */}
						<div className="col-span-12">
							<div className="flex flex-wrap gap-[10px] justify-between items-center">
								<p className="font-normal text-base underline">Tổng tiền vay:</p>
								<p className="font-bold text-base">
									{dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.totalLoanAmount.toLocaleString(
										'it-IT',
									)}{' '}
									VNĐ
								</p>
							</div>
						</div>
						<div className="col-span-12 pl-[20x] box-border">
							<div className="flex flex-wrap gap-[10px] justify-between items-center mb-[10px]">
								<p className="font-normal text-sm">Lãi suất (%/ năm)</p>
								<p className="font-bold text-sm">{interest} %</p>
							</div>
							<div className="flex flex-wrap gap-[10px] justify-between items-center">
								<p className="font-normal text-sm">Kì hạn</p>
								<p className="font-bold text-sm">{brrTime} năm</p>
							</div>
						</div>
						{/* ------------------------------------- */}
						<div className="col-span-12">
							<div className="line w-full h-[1px] bg-[#E1E1E1] mt-[20px] mb-[7px]" />
						</div>
						<div className="col-span-12">
							<div className="flex flex-wrap gap-[10px] justify-between items-center">
								<p className="font-normal text-base underline">Tổng tiền lãi:</p>
								<p className="font-bold text-base">
									{dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.totalInterest.toLocaleString(
										'it-IT',
									)}{' '}
									VNĐ
								</p>
							</div>
						</div>
						{/* ------------------------------------- */}
						<div className="col-span-12">
							<div className="line w-full h-[1px] bg-[#E1E1E1] mt-[20px] mb-[7px]" />
						</div>
						<div className="col-span-12">
							<div className="flex flex-wrap gap-[10px] justify-between items-center">
								<p className="font-bold sm:text-base text-sm">TỔNG TIỀN VAY & LÃI CÒN LẠI :</p>
								<p className="font-bold sm:text-[20px] text-base text-pink-main">
									{dataCalculatingInstallmentCarLoan?.calculatingInstallmentCarLoan?.totalAmountRemainPrincipalAndInterest.toLocaleString(
										'it-IT',
									)}{' '}
									VNĐ
								</p>
							</div>
						</div>
						<div className="col-span-12">
							<p className="italic text-sm font-normal text-[#797979]">
								* Chi phí trên đây là ước tính , đây là một số chi phí cố định mà bạn buộc phải trả khi mua và đăng ký
								xe. Các chi phí khác có thể phát sinh (và không bắt buộc) trong quá trình đăng ký xe.{' '}
							</p>
						</div>
						<div className="col-span-12">
							<div className="grid grid-cols-12 gap-[10px] items-center">
								<div className="col-span-6">
									<div className="flex items-center justify-center gap-[10px]">
										<a
											href={`tel:${props?.post?.user?.phone ?? 0}`}
											className="w-full h-[40px] flex items-center justify-center bg-[#E5E5E5] rounded"
										>
											Liên hệ
										</a>
									</div>
								</div>
								<div className="col-span-6">
									{loadingCalculatingInstallmentCarLoan ? (
										<></>
									) : (
										<InstallmentSchedule
											name={`${props.post?.brand?.name} ${props.post?.model?.name}`}
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
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(ContentOnePage);

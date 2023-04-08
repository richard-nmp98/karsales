import React, { memo, ReactNode, useState } from 'react';
import { Wrapper } from './styled';
import { Modal } from 'antd';
import html2canvas from 'html2canvas';
import { CarPurchaseCostEstimateMaster, CarPurchaseCostEstimaterDetails } from '@/graphql/type.interface';

interface Props {
	children: ReactNode;
	data?: CarPurchaseCostEstimateMaster | null;
	name?: string;
}

const Export = ({
	dataTable,
	isExport,
	name,
}: {
	dataTable?: CarPurchaseCostEstimateMaster | null;
	isExport: boolean;
	name?: string;
}) => {
	return (
		<div
			id={isExport ? 'installment-schedule' : ''}
			className={isExport ? 'p-[20px] box-border w-[1240px]' : 'py-[20px] sm:px-[20px] px-[0px] box-border'}
		>
			{isExport ? (
				<div className="text-center items-center mb-5 font-bold text-[28px] ">
					<p className="w-full">LỊCH TRẢ GÓP</p>
					<div className="w-full">{name?.toUpperCase().replace(/\s+/g, '_')}</div>
				</div>
			) : (
				<div className="text-center items-center mb-5 font-bold text-[28px]">
					<p className="w-full">LỊCH TRẢ GÓP</p>
					<div className="w-full">{name?.toUpperCase()}</div>
				</div>
			)}
			<div className="grid grid-cols-12 justify-center items-center gap-[10px] mb-[10px]">
				{isExport ? <div className="col-span-1"></div> : <></>}
				<div
					className={
						isExport
							? 'col-span-5 w-full border-black rounded-sm p-[10px] border-box border'
							: 'ssm:col-span-6 col-span-12 w-full border-black rounded-sm p-[10px] border-box border h-full md:text-lg sm:text-base text-[10px]'
					}
				>
					<div className="flex flex-wrap gap-x-[5px]">
						<div className="w-full">
							<div className="grid grid-cols-12 justify-between items-start gap-x-[5px]">
								<p className="col-span-6">GIÁ XE </p>
								<p className="col-span-6 text-end">{dataTable?.priceCarVersion.toLocaleString('it-IT')} VND</p>
							</div>
						</div>

						<div className="w-full">
							<div className="grid grid-cols-12 justify-between items-start gap-x-[5px]">
								<p className="col-span-6">KỲ HẠN VAY</p>
								<p className="col-span-6 text-end">{dataTable?.loanTime} năm</p>
							</div>
						</div>

						<div className="w-full">
							<div className="grid grid-cols-12 justify-between items-start gap-x-[5px]">
								<p className="col-span-6">SỐ TIỀN TRẢ TRƯỚC ({dataTable?.prepaidCarAmountRate}%)</p>
								<p className="col-span-6 text-end">{dataTable?.pricePrepaidCar?.toLocaleString('it-IT')} VND</p>
							</div>
						</div>

						<div className="w-full">
							<div className="grid grid-cols-12 justify-between items-start gap-x-[5px]">
								<p className="col-span-6">LÃI SUẤT</p>
								<p className="col-span-6 text-end">{dataTable?.interestRate}%/năm</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className={
						isExport
							? 'col-span-5 w-full border-black rounded-sm p-[10px] border-box border'
							: 'ssm:col-span-6 col-span-12 w-full border-black rounded-sm p-[10px] border-box border h-full md:text-lg sm:text-base text-[10px]'
					}
				>
					<div className="flex flex-wrap gap-x-[5px]">
						<div className="w-full">
							<div className="grid grid-cols-12 justify-between items-start gap-x-[5px]">
								<p className="col-span-6">TỔNG TIỀN VAY</p>
								<p className="col-span-6 text-end">{dataTable?.totalLoanAmount?.toLocaleString('it-IT')} VND</p>
							</div>
						</div>

						<div className="w-full">
							<div className="grid grid-cols-12 justify-between items-start gap-x-[5px]">
								<p className="col-span-6">TỔNG TIỀN LÃI</p>
								<p className="col-span-6 text-end">{dataTable?.totalInterest?.toLocaleString('it-IT')} VND</p>
							</div>
						</div>

						<div className="w-full">
							<div className="grid grid-cols-12 justify-between items-start gap-x-[5px] font-bold">
								<p className="col-span-6">TỔNG TIỀN VAY VÀ LÃI CÒN LẠI</p>
								<p className="col-span-6 text-end">
									{dataTable?.totalAmountRemainPrincipalAndInterest?.toLocaleString('it-IT')} VND
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 justify-center ">
				<div className="col-span-1 md:block hidden"></div>
				<div
					className={
						isExport ? 'col-span-10 relative' : 'col-span-12 overflow-y-scroll relative no-sb block h-[300px] grid'
					}
				>
					<table className={isExport ? 'left-0 w-full max-w-[100%]' : 'left-0'}>
						<thead className="">
							<tr>
								<th
									className={`border border-black font-bold text-center text-center ${
										isExport
											? 'min-w-[163px] text-lg p-[10px]'
											: 'min-w-[20%] whitespace-nowrap md:text-lg sm:text-base ssm:text-sm text-[10px] md:p-[10px] sm:p-[5px] p-[2px]'
									} box-border`}
								>
									Kỳ
								</th>
								<th
									className={`border border-black font-bold text-center text-center ${
										isExport
											? 'min-w-[163px] text-lg p-[10px]'
											: 'min-w-[20%] whitespace-nowrap md:text-lg sm:text-base ssm:text-sm text-[10px] md:p-[10px] sm:p-[5px] p-[2px]'
									} box-border`}
								>
									Trả nợ gốc
								</th>
								<th
									className={`border border-black font-bold text-center text-center ${
										isExport
											? 'min-w-[163px] text-lg p-[10px]'
											: 'min-w-[20%] whitespace-nowrap md:text-lg sm:text-base ssm:text-sm text-[10px] md:p-[10px] sm:p-[5px] p-[2px]'
									} box-border`}
								>
									Trả lãi
								</th>
								<th
									className={`border border-black font-bold text-center text-center ${
										isExport
											? 'min-w-[163px] text-lg p-[10px]'
											: 'min-w-[20%] whitespace-nowrap md:text-lg sm:text-base ssm:text-sm text-[10px] md:p-[10px] sm:p-[5px] p-[2px]'
									} box-border`}
								>
									Tổng cần trả
								</th>
								<th
									className={`border border-black font-bold text-center text-center ${
										isExport
											? 'min-w-[163px] text-lg p-[10px]'
											: 'min-w-[20%] whitespace-nowrap md:text-lg sm:text-base ssm:text-sm text-[10px] md:p-[10px] sm:p-[5px] p-[2px]'
									} box-border`}
								>
									Dư nợ sau
								</th>
							</tr>
						</thead>
						<tbody>
							{dataTable?.listCarPurchaseCostEstimaterDetails.map(
								(item: CarPurchaseCostEstimaterDetails, index: number) => (
									<tr key={index}>
										<td
											className={`border border-black font-sm text-center box-border ${
												isExport
													? 'p-[10px] text-lg'
													: 'whitespace-nowrap md:text-lg sm:text-base ssm:text-sm text-[10px] md:p-[10px] sm:p-[5px] p-[2px]'
											}`}
										>
											Tháng {index + 1}
										</td>
										<td
											className={`border border-black font-sm text-center box-border ${
												isExport
													? 'p-[10px] text-lg'
													: 'whitespace-nowrap md:text-lg sm:text-base ssm:text-sm text-[10px] md:p-[10px] sm:p-[5px] p-[2px]'
											}`}
										>
											{item?.principalAmount?.toLocaleString('vn-VN')}
										</td>
										<td
											className={`border border-black font-sm text-center box-border ${
												isExport
													? 'p-[10px] text-lg'
													: 'whitespace-nowrap md:text-lg sm:text-base ssm:text-sm text-[10px] md:p-[10px] sm:p-[5px] p-[2px]'
											}`}
										>
											{item?.interestAmount?.toLocaleString('vn-VN')}
										</td>
										<td
											className={`border border-black font-sm text-center box-border ${
												isExport
													? 'p-[10px] text-lg'
													: 'whitespace-nowrap md:text-lg sm:text-base ssm:text-sm text-[10px] md:p-[10px] sm:p-[5px] p-[2px]'
											}`}
										>
											{item?.totalAmount?.toLocaleString('vn-VN')}
										</td>
										<td
											className={`border border-black font-sm text-center box-border ${
												isExport
													? 'p-[10px] text-lg'
													: 'whitespace-nowrap md:text-lg sm:text-base ssm:text-sm text-[10px] md:p-[10px] sm:p-[5px] p-[2px]'
											}`}
										>
											{item?.remainAmount?.toLocaleString('vn-VN')}
										</td>
									</tr>
								),
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

const InstallmentSchedule: React.FC<Props> = ({ children, data, name }) => {
	const [modalOpen, setModalOpen] = useState(false);

	const handleSaveInstallmentSchedule = () => {
		const element: any = document.getElementById('installment-schedule');
		if (element) {
			html2canvas(element, { scrollY: -window.scrollY }).then((canvas: HTMLCanvasElement) => {
				const imgData = canvas.toDataURL('image/png');
				const link = document.createElement('a');
				link.download = `Lịch Trả Góp ${name}.png`;
				link.href = imgData;
				link.click();
			});
		}
	};

	return (
		<>
			<Wrapper className="modal py-10">
				<div onClick={() => setModalOpen(true)}>{children}</div>
				<Modal
					title=""
					centered
					open={modalOpen}
					onCancel={() => setModalOpen(false)}
					footer={null}
					closeIcon={<img src="/images/icons/close-dark.svg" alt="" />}
					className="max-w-[1240px] w-100-important"
				>
					<Export dataTable={data} name={name} isExport={false} />
					<div className="flex justify-center">
						<button
							onClick={handleSaveInstallmentSchedule}
							className="font-normal text-base w-[168px] h-[40px] flex items-center justify-center rounded bg-[#E5E5E5]"
						>
							Download file
						</button>
						<div className="w-0 h-0 overflow-hidden">
							<Export dataTable={data} name={name} isExport={true} />
						</div>
					</div>
				</Modal>
			</Wrapper>
		</>
	);
};

export default memo(InstallmentSchedule);

import { Card } from 'antd';
import React, { memo, useState } from 'react';
import Filter from '../Filter';
import { Wrapper } from './styled';
import ColumnChart from '../Charts/column';
import BarChart from '../Charts/bar';

const Content: React.FC = () => {
	const [showFilter, setShowFilter] = useState(false);

	return (
		<>
			<Wrapper className="pt-0">
				<div className="flex relative overflow-x-hidden m-auto">
					{showFilter ? (
						<div
							onClick={() => setShowFilter(false)}
							className="backdrop w-full h-full bg-transparent absolute z-[9]"
						/>
					) : (
						<></>
					)}
					<div className={`${showFilter ? 'show' : ''} filter bg-white`}>
						<img
							onClick={() => setShowFilter(false)}
							src="/images/icons/close-filter.svg"
							alt=""
							className="absolute right-[10px] top-[10px] w-[15px] hover:scale-125 cursor-pointer lg:hidden"
						/>
						<Filter />
					</div>
					<div className="content">
						<div className="box-border p-[39px]">
							<div className="container flex justify-between items-center gap-[10px] mb-[22px]">
								<p className="name font-bold text-blue-text text-[32px]">Mercedes GLE 400 4MATIC</p>
								<div className="flex gap-[10px] items-center justify-end">
									<div
										className="icon-filter flex gap-[5px] items-center lg:hidden"
										onClick={() => setShowFilter(true)}
									>
										<img src="/images/icons/icon-filter.svg" className="h-full" alt="" />
										<p className="font-bold text-xl">Filter</p>
									</div>
								</div>
							</div>
							<div className="container">
								<p className="font-bold text-lg mb-[29px]">
									Số giao dịch tìm thấy: <span className="text-pink-main">76</span>
								</p>
							</div>
							<div className="container grid grid-cols-11 gap-[20px] box-border">
								<div className="lg:col-span-6 col-span-11 lg:mb-0 mb-[30px]">
									<div
										className={`w-full h-[100%] min-h-[321px] bg-[url('https://nftstorage.link/ipfs/bafkreihxz6vgbegn2hi4gaflnnihibswso3nubj2g2ftdb37cvrlolttua')] bg-cover bg-center bg-no-repeat`}
									/>
								</div>
								<div className="lg:col-span-5 col-span-11 lg:mb-0 mb-[30px]">
									<Card style={{ border: '0' }} className="mb-[40px]">
										<Card.Grid className="text-left card-grid-custom" style={{ border: `1px dashed #acacac` }}>
											<p className="underline font-sm text-sm mb-[13px]">Giá thấp nhất: </p>
											<p className="font-bold text-blue-text text-base text-price">110.000.000 đ</p>
										</Card.Grid>
										<Card.Grid className="text-left card-grid-custom" style={{ border: `1px dashed #acacac` }}>
											<p className="underline font-sm text-sm mb-[13px]">Giá trung bình:</p>
											<p className="font-bold text-black text-base text-price">585.000.000 đ</p>
										</Card.Grid>
										<Card.Grid className="text-left card-grid-custom" style={{ border: `1px dashed #acacac` }}>
											<p className="underline font-sm text-sm mb-[13px]">Giá cao nhất:</p>
											<p className="font-bold text-pink-main text-base text-price">885.000.000 đ</p>
										</Card.Grid>
									</Card>
								</div>
							</div>

							<div className="container grid grid-cols-12 gap-[20px] pt-[56px] box-border-">
								<div className="lg:col-span-6 col-span-12 lg:mb-0 mb-[30px] rouded p-[13px] box-border brand-box">
									<ColumnChart />
								</div>
								<div className="lg:col-span-6 col-span-12 lg:mb-0 mb-[30px] rouded p-[13px] box-border brand-box">
									<BarChart />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(Content);

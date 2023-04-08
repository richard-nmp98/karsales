import { Select } from 'antd';
import React, { memo } from 'react';
import CardPromotion from '../CardPromotion';
import { Wrapper } from './styled';

const Promotion = () => {
	return (
		<>
			<Wrapper>
				<div>
					<p className="title font-bold text-[32px] text-blue-text text-center mb-[30px]">Tìm khuyến mãi</p>
				</div>
				<div className="filter mb-[40px]">
					<div className="filter-content flex items-center box-border flex justify-center items-end gap-[19px]">
						<div className="bg-[#FAFAFA] rounded flex lg:flex-nowrap flex-wrap justify-center items-end gap-[19px] py-[29px] px-[69px] ">
							<div className="w-[268px]">
								<div className="w-full mb-[10px] font-normal text-sm text-[#797979]">HÃNG XE</div>
								<div className="w-full h-[40px]">
									<Select
										showSearch
										className="w-full rounded antd-select-border-0 antd-select-box-shadow ant-select-h-40 font-normal text-base text-blue-text select_custom_border"
										placeholder="Select a model"
										optionFilterProp="children"
										defaultValue="Ford"
										suffixIcon={<img src={'/images/icons/dropdown.svg'} alt="" />}
										onChange={() => {}}
										onSearch={() => {}}
										filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
										options={[
											{
												label: 'Ford',
												value: 'Ford',
											},
										]}
									/>
								</div>
							</div>
							<div className="w-[268px]">
								<div className="w-full mb-[10px] font-normal text-sm text-[#797979]">MẪU XE</div>
								<div className="w-full h-[40px]">
									<Select
										showSearch
										className="w-full rounded antd-select-border-0 antd-select-box-shadow ant-select-h-40 font-normal text-base text-blue-text select_custom_border"
										placeholder="Select a model"
										optionFilterProp="children"
										defaultValue="Everest"
										suffixIcon={<img src={'/images/icons/dropdown.svg'} alt="" />}
										onChange={() => {}}
										onSearch={() => {}}
										filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
										options={[
											{
												label: 'Everest',
												value: 'Everest',
											},
										]}
									/>
								</div>
							</div>
							<div className="w-[268px]">
								<div className="w-full mb-[10px] font-normal text-sm text-[#797979]">KHU VỰC</div>
								<div className="w-full h-[40px]">
									<Select
										showSearch
										className="w-full rounded antd-select-border-0 antd-select-box-shadow ant-select-h-40 font-normal text-base text-blue-text select_custom_border"
										placeholder="Select a model"
										optionFilterProp="children"
										defaultValue="Tp. Hồ Chí Minh"
										suffixIcon={<img src={'/images/icons/dropdown.svg'} alt="" />}
										onChange={() => {}}
										onSearch={() => {}}
										filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
										options={[
											{
												label: 'Tp. Hồ Chí Minh',
												value: 'Tp. Hồ Chí Minh',
											},
										]}
									/>
								</div>
							</div>
							<div className="lg:w-auto w-full text-center">
								<button className="bg-pink-main text-white w-[102px] h-[40px] box-border rounded">Tìm</button>
							</div>
						</div>
					</div>
				</div>

				<div className="list-promotion grid grid-cols-12 gap-[20px]">
					{new Array(8).fill(null).map((item, index) => (
						<div className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12" key={index}>
							<CardPromotion />
						</div>
					))}
					<div className="col-span-12 mt-[39px] flex items-center justify-center ">
						<button className="min-w-[158px] h-[40px] bg-white border-blue-text text-blue-text flex gap-[13px] items-center justify-center border-[1px] rounded whitespace-nowrap">
							Xem thêm
							<img src="/images/icons/down-circle.svg" alt="" />
						</button>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(Promotion);

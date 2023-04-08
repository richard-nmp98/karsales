import { Select, Slider } from 'antd';
import React, { memo, useState } from 'react';
import { Wrapper } from './styled';

const Filter: React.FC = () => {
	const [odoFrom, setOtoFrom] = useState(0);
	const [odoTo, setOtoTo] = useState(120000);
	const [showOdo, setShowOto] = useState(false);

	return (
		<>
			<Wrapper className="py-[39px] px-[25px] box-border">
				<div className="flex flex-wrap gap-[14px]">
					<img src="/images/icons/filter-red.svg" alt="" className="icon" />
					<p className="font-bold text-lg text-blue-main">Phân tích giá xe cũ</p>
				</div>
				<div className="line w-full h-[1px] bg-[#E5E5E5] mt-[7.5px] mb-[19.5px]" />
				<div className="mb-[15px]">
					<p className="font-bold text-sm mb-[13px] text-date-500">Hãng xe</p>
					<Select
						className="w-full rounded ant-select-h-40 font-normal text-base"
						showSearch
						placeholder="Select a City"
						optionFilterProp="children"
						defaultValue="Mitsubishi"
						suffixIcon={<img src={'/images/icons/dropdown-gray.svg'} alt="" />}
						onChange={() => {}}
						onSearch={() => {}}
						filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
						options={[
							{
								label: 'Mitsubishi',
								value: 'Mitsubishi',
							},
						]}
					/>
				</div>
				<div className="mb-[15px]">
					<p className="font-bold text-sm mb-[13px] text-date-500">Mẫu xe</p>
					<Select
						className="w-full rounded ant-select-h-40 font-normal text-base"
						showSearch
						placeholder="Select a City"
						optionFilterProp="children"
						defaultValue="Triton"
						suffixIcon={<img src={'/images/icons/dropdown-gray.svg'} alt="" />}
						onChange={() => {}}
						onSearch={() => {}}
						filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
						options={[
							{
								label: 'Triton',
								value: 'Triton',
							},
						]}
					/>
				</div>
				<div className="mb-[15px]">
					<p className="font-bold text-sm mb-[13px] text-date-500">Phiên bản</p>
					<Select
						className="w-full rounded ant-select-h-40 font-normal text-base"
						showSearch
						placeholder="Select a City"
						optionFilterProp="children"
						defaultValue="4×4 AT MIVEC PREMIUM"
						suffixIcon={<img src={'/images/icons/dropdown-gray.svg'} alt="" />}
						onChange={() => {}}
						onSearch={() => {}}
						filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
						options={[
							{
								label: '4×4 AT MIVEC PREMIUM',
								value: '4×4 AT MIVEC PREMIUM',
							},
						]}
					/>
				</div>
				<div className="mb-[69px]">
					<p className="font-bold text-sm mb-[13px] text-date-500">Năm sản xuất</p>
					<Select
						className="w-full rounded ant-select-h-40 font-normal text-base"
						showSearch
						placeholder="Select a City"
						optionFilterProp="children"
						defaultValue="2015"
						suffixIcon={<img src={'/images/icons/dropdown-gray.svg'} alt="" />}
						onChange={() => {}}
						onSearch={() => {}}
						filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
						options={[
							{
								label: '2015',
								value: '2015',
							},
						]}
					/>
				</div>
				<div className="flex flex-wrap gap-[14px] cursor-pointer" onClick={() => setShowOto(!showOdo)}>
					<img src="/images/icons/filter.svg" alt="" className="icon" />
					<p className="font-bold text-lg text-date-500">Phân tích giá xe cũ</p>
				</div>
				<div
					style={{
						height: showOdo ? '109px' : '0px',
						width: '231px',
						overflow: 'hidden',
						transition: 'all .3s ease-out',
					}}
				>
					<div className="line w-full border-dashed border-[0.5px] border-[#E2E2E2] mt-[11].5px] mb-[4.5px] col-span-12" />
					<p className="font-bold text-lg text-date-500 mb-[24.5px]">Odo</p>
					<Slider
						range
						defaultValue={[odoFrom, odoTo]}
						min={0}
						max={200000}
						onChange={(value) => {
							setOtoFrom(value[0]);
							setOtoTo(value[1]);
						}}
						railStyle={{ backgroundColor: '#E1E1E1' }}
						trackStyle={[{ backgroundColor: '#0A43C3' }]}
					/>
					<p className="font-bold text-lg text-date-500">
						{odoFrom.toLocaleString('it-IT')}km - {odoTo.toLocaleString('it-IT')}km
					</p>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(Filter);

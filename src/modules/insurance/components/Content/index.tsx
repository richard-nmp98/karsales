import { BrandType } from '@/types';
import { Input, Select } from 'antd';
import Link from 'next/link';
import React, { memo, useState } from 'react';
import { Wrapper } from './styled';

const Content: React.FC = () => {
	const [insuranceCompany] = useState<BrandType[]>(
		new Array(10).fill({
			image: 'https://nftstorage.link/ipfs/bafkreih43szjmwfnkdoskbu25up7iuueyizxui7bn3cka3oidabjcqg2la',
			slug: 'bmw',
			name: 'BMW',
		}),
	);

	const [insuranceData] = useState(
		new Array(5).fill({
			type: 'Bảo hiểm trách nhiệm dân sự ',
			require: true,
			compensation: [
				'• Thiệt hại về sức khỏe, tính mạng của hành khách do xe cơ giới gây ra.',
				'• Thiệt hại ngoài hợp đồng về sức khỏe, tính mạng và tài sản đối với bên thứ ba do xe cơ giới gây ra.',
			],
		}),
	);

	return (
		<>
			<Wrapper className="py-10">
				<p className="font-bold text-lg mb-11">
					Khi sở hữu một chiếc ô tô, chủ xe cần mua{' '}
					<span className="text-pink-main">bảo hiểm bắt buộc trách nhiệm dân sự</span> được quy định tại nghị định số
					03/2021/NĐ-CP của Chính phủ ban hành ngày 15/01/2021. Thế nhưng ngoài bảo hiểm bắt buộc thì còn có các loại
					hình <span className="text-pink-main">bảo hiểm tự nguyện</span> khác mà chủ xe cũng nên quan tâm{' '}
				</p>
				<p className="font-bold text-lg mb-8">Cùng KAR tìm hiểu các loại bảo hiểm quan trọng dành cho ôtô :</p>
				<div className="mb-[36px] flex flex-col">
					<div className="tabs flex gap-[31px]">
						<div className="text-[#003DC6] font-bold py-2 cursor-pointer text-[26px] tab">
							Các loại bảo hiểm xe ô tô quan trọng
						</div>
					</div>
				</div>

				<div className="overflow-x-auto mb-[59px]">
					<table className="table-auto w-full">
						<thead>
							<tr className="bg-gray-100 text-left">
								<th className="px-4 py-2 font-bold text-sm">LOẠI BẢO HIỂM</th>
								<th className="px-4 py-2 font-bold text-sm">TÍNH BẮT BUỘC</th>
								<th className="px-4 py-2 font-bold text-sm">PHẠM VI BỒI THƯỜNG THIỆT HẠI </th>
							</tr>
						</thead>
						<tbody>
							{insuranceData?.map((item, index) => (
								<tr key={index}>
									<td className="border px-4 py-2 font-bold text-normal">{item?.type}</td>
									<td className="border px-4 py-2">{index % 2 === 0 ? 'Bắt buộc' : 'Tự nguyện'}</td>
									<td className="border px-4 py-2">
										{item?.compensation?.map((text: string, idx: any) => (
											<p key={idx}>{text}</p>
										))}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className="mb-[58px] flex flex-col">
					<div className="tabs flex gap-[31px]">
						<div className="text-[#003DC6] font-bold py-2 cursor-pointer text-[26px] tab">
							Các công ty bảo hiểm ô tô tại Việt Nam
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-5 grid-cols-3 gap-3 mb-[58px] ">
					{insuranceCompany?.map((item, index) => (
						<Link
							key={index}
							href={`/${item.slug}`}
							className="brand-box xl:p-[30px] lg:p-[25px] box-border p-[24px] rounded"
							style={{ border: 0 }}
						>
							<img src={item?.image ?? ''} className="w-full" alt="" />
						</Link>
					))}
				</div>

				<div className="mb-[8px] flex flex-col">
					<div className="tabs line-top flex gap-[31px]">
						<div className="text-[#003DC6] font-bold py-2 cursor-pointer sm:text-5xl text-4xl tab">Yêu cầu tư vấn</div>
					</div>
				</div>
				<p className="italic font-normal text-sm mb-[27px]">
					Bộ phận bảo hiểm sẽ gọi lại cho bạn ngay sau khi nhận được yêu cầu.
				</p>

				<div className="form p-[30px] box-border bg-white w-full">
					<div className="grid grid-cols-12 gap-[25px]">
						<div className="sm:col-span-6 col-span-12">
							<p className="text-sm font-normal mb-2.5">Họ và tên *</p>
							<Input className="h-[40px] border-0 box-shadow font-normal text-base rounded" />
						</div>
						<div className="sm:col-span-6 col-span-12">
							<p className="text-sm font-normal mb-2.5">Khu vực *</p>
							<Select
								showSearch
								className="w-full rounded antd-select-border-0 antd-select-box-shadow ant-select-h-40 font-normal text-base"
								placeholder="Select a version"
								optionFilterProp="children"
								defaultValue="null"
								suffixIcon={<img src={'/images/icons/dropdown.svg'} alt="" />}
								onChange={() => {}}
								onSearch={() => {}}
								filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
								options={[
									{
										label: '— Chọn —',
										value: 'null',
									},
								]}
							/>
						</div>
						<div className="sm:col-span-6 col-span-12">
							<p className="text-sm font-normal mb-2.5">Số điện thoại * </p>
							<Input className="h-[40px] border-0 box-shadow font-normal text-base rounded" />
						</div>
						<div className="sm:col-span-6 col-span-12">
							<p className="text-sm font-normal mb-2.5">Email</p>
							<Input className="h-[40px] border-0 box-shadow font-normal text-base rounded" />
						</div>
						<div className="sm:col-span-6 col-span-12">
							<p className="text-sm font-normal mb-2.5">Loại bảo hiểm</p>
							<Select
								showSearch
								className="w-full rounded antd-select-border-0 antd-select-box-shadow ant-select-h-40 font-normal text-base"
								placeholder="Select a version"
								optionFilterProp="children"
								defaultValue="null"
								suffixIcon={<img src={'/images/icons/dropdown.svg'} alt="" />}
								onChange={() => {}}
								onSearch={() => {}}
								filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
								options={[
									{
										label: '— Tất cả —',
										value: 'null',
									},
								]}
							/>
						</div>
						<div className="sm:col-span-6 col-span-12">
							<p className="text-sm font-normal mb-2.5">Ghi chú</p>
							<Input className="h-[40px] border-0 box-shadow font-normal text-base rounded" />
						</div>
						<div className="col-span-12">
							<button
								className="font-bold text-normal text-white flex justify-center items-center w-[113px] h-[40px] bg-pink-main rounded gap-[6.3px] hover:gap-[15.3px]"
								style={{ transition: 'all .3s ease-out' }}
							>
								GỬI <img src="/images/icons/arrowRightCircleWhite.svg" alt="" />
							</button>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(Content);

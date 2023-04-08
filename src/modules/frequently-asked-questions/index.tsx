import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import Carousel from '@/components/Carousel';
import { BannerPositionEnum } from '@/graphql/type.interface';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import React, { memo, useState } from 'react';
import { Wrapper } from './styled';
import data from '@/helpers/help.json';

const { Panel } = Collapse;

const FrequentlyAskedQuestions = () => {
	const [current] = useState<BreadcrumbItem>({ title: 'Câu hỏi thường gặp ' });
	const [active, setActive] = useState(0);

	return (
		<Wrapper>
			<Carousel position={BannerPositionEnum.WEBSITE_BODY} />
			<Breadcrumb current={current} />
			<div className="container grid grid-cols-12 gap-[20px] box-border pt-[30px] pb-[75px] box-border">
				<div className="col-span-12 text-center">
					<p className="font-bold text-blue-text md:pb-[19px] pb-[30px] ssm:text-[42px] text-[32px]">
						Câu hỏi thường gặp
					</p>
				</div>
				<div className="col-span-12">
					<div className="flex gap-[20px] justify-center">
						{data.map((item, index) => {
							return (
								<button
									key={index}
									onClick={() => setActive(index)}
									className={`w-full buyer ${
										active === index ? 'bg-blue-main text-white' : 'bg-[#F4F5F7]'
									} py-[8px] box-border rounded whitespace-nowrap max-w-[150px]`}
								>
									{item.name}
								</button>
							);
						})}
					</div>
				</div>
				<div className="col-span-12">
					<div className="w-[80%] m-auto content-faq">
						{data[active]?.data?.map((item, index) => (
							<>
								<p className={`font-bold text-normal ${index > 0 ? 'mt-[15px]' : ''} mb-[5px]`}>{item.name}</p>
								{item.data.map((it, idx) => {
									return (
										<Collapse
											key={idx}
											expandIcon={({ isActive }) => {
												return isActive ? <MinusOutlined /> : <PlusOutlined />;
											}}
											expandIconPosition="end"
											className="mb-[16px]"
										>
											<Panel header={it.question} key={`${active}-${index}-${idx}`}>
												<div dangerouslySetInnerHTML={{ __html: it.answer.replace(/\n/g, '<br>') }}></div>
											</Panel>
										</Collapse>
									);
								})}
							</>
						))}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default memo(FrequentlyAskedQuestions);

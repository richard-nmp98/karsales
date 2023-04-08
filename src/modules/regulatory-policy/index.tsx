import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import Carousel from '@/components/Carousel';
import { BannerPositionEnum } from '@/graphql/type.interface';
import React, { memo, useState } from 'react';
import { Wrapper } from './styled';
import regulatoryPolicy from '@/helpers/regulatory-policy.json';

const RegulatoryPolicy = () => {
	const [current] = useState<BreadcrumbItem>({ title: 'Chính sách quy định' });

	return (
		<Wrapper>
			<Carousel position={BannerPositionEnum.WEBSITE_BODY} />
			<Breadcrumb current={current} />
			<div className="container box-border py-[73px] lg:px-[100px] sm:px-12 box-border">
				<p className="font-bold text-[21px] pb-[10px] text-center">{regulatoryPolicy.name}</p>
				<p className="font-bold text-[21px] pb-[30px] text-center">{regulatoryPolicy.subname}</p>
				{regulatoryPolicy.data.map((items, index) => (
					<div key={index}>
						<p className="text-[21px] font-bold pt-[39px] pb-[10px]">{items.name}</p>
						<p dangerouslySetInnerHTML={{ __html: items.description ?? '' }} className="pb-[10px]" />
						{items.data && items.data.length ? (
							items.data.map((item: any, idx) => (
								<div key={idx}>
									<p
										dangerouslySetInnerHTML={{ __html: item.text ?? '' }}
										className={`pb-[10px] ${item.textBold ? 'font-bold' : ''}`}
									/>
									{item.description ? (
										<p key={index} className="pb-[10px]" dangerouslySetInnerHTML={{ __html: item.description ?? '' }} />
									) : (
										''
									)}
									{item?.child && item.child.length > 0 ? (
										item.child.map((it: any, ix: any) => (
											<>
												<div className={`${item.isPaddingLetf ? 'pl-[20px]' : ''} pb-[10px]`}>
													<p key={index} dangerouslySetInnerHTML={{ __html: it ?? '' }} />
												</div>
											</>
										))
									) : (
										<></>
									)}
								</div>
							))
						) : (
							<></>
						)}
					</div>
				))}
			</div>
		</Wrapper>
	);
};

export default memo(RegulatoryPolicy);

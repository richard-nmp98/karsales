import React from 'react';
import FeatureImageVideo from '@/components/News/FeatureImageVideo';
import Link from 'next/link';
import ModifiedDate from '@/components/ModifiedDate';
import { ReviewsEntity } from '@/graphql/type.interface';
import { trimWord } from '@/helpers/functions';
import { Skeleton } from 'antd';

type GridTemplateProps = {
	archiveLink?: string;
	items: ReviewsEntity[];
	className?: string;
	loading?: boolean;
};

const GridTemplate2: React.FC<GridTemplateProps> = ({
	items,
	archiveLink = '',
	className = '',
	loading = false,
}: GridTemplateProps) => {
	if (items.length === 0) return null;
	const _items = [...items];
	const item1 = _items.shift() as ReviewsEntity;

	const item1Title = item1.nameVi || '';
	const item1Description = trimWord(item1.descriptionVi || '', 200);
	return (
		<div className={`grid grid-cols-12 md:gap-x-8 gap-x-0 md:gap-y-0 gap-y-4 ${className}`}>
			<div className="col-span-12 lg:col-span-4">
				<Skeleton loading={loading} active paragraph={{ rows: 11 }}>
					<div className="relative">
						<div className="relative">
							<div className={'relative z-[80]'}>
								<FeatureImageVideo postReview={item1} />
							</div>
							<span className="absolute cursor-pointer inset-0 flex items-center justify-center z-[90] text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-16 h-16"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									<path
										strokeLinecap="round"
										fill={'#FFF'}
										strokeLinejoin="round"
										d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
									/>
								</svg>
							</span>
						</div>
						<Link
							className="text-2xl font-semibold mt-2 block"
							href={`${archiveLink}/${item1.slug}`}
							title={item1Title}
						>
							{item1.nameVi}
						</Link>
						<ModifiedDate dateTime={item1.updatedAt || item1.createdAt} />
						<p>{item1Description}</p>
					</div>
				</Skeleton>
			</div>
			<div className="col-span-12 lg:col-span-8">
				<div className={'grid grid-cols-12 gap-x-0 md:gap-8'}>
					{loading
						? new Array(4).fill(0).map((item, index) => (
								<div key={index} className={'col-span-12 lg:col-span-6'}>
									<Skeleton paragraph={{ rows: 5, width: '100%' }} active />
								</div>
						  ))
						: _items?.map((item, index) => {
								const desc = trimWord(item.descriptionVi || '');
								const title = item.nameVi || '';
								return (
									<div key={index} className={'col-span-12 lg:col-span-6'}>
										<div className="grid grid-cols-12 gap-x-0 md:gap-x-2">
											<div className="col-span-12 lg:col-span-8 order-2 md:order-1">
												<Link
													className="text-lg leading-5 mb-2 font-semibold block"
													href={`${archiveLink}/${item.slug}`}
													title={title}
												>
													{item.nameVi}
												</Link>
												<ModifiedDate dateTime={item.updatedAt || item.createdAt} />
												<div className="mt-2">
													<p>{desc}</p>
												</div>
											</div>
											<div className="col-span-12 lg:col-span-4 order-1 md:order-2">
												<Link href={`${archiveLink}/${item.slug}`} legacyBehavior={true}>
													<a>
														<FeatureImageVideo postReview={item} />
													</a>
												</Link>
											</div>
										</div>
									</div>
								);
						  })}
				</div>
			</div>
		</div>
	);
};

export default GridTemplate2;

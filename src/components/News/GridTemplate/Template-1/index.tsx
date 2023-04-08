import React from 'react';
import CarTag from '@/components/CarTag';
import Link from 'next/link';
import ModifiedDate from '@/components/ModifiedDate';
import FeatureImageVideo from '@/components/News/FeatureImageVideo';
import { ReviewsEntity } from '@/graphql/type.interface';
import { trimWord } from '@/helpers/functions';
import { StringToSlug } from '@/helpers/string-to-slug';
import { Skeleton } from 'antd';

type GridTemplateProps = {
	hasTag?: boolean;
	archiveLink?: string;
	items: ReviewsEntity[];
	className?: string;
	loading?: boolean;
};

// const FeatureImageVideo = dynamic(() => import('@/components/News/FeatureImageVideo'), {
// 	ssr: false,
// });

const GridTemplate1: React.FC<GridTemplateProps> = ({
	items,
	hasTag = false,
	archiveLink = '',
	className = '',
	loading = false,
}: GridTemplateProps) => {
	if (items.length === 0) return null;
	const _items = [...items];
	const item1 = _items.shift() as ReviewsEntity;
	const item2 = _items.shift() as ReviewsEntity;

	const item1Title = item1.nameVi || '';
	const item1Description = trimWord(item1.descriptionVi || '', 200);
	const item1Slug = item1.slug || StringToSlug(item1Title);
	const item2Title = item2.nameVi || '';
	const item2Description = trimWord(item2.descriptionVi || '', 200);
	const item2Slug = item2.slug || StringToSlug(item2Title);
	return (
		<div className={`grid grid-cols-12 md:gap-x-8 gap-x-0 md:gap-y-0 gap-y-4 ${className}`}>
			<div className="col-span-12 lg:col-span-6">
				<Skeleton loading={loading} active paragraph={{ rows: 8 }}>
					<div className="relative">
						{hasTag && <CarTag title={item1.categories?.nameVi || ''} />}
						<div className="relative">
							<div className={'relative z-[80]'}>
								<FeatureImageVideo archiveLink={archiveLink} postReview={item1} />
							</div>
						</div>
						<Link className="text-2xl font-semibold mt-2 block" href={`${archiveLink}/${item1Slug}`} title={item1Title}>
							{item1.nameVi}
						</Link>
						<ModifiedDate dateTime={item1.updatedAt || item1.createdAt} />
						<p>{item1Description}</p>
					</div>
				</Skeleton>
			</div>
			<div className="col-span-12 lg:col-span-3">
				<div>
					<Skeleton loading={loading} active>
						<FeatureImageVideo archiveLink={archiveLink} postReview={item2} />
						<Link className="text-xl font-semibold my-2 block" href={`${archiveLink}/${item2Slug}`} title={item2Title}>
							{item2.nameVi}
						</Link>
						<ModifiedDate dateTime={item1.updatedAt || item1.createdAt} />
						<p>{item2Description}</p>
					</Skeleton>
				</div>
			</div>
			<div className="col-span-12 lg:col-span-3">
				{loading
					? new Array(2).fill(0).map((item, index) => (
							<div
								key={index}
								className="grid grid-cols-12 gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-2 border-b last:border-b-0 py-3 my-3 first:pt-0 first:mt-0"
							>
								<Skeleton active />
							</div>
					  ))
					: _items?.map((item, index) => {
							const title = item.nameVi || '';
							const description = trimWord(item.descriptionVi || '');
							const slug = item.slug || StringToSlug(title);
							return (
								<div
									key={index}
									className="grid grid-cols-12 gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-2 border-b last:border-b-0 py-3 my-3 first:pt-0 first:mt-0"
								>
									<div className="col-span-12 lg:col-span-8 order-2 md:order-1">
										<Link
											className="text-lg leading-5 font-semibold block mb-2"
											href={`${archiveLink}/${slug}`}
											title={title}
										>
											{item.nameVi}
										</Link>
										<ModifiedDate dateTime={item.updatedAt || item.createdAt} />
									</div>
									<div className="col-span-12 lg:col-span-4 order-1 md:order-2">
										<FeatureImageVideo archiveLink={archiveLink} postReview={item} />
									</div>
									<div className="col-span-12 order-3 mt-3">
										<p>{description}</p>
									</div>
								</div>
							);
					  })}
			</div>
		</div>
	);
};

export default GridTemplate1;

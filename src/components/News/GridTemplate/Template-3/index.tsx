import React from 'react';
import ReviewItem from '@/modules/_/components/VehiclesReview/Item';
import { ReviewsEntity } from '@/graphql/type.interface';
import { Skeleton } from 'antd';

type GridTemplateProps = {
	archiveLink?: string;
	items: ReviewsEntity[];
	className?: string;
	loading?: boolean;
};

const GridTemplate3: React.FC<GridTemplateProps> = (props: GridTemplateProps) => {
	const { items, className = '', loading = false } = props;
	if (items.length === 0) return null;

	return (
		<div className={`grid grid-cols-12 gap-8 ${className}`}>
			{loading
				? new Array(6).fill(0).map((item, index) => (
						<div key={index} className={'col-span-12 lg:col-span-6'}>
							<Skeleton paragraph={{ rows: 4, width: '100%' }} active />
						</div>
				  ))
				: items?.map((item, index) => {
						return (
							<div key={index} className={'col-span-12 lg:col-span-6'}>
								<ReviewItem trimWordCount={30} postReview={item} positionDateCommentView={'after-title'} {...props} />
							</div>
						);
				  })}
		</div>
	);
};

export default GridTemplate3;

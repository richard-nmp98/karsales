import React from 'react';
import { ReviewType } from '@/types';
import ReviewItem from '@/modules/_/components/VehiclesReview/Item';

type GridTemplateProps = {
	archiveLink?: string;
	items: ReviewType[];
	className?: string;
};

const GridTemplate4: React.FC<GridTemplateProps> = (props: GridTemplateProps) => {
	const { items, className = '' } = props;
	if (items.length === 0) return null;

	return (
		<div className={`grid grid-cols-12 gap-8 ${className}`}>
			{items?.map((item, index) => {
				return (
					<div key={index} className={'col-span-12 lg:col-span-4'}>
						<ReviewItem postReview={item} imagePosition={'top'} positionDateCommentView={'after-title'} {...props} />
					</div>
				);
			})}
		</div>
	);
};

export default GridTemplate4;

import React from 'react';
import { ReviewsEntity } from '@/graphql/type.interface';

type Props = {
	postReview: ReviewsEntity;
};
const VehicleReviewDetail: React.FC<Props> = ({ postReview }: Props) => {
	return (
		<>
			<div className={`review-detail`} dangerouslySetInnerHTML={{ __html: postReview.contentVi as string }}></div>
		</>
	);
};

export default VehicleReviewDetail;

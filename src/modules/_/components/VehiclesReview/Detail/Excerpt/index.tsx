import React from 'react';
import moment from 'moment';
import { ReviewsEntity } from '@/graphql/type.interface';

type Props = {
	postReview: ReviewsEntity;
};
const VehicleReviewDetailExcerpt: React.FC<Props> = ({ postReview }: Props) => {
	return (
		<>
			<h1 className="font-semibold tracking-tighter0">{postReview.nameVi}</h1>
			<p className={'text-[#555555]'} dangerouslySetInnerHTML={{ __html: postReview.descriptionVi as string }} />
			<div className={'flex items-center justify-center space-x-3 text-[#797979] font-semibold'}>
				<span>Đánh giá xe</span>
				<span className={'mt-1.5'}>
					<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="3" cy="3" r="3" fill="#797979" />
					</svg>
				</span>
				<span>{moment(postReview.updatedAt || postReview.createdAt).format('DD, [tháng] MM, YYYY')}</span>
			</div>
		</>
	);
};

export default VehicleReviewDetailExcerpt;

import React, { useState } from 'react';
import ReviewItem from '@/modules/_/components/VehiclesReview/Item';
import { useGetListReviewsQuery } from '@/graphql/queries/getListReviews.generated';
import { ReviewsEntity } from '@/graphql/type.interface';
import { useAppState } from '@/context/AppContext';
import { Skeleton } from 'antd';

const MAXDATA = 5;
const NewsVehicleReview: React.FC = () => {
	const [reViewsVehicle, setReViewsVehicle] = useState<ReviewsEntity[]>([]);
	const { appState } = useAppState();
	const { loading } = useGetListReviewsQuery({
		fetchPolicy: 'cache-first',
		variables: {
			input: {
				take: MAXDATA,
				skip: 1,
				category: process.env.reviewsCategoryVehicle,
				ignoreId: appState?.vehicleNews?.map((item: ReviewsEntity) => {
					return item?.id;
				}),
			},
		},
		onCompleted: (res) => {
			setReViewsVehicle(res?.getListReviews?.items || []);
		},
	});

	return (
		<>
			<div className="pb-8 border-b-2 border-[#003DC6]">
				<h3 className="text-secondary-500 short-border-title font-semibold py-2 cursor-pointer xl:text-[32px] sm:text-[20px] text-[24px]">
					Đánh giá xe
				</h3>
				<div className="grid grid-cols-12 gap-y-4 divide-y">
					{loading
						? new Array(MAXDATA).fill(null).map((item, index) => (
								<div key={index} className="col-span-12 pt-6 top:pt-0">
									<Skeleton active />
								</div>
						  ))
						: reViewsVehicle?.map((item, index) => {
								return (
									<div key={index} className="col-span-12 pt-4 top:pt-0">
										<ReviewItem
											titleClassName={'text-[16px] leading-tight font-bold'}
											showDescription={false}
											imagePosition={'right'}
											postReview={item}
											archiveLink={'/danh-gia-xe'}
										/>
									</div>
								);
						  })}
				</div>
			</div>
		</>
	);
};

export default NewsVehicleReview;

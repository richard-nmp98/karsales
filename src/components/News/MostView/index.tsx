import React from 'react';
import { ReviewType } from '@/types';
import ReviewItem from '@/modules/_/components/VehiclesReview/Item';

const NewsMostView: React.FC = () => {
	const postReview: ReviewType = {
		categories: {
			id: '1',
			nameVi: 'test',
			nameEn: 'test',
			slug: 'test',
			createdAt: '',
			updatedAt: '',
			total: 0,
		},
		createdAt: '',
		descriptionEn: '',
		id: '',
		isActive: false,
		mediaIds: [],
		nameEn: '',
		thumnail: '',
		nameVi: 'Hyundai Santa Fe Calligraphy 2021 - Đổi mới',
		descriptionVi:
			'So với phiên bản trước, Honda Civic Type R 2021 không có quá nhiều thay đổi, tuy nhiên lại có mức giá cao hơn 500 USD (khoảng 11,6 triệu đồng). Nhưng ở bản 2021, Honda Civic Type R đã bổ sung',
		updatedAt: '2021-08-12T09:00:00.000Z',
	};
	return (
		<>
			<div className="pb-8 border-b-2 border-[#003DC6]">
				<h3 className="text-secondary-500 short-border-title font-semibold py-2 cursor-pointer xl:text-[32px] sm:text-[20px] text-[24px]">
					Tin xem nhiều
				</h3>
				<div className="grid grid-cols-12 gap-y-4 divide-y">
					{new Array(5).fill(null).map((item, index) => (
						<div key={index} className="col-span-12 pt-4 top:pt-0">
							<ReviewItem
								titleClassName={'text-[16px] leading-tight font-bold'}
								showDescription={false}
								imagePosition={'right'}
								postReview={postReview}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default NewsMostView;

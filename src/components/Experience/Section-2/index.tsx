import React, { useRef, useState } from 'react';
import Pagination from '@/components/Pagination';
import { PaginationMeta, ReviewsEntity } from '@/graphql/type.interface';
import dynamic from 'next/dynamic';
import { useGetListReviewsQuery } from '@/graphql/queries/getListReviews.generated';

const LIMIT_EXP = 4;
const ExperienceSection2: React.FC = () => {
	const ref = useRef<any>(null);
	const [reViewsExp, setReViewsExp] = useState<ReviewsEntity[]>([]);
	const [paginationExp, setPaginationExp] = useState<PaginationMeta>();
	const [pageExp, setPageExp] = useState(1);

	const GridTemplate3 = dynamic(() => import('@/components/News/GridTemplate/Template-3'), {
		ssr: false,
	});

	const { loading: reviewExpLoading } = useGetListReviewsQuery({
		fetchPolicy: 'cache-first',
		variables: {
			input: {
				take: LIMIT_EXP,
				skip: pageExp,
				category: process.env.reviewsCategoryExperienceBuyCar,
			},
		},
		onCompleted: (res) => {
			setReViewsExp(res?.getListReviews?.items || []);
			setPaginationExp((res?.getListReviews?.meta || {}) as PaginationMeta);
		},
	});
	const handlePageChange = (pageNumber: number) => {
		// Cập nhật trang hiện tại
		setPageExp(pageNumber);
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<div id={'experience-2'} className="container mt-6" ref={ref}>
			<h3 className="text-secondary-500 font-semibold py-2 mb-2 cursor-pointer xl:text-[32px] sm:text-[20px] text-[24px]">
				Kinh Nghiệm Kiểm Tra Xe
			</h3>
			<GridTemplate3 loading={reviewExpLoading} archiveLink={'/kinh-nghiem'} className={'mb-5'} items={reViewsExp} />
			<div>
				{paginationExp?.totalItems ||
					(1 > 12 && (
						<Pagination
							wrapperClassName={'text-right kar-pagination-small experience-pagination'}
							total={paginationExp?.totalItems || 1}
							pageSize={paginationExp?.itemsPerPage || 12}
							current={paginationExp?.currentPage || 1}
							onChange={handlePageChange}
						/>
					))}
			</div>
			<div
				className={
					'w-full h-[3px] bg-[#EBEBEB] mt-5 relative before:content-[""] before:absolute before:w-[25%] before:h-full before:left-0 before:top-0 before:bg-main-500'
				}
			></div>
		</div>
	);
};

export default ExperienceSection2;

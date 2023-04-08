import React, { memo, useState } from 'react';
import ReviewItem from '@/modules/_/components/VehiclesReview/Item';
import { PaginationMeta, ReviewsEntity } from '@/graphql/type.interface';
import Pagination from '@/components/Pagination';
import { useGetListReviewsQuery } from '@/graphql/queries/getListReviews.generated';
// import { useAppState } from '@/context/AppContext';
import { useParam } from '@/hooks/useParam';
import { useRouter } from 'next/router';
import { Skeleton } from 'antd';

type ListHasTagProps = {
	archiveLink?: string;
	scrollToElement?: string;
	ignoreId?: string[];
};

const ListHasTag: React.FC<ListHasTagProps> = ({ archiveLink, scrollToElement = '', ignoreId = [] }) => {
	const router = useRouter();
	const pageParam = useParam('page');
	const [reViewsAllList, setReViewsAllList] = useState<ReviewsEntity[]>([]);
	const [pagination, setPagination] = useState<PaginationMeta>();
	const [page, setPage] = useState(pageParam || 1);
	const handlePageChange = (pageNumber: number) => {
		// Cập nhật trang hiện tại
		setPage(pageNumber);

		// Tạo URL mới dựa trên số trang được chọn
		let href = `/danh-gia-xe?page=${pageNumber}`;
		// useRef()
		// Chuyển đến URL mới
		if (scrollToElement) {
			href = `${href}#${scrollToElement}`;
		}
		router.push(href);
	};

	const { loading } = useGetListReviewsQuery({
		fetchPolicy: 'cache-first',
		variables: {
			input: {
				take: 12,
				skip: parseFloat(page.toString()),
				ignoreId: ignoreId,
			},
		},
		onCompleted: (res) => {
			setReViewsAllList(res?.getListReviews?.items || []);
			setPagination((res?.getListReviews?.meta || {}) as PaginationMeta);
		},
	});
	return (
		<>
			<div className="grid grid-cols-12 gap-y-6 divide-y mb-6">
				{loading
					? new Array(12).fill(0).map((item, index) => (
							<div key={index} className="col-span-12 pt-6 top:pt-0">
								<Skeleton active />
							</div>
					  ))
					: reViewsAllList?.map((item, index) => {
							const tag = item?.categories?.nameVi || '';
							return (
								<div key={index} className="col-span-12 pt-6 top:pt-0">
									<ReviewItem
										showView={false}
										showComment={false}
										imagePosition={'right'}
										tag={tag}
										postReview={item}
										archiveLink={archiveLink}
									/>
								</div>
							);
					  })}
			</div>
			<div className={`border-t`}>
				<Skeleton loading={loading} active title={false} paragraph={{ rows: 2 }}>
					<Pagination
						wrapperClassName={'flex items-center justify-between py-3'}
						total={pagination?.totalItems || 1}
						pageSize={pagination?.itemsPerPage || 12}
						current={pagination?.currentPage || 1}
						karShowTotal={true}
						onChange={handlePageChange}
					/>
				</Skeleton>
			</div>
		</>
	);
};

export default memo(ListHasTag);

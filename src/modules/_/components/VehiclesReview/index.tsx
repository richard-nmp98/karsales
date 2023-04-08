import ModifiedDate from '@/components/ModifiedDate';
import { useGetListReviewsQuery } from '@/graphql/queries/getListReviews.generated';
import { useGetReviewsCatetoriesQuery } from '@/graphql/queries/getReviewsCatetories.generated';
import { PagingReviewsInput, ReviewsEntity } from '@/graphql/type.interface';
import { cutText } from '@/helpers/common';
import { FileType, REVIEWCATEGORYSLUG } from '@/helpers/constant';
import { Skeleton } from 'antd';
import Link from 'next/link';
import React, { memo, useState } from 'react';
import TitleSection from '../TitleSection';

const VehiclesReview: React.FC = () => {
	const [listReview, setListReview] = useState<ReviewsEntity[]>();

	const { data: reviewCategory } = useGetReviewsCatetoriesQuery({
		fetchPolicy: 'cache-first',
	});

	const { loading } = useGetListReviewsQuery({
		fetchPolicy: 'cache-first',
		variables: {
			input: {
				skip: 1,
				take: 5,
				category:
					reviewCategory?.getReviewsCatetories?.find((item) => item?.slug === REVIEWCATEGORYSLUG.carReviews.value)
						?.id ?? '',
			} as PagingReviewsInput,
		},
		onCompleted(res) {
			if (res) {
				setListReview([...(res?.getListReviews?.items ?? [])]);
			}
		},
	});

	return (
		<>
			<TitleSection lineTop={true}>
				<div className="flex justify-between items-center gap-3.5 w-full flex-wrap">
					<p>Đánh giá xe</p>
					<div className="flex flex-wrap gap-5">
						<Link
							href={`/danh-gia-xe`}
							className="flex items-center gap-[5px] font-bold text-sm text-[#003DC6] whitespace-nowrap"
						>
							Xem tất cả
							<img src="/images/icons/arrowRightCircle.svg" alt="" />
						</Link>
					</div>
				</div>
			</TitleSection>
			<div className="grid xl:grid-cols-3 grid-cols-4 mb-[25px] gap-x-10">
				{loading ? (
					<div className="w-full xl:col-span-1 col-span-4 xl:mb-0 mb-[15px]">
						<Skeleton active />
					</div>
				) : (
					<div className="w-full xl:col-span-1 col-span-4 xl:mb-0 mb-[15px]">
						<Link href={`/danh-gia-xe/${listReview ? listReview[0]?.slug || listReview[0]?.id : ''}`}>
							{listReview &&
							listReview[0]?.medias &&
							listReview[0]?.medias[0]?.mimeType === FileType?.IMAGE.toLowerCase() ? (
								<div
									style={{
										backgroundImage: `url(${
											(listReview && listReview[0]?.medias ? listReview[0]?.medias[0]?.filePathOriginal : '') ?? ''
										})`,
										backgroundSize: 'cover',
										backgroundPosition: 'top',
										backgroundRepeat: 'no-repeat',
									}}
									className="w-full h-[220px] mb-[20px]"
								/>
							) : (
								<video className="w-full rounded-lg mb-2" controls>
									<source
										src={(listReview && listReview[0]?.medias ? listReview[0]?.medias[0]?.filePathOriginal : '') ?? ''}
										type="video/mp4"
									/>
								</video>
							)}
							<p className="title font-bold text-2xl mb-[21px]">{listReview ? listReview[0]?.nameVi : ''}</p>
							<p className="date font-normal tex-[11px] text-[#797979] mb-3">
								<ModifiedDate dateTime={listReview ? listReview[0]?.updatedAt || listReview[0]?.createdAt : ''} />
							</p>
							<p className="shor-desscription font-normal text-sm">
								{listReview ? cutText(listReview[0]?.descriptionVi ?? '') : ''}
							</p>
						</Link>
					</div>
				)}
				<div className="xl:hidden col-span-4 w-full h-[2px] bg-[#E2E2E2] mb-[15px]" />
				<div className="xl:col-span-2 col-span-4">
					<div className="grid md:grid-cols-2 grid-cols-1 gap-8">
						{loading
							? new Array(4).fill(null).map((_, index) => (
									<div key={index} style={{ maxWidth: 'calc(100% - 100px)' }}>
										<Skeleton active />
									</div>
							  ))
							: listReview?.map((item, index) => {
									if (index >= 1) {
										return (
											<Link href={`/danh-gia-xe/${item?.slug || item.id}`} key={index} className="flex gap-[10px]">
												<div style={{ maxWidth: 'calc(100% - 100px)' }}>
													<p className="title font-bold text-lg mb-1.5">{item?.nameVi ?? ''}</p>
													<p className="date font-normal tex-[11px] text-[#797979] mb-2.5">
														<ModifiedDate dateTime={item ? item?.updatedAt || item?.createdAt : ''} />
													</p>
													<p className="short-description font-normal text-sm">{cutText(item?.descriptionVi ?? '')}</p>
												</div>
												<div
													className="min-w-[100px] w-[100px] min-h-[100px] h-[100px]"
													style={{
														backgroundImage: `url(${
															item?.medias?.find((it) => it?.mimeType?.toLowerCase() === FileType?.IMAGE?.toLowerCase())
																?.filePathOriginal ?? ''
														})`,
														backgroundSize: '100% auto',
														backgroundPosition: 'top',
														backgroundRepeat: 'no-repeat',
													}}
												/>
											</Link>
										);
									}
							  })}
					</div>
				</div>
			</div>
		</>
	);
};

export default memo(VehiclesReview);

{
	/* <Link
	href={`/review`}
	className="bg-pink-main font-bold text-sm text-[#fff] flex items-center justify-center py-[3px] px-[8px] box-border whitespace-nowrap"
>
	ĐÁNH GIÁ TỔNG THỂ
</Link>
<Link href={`/review`} className="font-bold text-sm text-[#797979] whitespace-nowrap flex items-center">
	NGƯỜI DÙNG ĐÁNH GIÁ
</Link>
<Link
	href={`/review`}
	className="flex items-center gap-6 font-bold text-sm text-[#797979] whitespace-nowrap"
>
	SO SÁNH XE
</Link> */
}

import { useGetListReviewsQuery } from '@/graphql/queries/getListReviews.generated';
import { PagingReviewsInput, ReviewsEntity } from '@/graphql/type.interface';
import { FileType, REVIEWCATEGORYSLUG } from '@/helpers/constant';
import Link from 'next/link';
import React, { memo, useState } from 'react';
import TitleSection from '../TitleSection';
import { Wrapper } from './styled';
import ModifiedDate from '@/components/ModifiedDate';
import { Skeleton } from 'antd';
import { useGetReviewsCatetoriesQuery } from '@/graphql/queries/getReviewsCatetories.generated';
import { cutText } from '@/helpers/common';

const MainNews: React.FC<{ review: ReviewsEntity | null; loading: boolean }> = ({ review, loading }) => {
	return (
		<>
			{loading ? (
				<Skeleton active />
			) : (
				<>
					<img
						className="w-full rounded-lg"
						src={
							review?.medias?.find((it) => it?.mimeType?.toLowerCase() === FileType?.IMAGE?.toLowerCase())
								?.filePathOriginal ?? ''
						}
						alt=""
					/>
					<div className="flex items-center gap-[6px] absolute top-[16px] left-[22px]">
						<p className="rounded-sm font-bold text-[11px] box-border py-[3px] px-[7px] bg-[#003DC6] text-[#fff]">
							TIN MỚI
						</p>
					</div>
					<Link href={`/danh-gia-xe/${review?.slug || review?.id}`}>
						<p className="title font-bold text-4xl my-6">{cutText(review?.nameVi ?? '')}</p>
						<p className="date font-normal tex-[11px] text-[#797979] mb-2.5">
							<ModifiedDate dateTime={review?.updatedAt || review?.createdAt} />
						</p>
						<p className="font-normal text-base">{cutText(review?.descriptionVi ?? '')}</p>
					</Link>
				</>
			)}
		</>
	);
};

const NewsMore: React.FC<{ review: ReviewsEntity[] | []; loading: boolean }> = ({ review, loading }) => {
	return (
		<div className="grid grid-cols-2 gap-x-[50px] gap-y-[11px]">
			{loading
				? new Array(4).fill(null).map((_, index) => (
						<div className="lg:col-span-1 col-span-2 pl-3.5" key={index}>
							<div className="w-full gap-[35px] justify-between flex">
								<Skeleton active />
							</div>
						</div>
				  ))
				: review?.map((item, index) => (
						<Link
							href={`/danh-gia-xe/${item?.slug || item?.id}`}
							className="lg:col-span-1 col-span-2 sub-news pl-3.5"
							key={index}
						>
							<div className="w-full gap-[35px] justify-between flex">
								<div>
									<p className="fnt-normal text-base">{cutText(item?.nameVi ?? '', 100)}</p>
									<p className="date font-normal tex-[11px] text-[#797979] mb-2.5">
										<ModifiedDate dateTime={item?.updatedAt || item.createdAt} />
									</p>
								</div>
								<div
									className="rounded lg:min-w-[70px] lg:w-[70px] lg:min-h-[70px] lg:h-[70px] min-w-[30%] w-[30%] h-[100px]"
									style={{
										backgroundImage: `url(${
											item?.medias
												? item?.medias?.find((it) => it?.mimeType?.toLowerCase() === FileType?.IMAGE?.toLowerCase())
														?.filePathOriginal
												: ''
										})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
									}}
								/>
							</div>
						</Link>
				  ))}
		</div>
	);
};

const RightNews: React.FC<{ review: ReviewsEntity | null; loading: boolean }> = ({ review, loading }) => {
	return (
		<>
			{loading ? (
				<Skeleton active />
			) : (
				<Link href={`/danh-gia-xe/${review?.slug || review?.id}`} className="main-news">
					<p className="font-bold text-[22px]">{cutText(review?.nameVi ?? '')}</p>
					<p className="date font-normal tex-[11px] text-[#797979] mb-2.5">
						<ModifiedDate dateTime={review?.updatedAt || review?.createdAt} />
					</p>
					<img
						className="w-full rounded-lg mb-3 text-[#464646]"
						src={
							review?.medias?.find((it) => it?.mimeType?.toLowerCase() === FileType?.IMAGE?.toLowerCase())
								?.filePathOriginal ?? ''
						}
						alt=""
					/>
					<p className="font-normal text-sm">{cutText(review?.descriptionVi ?? '')}</p>
					<div className="w-full h-[2px] bg-[#E2E2E2] my-[15px]" />
				</Link>
			)}
		</>
	);
};

const RightNewsMore: React.FC<{ review: ReviewsEntity[]; loading: boolean }> = ({ review, loading }) => {
	return (
		<div className="group-sub-news">
			{loading
				? new Array(3).fill(null).map((_, index) => (
						<div className="w-full gap-[35px] lg:flex md:block flex" key={index}>
							<Skeleton active />
						</div>
				  ))
				: review?.map((item, index) => (
						<Link href={`/danh-gia-xe/${item.slug || item.id}`} key={index} className="more-news">
							<div className="w-full gap-[35px] lg:flex md:block flex justify-between">
								<div>
									<p className="font-bold text-xl">{item?.nameVi ?? ''}</p>
									<p className="date font-normal tex-[11px] text-[#797979] mb-2.5">
										<ModifiedDate dateTime={item?.updatedAt || item.createdAt} />
									</p>
								</div>
								<div
									className="rounded lg:min-w-[70px] lg:w-[70px] lg:min-h-[70px] lg:h-[70px] md:min-w-[100%] md:w-full md:h-[130px] min-w-[30%] w-[30%] h-[100px]"
									style={{
										backgroundImage: `url(${
											item?.medias
												? item?.medias?.find((it) => it?.mimeType?.toLowerCase() === FileType?.IMAGE?.toLowerCase())
														?.filePathOriginal
												: ''
										})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
									}}
								/>
							</div>
							<div className="line w-full h-[2px] bg-[#E2E2E2] my-[15px]" />
						</Link>
				  ))}
		</div>
	);
};

const Newsletter: React.FC = () => {
	const [listReview, setListReview] = useState<ReviewsEntity[]>();

	const { data: reviewCategory } = useGetReviewsCatetoriesQuery({
		fetchPolicy: 'cache-first',
	});

	const { loading } = useGetListReviewsQuery({
		fetchPolicy: 'cache-first',
		variables: {
			input: {
				skip: 1,
				take: 9,
				category:
					reviewCategory?.getReviewsCatetories?.find((item) => item?.slug === REVIEWCATEGORYSLUG.news.value)?.id ?? '',
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
			<TitleSection>
				<p>Bản tin KARSALES</p>
			</TitleSection>
			<Wrapper>
				<div className="grid grid-cols-3 gap-x-[50px]">
					<div className="md:col-span-2 col-span-3 mb-[25px]">
						<div className="grid grid-cols-2 gap-x-[50px]">
							<div className="w-full relative col-span-2">
								<MainNews review={listReview ? listReview[0] : null} loading={loading} />
							</div>
							<div className="col-span-2 w-full h-[2px] bg-[#E2E2E2] my-[25px]" />
							<div className="col-span-2">
								<NewsMore review={listReview?.slice(2, 6) ?? []} loading={loading} />
							</div>
						</div>
					</div>
					<div className="md:col-span-1 col-span-3">
						<RightNews review={listReview ? listReview[1] : null} loading={loading} />
						<RightNewsMore review={listReview?.splice(6, 8) ?? []} loading={loading} />
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(Newsletter);

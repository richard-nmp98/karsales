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
import { Wrapper } from './styled';

const AutoExperience: React.FC = () => {
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
					reviewCategory?.getReviewsCatetories?.find((item) => item?.slug === REVIEWCATEGORYSLUG.tipsTricks.value)
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
					<p>Kinh Nghiệm Ôtô</p>
					<div className="flex flex-wrap gap-5">
						<Link
							href={`/kinh-nghiem`}
							className="flex items-center gap-[5px] font-bold text-sm text-[#003DC6] whitespace-nowrap"
						>
							Xem tất cả
							<img src="/images/icons/arrowRightCircle.svg" alt="" />
						</Link>
					</div>
				</div>
			</TitleSection>
			<Wrapper className="lg:pb-[154px] pb-[10px]">
				<div className="grid grid-cols-12 md:gap-x-[50px] sm:gap-x-[25px]">
					{loading ? (
						<div className="md:col-span-2 col-span-4 mb-[25px]">
							<Skeleton active />
						</div>
					) : (
						<div className="lg:col-span-6 col-span-12 mb-[5px]">
							<div className="grid grid-cols-2 gap-x-[50px]">
								<div className="w-full relative col-span-2">
									{listReview &&
									listReview[0]?.medias &&
									listReview[0]?.medias[0]?.mimeType === FileType?.IMAGE.toLowerCase() ? (
										<img
											className="w-full rounded-lg mb-2"
											src={
												(listReview && listReview[0]?.medias ? listReview[0]?.medias[0]?.filePathOriginal : '') ?? ''
											}
											alt=""
										/>
									) : (
										<video className="w-full rounded-lg mb-2" controls>
											<source
												src={
													(listReview && listReview[0]?.medias ? listReview[0]?.medias[0]?.filePathOriginal : '') ?? ''
												}
												type="video/mp4"
											/>
										</video>
									)}
									<div className="flex items-center gap-[6px] absolute top-[16px] left-[22px]">
										<p className="rounded-sm font-bold text-[11px] box-border py-[3px] px-[7px] bg-[#FFD726] text-[#000]">
											Kinh nghiệm
										</p>
									</div>
									<Link href={`/kinh-nghiem/${listReview ? listReview[0]?.slug || listReview[0]?.id : ''}`}>
										<p className="title font-bold sm:text-4xl text-2xl my-6">
											{listReview ? listReview[0]?.nameVi : ''}
										</p>
										<p className="date font-normal tex-[11px] text-[#797979] mb-2.5">
											<ModifiedDate dateTime={listReview ? listReview[0]?.updatedAt || listReview[0]?.createdAt : ''} />
										</p>
										<p className="font-normal text-base">{listReview ? listReview[0]?.descriptionVi : ''}</p>
									</Link>
								</div>
							</div>
						</div>
					)}
					<div className="lg:hidden col-span-12 line w-full h-[2px] bg-[#E2E2E2] my-[15px]" />
					<div className="xl:col-span-3 sm:col-span-6 col-span-12 mb-[5px]">
						{loading ? (
							<div className="more-news w-full">
								<Skeleton active />
								<Skeleton active />
								<Skeleton active />
							</div>
						) : (
							listReview?.map((item, index) => {
								if (index >= 1 && index <= 3) {
									return (
										<Link href={`/kinh-nghiem/${item.slug || item.id}`} key={index} className="more-news w-full">
											<div className="title font-bold text-lg">{cutText(item?.nameVi ?? '', 30)}</div>
											<p className="date font-normal tex-[11px] text-[#797979] mb-2.5">
												<ModifiedDate dateTime={item?.updatedAt || item?.createdAt} />
											</p>
											<div className="flex gap-[10px] justify-between">
												<p>{cutText(item?.descriptionVi ?? '', 100)}</p>
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
											</div>
											<div className="line w-full h-[2px] bg-[#E2E2E2] my-[15px]" />
										</Link>
									);
								}
							})
						)}
					</div>
					<div className="sm:hidden col-span-12 line w-full h-[2px] bg-[#E2E2E2] my-[15px]" />
					<div className="xl:col-span-3 lg:col-span-12 sm:col-span-6 col-span-12">
						{loading ? (
							<div className="more-news">
								<Skeleton active />
								<Skeleton active />
							</div>
						) : (
							<div className="grid grid-cols-12 gap-[10px]">
								{listReview?.map((item, index) => {
									if (index >= 4 && index <= 9) {
										return (
											<Link
												href="/"
												className="more-news xl:col-span-12 lg:col-span-6 sm:col-span-12 col-span-12"
												key={index}
											>
												<span className="title font-bold text-base mb-[5px]">
													{item?.nameVi}&nbsp;
													{item?.medias?.find(
														(it) => it?.mimeType?.toLowerCase() === FileType?.VIDEO?.toLowerCase(),
													) ? (
														<span className="font-bold text-[10px] py-[2px] px-[5px] rounded-sm text-[#fff] bg-[#003DC6]">
															VIDEO
														</span>
													) : (
														<></>
													)}
												</span>
												<p className="date font-normal tex-[11px] text-[#797979] mb-2.5">
													<ModifiedDate dateTime={item?.updatedAt || item?.createdAt} />
												</p>
												<div className="line w-full h-[2px] bg-[#E2E2E2] my-[15px]" />
											</Link>
										);
									}
								})}
							</div>
						)}
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(AutoExperience);

{
	/* <Link
	href={`/review`}
	className="bg-pink-main font-bold text-sm text-[#fff] flex items-center justify-center py-[3px] px-[8px] box-border whitespace-nowrap"
>
	KINH NGHIỆM LÁI XE
</Link>
<Link href={`/review`} className="font-bold text-sm text-[#797979] whitespace-nowrap flex items-center">
	BẢO DƯỠNG - BẢO TRÌ
</Link>
<Link
	href={`/review`}
	className="flex items-center gap-6 font-bold text-sm text-[#797979] whitespace-nowrap"
>
	MUA & BÁN XE
	<img src="/images/icons/arrowRightCircle.svg" alt="" />
</Link> */
}

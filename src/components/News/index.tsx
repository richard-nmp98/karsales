import { useGetListPostActiveQuery } from '@/graphql/queries/getListPostActive.generated';
import { PostEntity } from '@/graphql/type.interface';
import { FetchPolicyEnum, FileType } from '@/helpers/constant';
import { Skeleton } from 'antd';
import Link from 'next/link';
import React, { memo, useState } from 'react';
import ModifiedDate from '../ModifiedDate';
import { Wrapper } from './styled';

interface Props {
	ads?: boolean;
}

const MAXDATA = 5;

const News: React.FC<Props> = ({ ads = false }) => {
	const [listReview, setListReview] = useState<PostEntity[]>();

	const { loading } = useGetListPostActiveQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			input: {
				skip: 1,
				take: MAXDATA,
			},
		},
		onCompleted(res) {
			if (res) {
				setListReview([...(res?.getListPostActive?.items ?? [])]);
			}
		},
	});

	return (
		<>
			<Wrapper className="w-full mb-[10px]">
				<div className="pb-[9px] flex flex-col">
					<div className="tabs flex mb-4 gap-[31px]">
						<div className="text-secondary-500 font-semibold py-2 cursor-pointer xl:text-[32px] sm:text-[20px] text-[24px] tab">
							{/* Tin khuyến mãi */}
							Tin mới nhất
						</div>
					</div>
				</div>
				<div className="content sm:flex sm:gap-5 lg:block block items-start">
					<div className="news w-full mb-[10px] grid grid-cols-12 gap-[10px]">
						<div className="lg:col-span-12 md:col-span-8 sm:col-span-7 col-span-12">
							<div className="grid grid-cols-12 gap-[10px]">
								<div className="lg:col-span-12 md:col-span-6 ssm:col-span-6 col-span-12">
									{loading ? (
										<Skeleton active />
									) : (
										<Link href={`/mua-xe/${listReview ? listReview[0]?.slug ?? listReview[0]?.id : ''}`}>
											<div className="news-main">
												<div
													style={{
														backgroundImage: `url(${
															(listReview && listReview[0]?.medias
																? listReview[0]?.medias[0]?.mediaDetail?.filePathOriginal
																: '') ?? ''
														})`,
														backgroundSize: 'cover',
														backgroundPosition: 'center',
														backgroundRepeat: 'no-repeat',
													}}
													className="w-full md:h-[220px] h-[300px] mb-[20px]"
												/>
												<p className="name font-bold text-xl mb-1">{listReview ? listReview[0]?.title : ''}</p>
												<ModifiedDate
													dateTime={listReview ? listReview[0]?.updatedAt || listReview[0]?.createdAt : ''}
												/>
											</div>
										</Link>
									)}
								</div>
								<div className="lg:col-span-12 md:col-span-6 ssm:col-span-6 col-span-12">
									{loading ? (
										<div className="group-sub-news w-full">
											<Skeleton active />
											<Skeleton active />
											<Skeleton active />
										</div>
									) : (
										<div className="group-sub-news">
											{listReview?.map((item, index) => {
												if (index > 0) {
													return (
														<Link href={`/mua-xe/${item?.slug || item?.id}`} key={index} className="more-news">
															<div className="w-full gap-[15px] justify-between flex">
																<div>
																	<p className="font-bold text-base">{item?.title}</p>
																	<p className="date font-normal tex-[11px] text-[#797979] mb-2.5">
																		<ModifiedDate dateTime={item ? item?.updatedAt || item?.createdAt : ''} />
																	</p>
																</div>
																<div
																	className="rounded min-w-[70px] w-[70px] min-h-[70px] h-[70px]"
																	style={{
																		backgroundImage: `url(${
																			item?.medias?.find(
																				(it) =>
																					it?.mediaDetail?.mimeType?.toLowerCase() === FileType?.IMAGE?.toLowerCase(),
																			)?.mediaDetail?.filePathOriginal ?? ''
																		})`,
																		backgroundSize: 'cover',
																		backgroundPosition: 'center',
																		backgroundRepeat: 'no-repeat',
																	}}
																/>
															</div>
															<div className="line w-full h-[1px] bg-[#E2E2E2] my-[15px]" />
														</Link>
													);
												}
											})}
										</div>
									)}
								</div>
							</div>
						</div>
						{/* <div className="lg:col-span-12 md:col-span-4 sm:col-span-5 col-span-6">
							{ads ? (
								<img
									className="m-auto w-full xl:max-w-none"
									src="https://nftstorage.link/ipfs/bafkreienbv7zb7n4nghfawop7ubzt7obvqqv2m7354zgra73o7i72b2qmy"
									alt=""
								/>
							) : (
								<></>
							)}
						</div> */}
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(News);

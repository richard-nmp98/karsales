import React, { useState } from 'react';
import Link from 'next/link';
import { GetArchiveUrlByType } from '@/helpers/app.routes';
import { StringToSlug } from '@/helpers/string-to-slug';
import { CaretRightOutlined } from '@ant-design/icons';
import { useGetListBrandsQuery } from '@/graphql/queries/getListBrands.generated';
import { CarBrandEntity, CarVersionEntity, PostEntity, PostSortType, ReviewsEntity } from '@/graphql/type.interface';
import _ from 'lodash';
import { Skeleton } from 'antd';
import moment from 'moment';
import { useGetListVersionsQuery } from '@/graphql/queries/getListVersions.generated';
import { formatMoney } from '@/helpers/functions';
import { useGetListPostActiveQuery } from '@/graphql/queries/getListPostActive.generated';
// import { useGetListReviewsQuery } from '@/graphql/queries/getListReviews.generated';
// import { useAppState } from '@/context/AppContext';

type CarPriceProps = {
	reviewsNew: ReviewsEntity[];
	reviewsLoading?: boolean;
};

const CarPrice: React.FC<CarPriceProps> = ({ reviewsNew = [], reviewsLoading = false }) => {
	const [version, setVersion] = useState<CarVersionEntity[]>();
	const [brands, setBrands] = useState<CarBrandEntity[]>();
	const [tagsSearch, setTagsSearch] = useState<PostEntity[]>();
	const [reViews] = useState<ReviewsEntity[]>(reviewsNew);
	// const { appState, setAppState } = useAppState();
	const { loading: brandsLoading } = useGetListBrandsQuery({
		fetchPolicy: 'cache-first',
		onCompleted: (res) => {
			let getBrands = _.filter([...(res?.getListBrands ?? [])], { isDisplayTopSearch: true, isActive: true });
			getBrands = _.take(getBrands, 4);
			setBrands(getBrands);
		},
	});
	const {
		loading: versionLoading,
		// error: versionError,
	} = useGetListVersionsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			input: {
				model: '',
			},
		},
		onCompleted: (res) => {
			let getVersions = _.filter([...(res?.getListVersions ?? [])], { isActive: true });
			getVersions = getVersions?.sort((it1, it2) => {
				const it1UpdatedAt = it1.updatedAt ? it1.updatedAt : it1.createdAt;
				const it2UpdatedAt = it2.updatedAt ? it2.updatedAt : it2.createdAt;
				return moment(it2UpdatedAt).unix() - moment(it1UpdatedAt).unix();
			});
			getVersions = _.take(getVersions, 3);
			setVersion(getVersions);
		},
	});

	const { loading: postArchiveLoading } = useGetListPostActiveQuery({
		fetchPolicy: 'cache-first',
		variables: {
			input: {
				take: 4,
				skip: 1,
				options: {
					sort: PostSortType.TOTAL_VIEW,
				},
			},
		},
		onCompleted: (res) => {
			setTagsSearch(res?.getListPostActive?.items);
		},
	});

	const brandUrl = GetArchiveUrlByType('brand');

	return (
		<>
			<div className="py-4">
				<div className="container mx-auto">
					<div className="grid md:grid-cols-12 gap-4 md:gap-y-0">
						<div className="md:col-span-5 col-span-12">
							<div className="md:flex uppercase font-semibold items-center">
								<h5 className="mr-3">GIÁ XE CẬP NHẬT MỚI NHẤT</h5>
								<span className="text-lg font-semibold text-neutral-400">
									{moment().locale('en').format('h:m a D [Tháng] M')}
								</span>
							</div>
							<div className="grid md:grid-cols-12 mt-3 mb-5">
								<Skeleton title={false} loading={versionLoading} active>
									{version?.map((item, index) => (
										<div key={index} className="col-span-4">
											<label className="block text-[#003dc6] font-semibold text-lg">{item.name}</label>
											<div className="text-neutral-400">Từ {formatMoney(item.priceCarVersion)}</div>
										</div>
									))}
								</Skeleton>
							</div>
							<div>
								<Skeleton loading={brandsLoading} title={false} active>
									<div className={`divide-x-2 uppercase text-[#7D7D7D]`}>
										{brands?.map((item, index) => (
											<Link
												key={index}
												className="inline-block font-semibold px-2 py-0 first:pl-0 last:pr-0 leading-none text-[12px]"
												href={`${brandUrl}/${item.slug}`}
											>
												{item.name}
											</Link>
										))}
									</div>
								</Skeleton>
							</div>
						</div>
						<div className="md:col-span-3 col-span-12 md:border-t-0 border-t md:pt-0 pt-3 border-[#cccccc]">
							<div>
								<label htmlFor="email" className="mb-3 text-lg block font-semibold text-black uppercase">
									Tìm kiếm
								</label>
								<div className="mt-1">
									<form>
										<input
											type="text"
											className="block w-full py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											placeholder="Ford Everest 2022"
										/>
									</form>
								</div>
							</div>
							<div className="flex flex-wrap">
								<Skeleton className={`pt-3`} title={false} loading={postArchiveLoading} active>
									{tagsSearch?.map((item, index) => (
										<span
											key={index}
											className="mr-3 last:mr-0 mt-3 inline-flex items-center rounded-md bg-[#003DC6] px-2.5 py-0.5 text-sm font-medium text-white"
										>
											<Link href={`/search/${item.title}`}>{item.title}</Link>
										</span>
									))}
								</Skeleton>
							</div>
						</div>
						<div className="md:col-span-4 col-span-12 md:border-t-0 border-t md:pt-0 pt-3 border-[#cccccc]">
							<div>
								<label className="font-semibold text-lg mb-3 block">TIN MỚI NHẤT HÔM NAY</label>
								<ul>
									<Skeleton title={false} loading={reviewsLoading} active>
										{reViews?.map((item, index) => (
											<li key={index} className="flex items-center mb-3">
												<Link
													className="hover:text-main-500 hover hover:underline font-semibold"
													href={`/tin-tuc/${StringToSlug(item.nameVi || '')}`}
												>
													<CaretRightOutlined className="align-[3px] mr-1 text-main-500" />
													{item.nameVi}
												</Link>
											</li>
										))}
									</Skeleton>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CarPrice;

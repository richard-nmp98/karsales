import Card from '@/components/Posts/Card';
import SortByPost from '@/components/Select/SortByPost';
import { useGetListPostActiveQuery } from '@/graphql/queries/getListPostActive.generated';
import { useProvincesQuery } from '@/graphql/queries/provinces.generated';
import { CarConditionEnum, PaymentItemCurrencyEnum, PostEntity, PostSortType } from '@/graphql/type.interface';
import { checkArraySelect, checkStringIsAll } from '@/helpers/common';
import { CONDITIONLINK, COUNTRY_DEFAULT, FetchPolicyEnum, keysQuery, POSTSORTTYPEENUM } from '@/helpers/constant';
import { Skeleton } from 'antd';
import { useRouter } from 'next/router';
import React, { memo, useEffect, useState } from 'react';
import Filter from '../Filter';
import { Wrapper } from './styled';

export type CarMakeModel = {
	typeBuyCar?: string;
};

const MAXDATA = 6;
const PAGINATION = 1;

const Content: React.FC = () => {
	const [showFilter, setShowFilter] = useState(false);
	const router = useRouter();
	const [currentPage, setCurrentPage] = useState(PAGINATION);
	const [data, setData] = useState<PostEntity[]>([]);
	const [pagination, setPagination] = useState({
		totalItem: 0,
		totalPage: 0,
	});

	const { data: dataProvince } = useProvincesQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			countryCode: COUNTRY_DEFAULT,
			input: {
				skip: 1,
				take: 200,
			},
		},
	});

	const [cityId, setCityId] = useState('');
	const [sort, setSort] = useState('');
	const [currency, setCurrency] = useState(PaymentItemCurrencyEnum.VND as string);
	const [condition, setCondition] = useState([]);
	const [brand, setBrand] = useState([]);
	const [model, setModel] = useState([]);

	/* eslint-disable */
	useEffect(() => {
		if (router.query[keysQuery.BRAND]) {
			setCurrentPage(PAGINATION);
			setBrand(checkArraySelect(router.query[keysQuery.BRAND]));
		}
	}, [router.query[keysQuery.BRAND]]);

	useEffect(() => {
		if (router.query[keysQuery.MODEL]) {
			setCurrentPage(PAGINATION);
			setModel(checkArraySelect(router.query[keysQuery.MODEL]));
		}
	}, [router.query[keysQuery.MODEL]]);

	useEffect(() => {
		if (router.query[keysQuery.PROVINCE]) {
			setCurrentPage(PAGINATION);
			setCityId(
				checkStringIsAll(
					dataProvince?.provinces?.items.find((item) => item.slug === (router.query[keysQuery.PROVINCE] as string))
						?.id ?? '',
				) ?? '',
			);
		}
	}, [router.query[keysQuery.PROVINCE]]);

	useEffect(() => {
		if (router.query[keysQuery.CURRENCY]) {
			setCurrentPage(PAGINATION);
			setCurrency(checkStringIsAll(router.query[keysQuery.CURRENCY] as string));
		}
	}, [router.query[keysQuery.CURRENCY]]);

	useEffect(() => {
		if (router.query[keysQuery.SORY_BY]) {
			setCurrentPage(PAGINATION);
			setSort(
				checkStringIsAll(
					POSTSORTTYPEENUM.find((item) => item?.link === (router.query[keysQuery.SORY_BY] ?? ''))
						?.value as PostSortType,
				),
			);
		}
	}, [router.query[keysQuery.SORY_BY]]);

	useEffect(() => {
		if (router.query[keysQuery.STATUS]) {
			setCurrentPage(PAGINATION);
			setCondition(
				checkArraySelect(
					CONDITIONLINK.find((item) => item?.link === (router.query[keysQuery.STATUS] ?? ''))
						?.value as CarConditionEnum,
				),
			);
		}
	}, [router.query[keysQuery.STATUS]]);
	/* eslint-enable */

	const { loading } = useGetListPostActiveQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_AND_NETWORK,
		variables: {
			input: {
				skip: currentPage,
				take: MAXDATA,
				options: {
					cityId: cityId,
					condition: condition,
					brand: brand,
					model: model,
					currency: currency as PaymentItemCurrencyEnum,
					priceMin: Number(router.query[keysQuery.MIN_PRICE]) ?? 0,
					priceMax: Number(router.query[keysQuery.MAX_PRICE]) ?? 0,
					sort: sort ? (sort as PostSortType) : null,
				},
			},
		},
		onCompleted(res) {
			if (res && res.getListPostActive && res?.getListPostActive?.items) {
				/* eslint-disable */
				if (currentPage === PAGINATION) {
					setData([...res?.getListPostActive?.items]);
				} else {
					setData([...data, ...(res?.getListPostActive?.items)]);
				}
				/* eslint-enable */
				setPagination({
					totalItem: Number(res?.getListPostActive?.meta?.totalItems),
					totalPage: Number(res?.getListPostActive?.meta?.totalPages),
				});
			}
		},
	});

	return (
		<>
			<Wrapper className="pt-0 min-h-[100vh]">
				<div className="flex relative overflow-x-hidden m-auto min-h-[100vh]">
					{showFilter ? (
						<div
							onClick={() => setShowFilter(false)}
							className="backdrop w-full h-full bg-transparent absolute z-[9]"
						/>
					) : (
						<></>
					)}
					<div className={`${showFilter ? 'show' : ''} filter bg-white`}>
						<img
							onClick={() => setShowFilter(false)}
							src="/images/icons/close-filter.svg"
							alt=""
							className="absolute right-[10px] top-[10px] w-[15px] hover:scale-125 cursor-pointer lg:hidden"
						/>
						<Filter />
					</div>
					<div className="content">
						<div className="box-border pb-[39px] pt-[20px] px-[12px]">
							{loading ? (
								<></>
							) : (
								<div className="flex flex-nowrap justify-between items-center gap-[10px] mb-[20px]">
									<div className="flex items-center gap-[20px]">
										<div
											className="icon-filter flex gap-[3px] items-center cursor-pointer lg:hidden lg:w-[0px]"
											onClick={() => setShowFilter(true)}
										>
											<img src="/images/icons/icon-filter.svg" className="h-full" alt="" />
										</div>
										<p className="font-bold text-base">{pagination.totalItem.toLocaleString('it-IT')} xe</p>
									</div>
									<div className="flex gap-[10px] items-center justify-between w-[150px]">
										<div className="lg:max-w-[100%] max-w-[150px] w-full">
											<SortByPost />
										</div>
									</div>
								</div>
							)}
							<div className="grid ssm:grid-cols-2 grid-cols-1 gap-[10px]">
								{data?.map((item, index) => (
									<Card post={item} key={index} />
								))}
								{loading ? (
									<>
										<Skeleton active />
										<Skeleton active />
									</>
								) : (
									<></>
								)}
								{!loading && Number(pagination.totalItem) === 0 ? (
									<div className="ssm:col-span-2 col-span-1 flex jusitfy-center">
										<img src="/images/404/buy-car-not-found.svg" className="w-[265px] m-auto mt-[40px]" alt="" />
									</div>
								) : (
									<></>
								)}
							</div>
							{currentPage < Number(pagination.totalPage) && !loading ? (
								<div className="flex items-center justify-center mt-[42px] mb-[43px]">
									<button
										className="py-2.5 px-6 bg-white border-blue-text text-blue-text flex gap-[13px] items-center justify-center border-[1px] rounded"
										onClick={() => setCurrentPage(currentPage + PAGINATION)}
									>
										Xem thêm
										<img src="/images/icons/down-circle.svg" alt="" />
									</button>
								</div>
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default memo(Content);

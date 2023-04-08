import { Card, Skeleton } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import ReactStars from 'react-rating-stars-component';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import Carousel from '../components/ImagesCar';
import News from '../components/News';
import ContentDetail from '../components/ContentDetail';
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import { useGetPostDetailQuery } from '@/graphql/queries/getPostDetail.generated';
import { calculateRollingPrice, cutText, formatMoney } from '@/helpers/common';
import { useRouter } from 'next/router';
import { CarPurchaseCostProvinceEntity, Maybe, PostEntity, UserEntity } from '@/graphql/type.interface';
import { AppRoutes } from '@/helpers/app.routes';
import { FetchPolicyEnum } from '@/helpers/constant';
import { Bottom, Wrapper } from './styled';
import { useGetListCarPurchaseCostProvinceQuery } from '@/graphql/queries/getListCarPurchaseCostProvince.generated';
import ContentOnePage from '../components/ContentOnePage';

SwiperCore.use([Navigation, Pagination]);

type PropsInfoSeller = {
	user?: Maybe<UserEntity>;
};

const InfoSeller: React.FC<PropsInfoSeller> = (props) => {
	const [ratting, setRatting] = useState<any>();
	const generateratting = () => {
		setRatting(<ReactStars count={5} size={13} value={props?.user?.metadata?.avgRating} isHalf={true} edit={false} />);
	};

	/* eslint-disable */
	useEffect(() => {
		if (props?.user?.metadata?.avgRating) {
			generateratting();
		}
	}, [props?.user?.metadata?.avgRating]);
	/* eslint-enable */

	return (
		<>
			<div className="info flex items-center gap-[10px]">
				<div
					className={`w-[30px] h-[30px] rounded-full]`}
					style={{
						backgroundImage: `url(${props?.user?.avatarMedia?.filePathOriginal ?? ''})`,
						backgroundSize: '100% 100%',
						borderRadius: '50%',
						overflow: 'hidden',
					}}
				/>
				<div className="name-start">
					<div className="name flex items-center gap-[3px]">
						<p className="name font-bold text-base text-blue-text">
							{props?.user?.firstName} {props?.user?.lastName}
						</p>
						{props?.user?.isActive ? <img src="/images/icons/tick-verify.svg" alt="" className="verify" /> : <></>}
					</div>
					{ratting}
				</div>
			</div>
		</>
	);
};

type PropsCalculatorPrice = {
	post?: Maybe<PostEntity>;
	cost?: Maybe<CarPurchaseCostProvinceEntity[]>;
};

const Price: React.FC<PropsCalculatorPrice> = (props) => {
	const [cost, setCost] = useState<CarPurchaseCostProvinceEntity>();

	/* eslint-disable */
	useEffect(() => {
		if (props.cost) {
			const index = props.cost.findIndex((item) => item.provinceId === props.post?.cityId);
			if (index !== -1) {
				setCost(props.cost[index]);
			} else {
				const indexOther = props.cost.findIndex((item) => item?.proviceDetail?.code === 1001);
				setCost(props.cost[indexOther]);
			}
		}
	}, [props.post, props.cost]);
	/* eslint-enable */

	return (
		<>
			<Card style={{ border: '0' }} className="mb-[0px]">
				<Card.Grid
					className="text-center ssm:w-6/12-important w-full-important"
					style={{ border: 0, boxShadow: 'none', padding: '10px 10px 5px' }}
					hoverable={false}
				>
					<p className="underline font-sm text-base mb-[13px]">Giá bán:</p>
					<p className="font-bold text-blue-text text-[26px]">
						{props?.post?.showHiddenPrice ? props?.post?.hiddenPrice : formatMoney(props?.post?.price ?? 0)}
					</p>
				</Card.Grid>
				<div className="ssm:hidden line w-6/12 h-[1px] bg-[#E1E1E1] m-auto" />
				<Card.Grid
					className="text-center ssm:w-6/12-important w-full-important"
					style={{ border: 0, boxShadow: 'none', padding: '10px 10px 5px' }}
					hoverable={false}
				>
					<p className="underline font-sm text-base mb-[13px]">Giá lăn bánh:</p>
					<p className="font-bold text-blue-text text-[26px]">
						{calculateRollingPrice({
							carPrice: props?.post?.price?.toString(),
							condition: props?.post?.condition,
							showHiddenPrice: props?.post?.showHiddenPrice,
							param: cost,
						})}
					</p>
				</Card.Grid>
			</Card>
		</>
	);
};

type Slide = {
	thumbnail: string;
};

type Props = {
	setShowPrice?: any;
	setPostProps?: any;
};

const CarDetail: React.FC<Props> = (props) => {
	const [data, setData] = useState<PostEntity | null>();
	const [slide, setSlide] = useState<Slide[]>([]);
	const [lstItem, setLstItem] = useState<BreadcrumbItem[]>([
		{
			title: 'Mua xe',
			url: AppRoutes.buyCar,
		},
	]);

	const [current, setCurrent] = useState<BreadcrumbItem>({ title: '' });
	const router: any = useRouter();
	const { slug }: any = router?.query ?? '';
	const { loading } = useGetPostDetailQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			input: {
				id: isNaN(Number(slug?.toString())) ? '' : slug?.toString(),
				slug: slug?.toString() ?? ' ',
			},
		},
		onCompleted(res) {
			if (res) {
				setData(res?.getPostDetail ?? null);
				props.setPostProps(res?.getPostDetail ?? null);
				const __slide = res?.getPostDetail?.medias?.map((item) => {
					return { thumbnail: item?.mediaDetail?.filePathOriginal ?? '' };
				});
				setSlide([...(__slide ?? [])]);
				const data: any = res?.getPostDetail;
				const breadCrumb: any = ['brand', 'model', 'bodyType']?.map((item) => {
					if (data[item]) {
						return {
							title: data[item]?.name ?? null,
						};
					}
				});
				setLstItem([...lstItem, ...breadCrumb]);
				setCurrent({ title: cutText(res?.getPostDetail?.title ?? '', 30) ?? '' });
			}
		},
	});

	const { data: dataCarPurchaseCostProvince, loading: loadingCost } = useGetListCarPurchaseCostProvinceQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
	});

	return (
		<>
			<Breadcrumb lstItem={lstItem} current={current} />
			<Wrapper className="container container-sm grid grid-cols-12 lg:gap-x-[10px] gap-x-[10px] md:pt-[19px] pt-[10px] px-[19px] box-border">
				<div className="col-span-12">
					<div className="name flex justify-between items-center">
						{loading ? <Skeleton active avatar paragraph={{ rows: 0 }} /> : <InfoSeller user={data?.user} />}
					</div>
					<div className="line w-full h-[1px] bg-[#E1E1E1] mt-[10px] mb-[10px]" />
				</div>
				<div className="lg:col-span-6 xl:col-span-6 col-span-12 lg:mb-0 mb-[30px]">
					<div className="grid grid-cols-12 gap-[10px]">
						<div className="col-span-12">
							{loading ? (
								<div className="mb-[0px]">
									<Skeleton.Input active />
								</div>
							) : (
								<p className="name font-bold text-blue-text text-[32px] mb-[0px] leading-[1.2]">{data?.title ?? '-'}</p>
							)}
							{loading || loadingCost ? (
								<div className="mt-[10px] mb-[40px]">
									<Skeleton active />
								</div>
							) : (
								<Price
									post={data}
									cost={
										dataCarPurchaseCostProvince?.getListCarPurchaseCostProvince
											? dataCarPurchaseCostProvince?.getListCarPurchaseCostProvince
											: null
									}
								/>
							)}
						</div>
						<div className="col-span-12">{loading ? <Skeleton active /> : <ContentDetail post={data} />}</div>
						<div className="col-span-12">
							{loading ? (
								<></>
							) : (
								<div className="group-contact-seller grid grid-cols-12 sssm:flex gap-[10px] justify-start">
									<Link
										href={`tel:+${data?.user?.prefixPhone}${data?.user?.phone}`}
										className="sssm:py-2.5 py-[7px] sssm:px-[10px] px-[3px] bg-blue-main text-white rounded text-black font-bold sssm:text-base text-[12px] flex gap-[13px] items-center justify-center sssm:w-[160px] col-span-6"
										style={{ border: 0 }}
									>
										<img src="/images/icons/phone.svg" alt="" />
										Gọi người bán
									</Link>
									{!data ? (
										<></>
									) : (
										<button
											onClick={() => props.setShowPrice(true)}
											className="sssm:py-2.5 py-[7px] sssm:px-[10px] px-[3px] bg-[#FFD726] rounded text-black font-bold sssm:text-base text-[12px] sssm:w-[160px] col-span-6"
											style={{ border: 0 }}
										>
											Ưu đãi trả góp
										</button>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="lg:col-span-6 xl:col-span-6 col-span-12">
					{loading ? <Skeleton active /> : <Carousel id="preview-img-kar" items={slide} />}
				</div>
			</Wrapper>
			<Bottom className="container px-[19px] grid grid-cols-12 lg:gap-[59px] box-border mb-[20px]">
				<div className="xl:col-span-7 lg:col-span-7 col-span-12">
					<div className="flex flex-col">
						<div className="tabs flex mb-[10px] gap-[31px]">
							<div className="text-secondary-500 font-semibold py-[10px] cursor-pointer xl:text-[32px] sm:text-[20px] text-[24px] tab">
								Mô tả
							</div>
						</div>
					</div>
					<div
						style={{ whiteSpace: 'pre-line' }}
						dangerouslySetInnerHTML={{ __html: data?.description ?? '' }}
						className="mb-[20px]"
					/>
					{!data ? (
						<></>
					) : (
						<div className="grid grid-cols-12">
							<button
								onClick={() => props.setShowPrice(true)}
								className="sssm:py-2.5 py-[7px] sssm:px-[10px] px-[3px] bg-[#FFD726] rounded text-black font-bold sssm:text-base text-[12px] sssm:w-[160px] col-span-6"
								style={{ border: 0 }}
							>
								Ưu đãi trả góp
							</button>
						</div>
					)}
				</div>
				<div className="xl:col-span-5 lg:col-span-5 col-span-12">
					{loading ? (
						<>
							<Skeleton active />
						</>
					) : (
						<News post={data} />
					)}
				</div>
			</Bottom>
		</>
	);
};

const Detail: React.FC = () => {
	const [showPrice, setShowPrice] = useState(false);
	const [data, setData] = useState<PostEntity | null>();

	return (
		<>
			{!showPrice ? (
				<CarDetail setPostProps={setData} setShowPrice={setShowPrice} />
			) : (
				<ContentOnePage post={data} setShowPrice={setShowPrice} />
			)}
		</>
	);
};

export default memo(Detail);

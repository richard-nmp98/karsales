import { URL_NOT_AVAILABLE } from '@/constants';
import { useGetListBrandsQuery } from '@/graphql/queries/getListBrands.generated';
import { CarBrandEntity } from '@/graphql/type.interface';
import { AppRoutes } from '@/helpers/app.routes';
import { Skeleton } from 'antd';
import Link from 'next/link';
import React, { memo, useEffect, useState } from 'react';
import { Wrapper } from './styled';
export type BrandType = {
	image: string | null;
	slug?: string | null;
	name?: string | null;
};

type Props = {
	gridCols?: string; // Columns on screen default
	maxData?: number; // Number brand a page
	link?: string;
};

const BrandCar: React.FC<Props> = ({ gridCols, maxData = 12, link = AppRoutes.carPrice }) => {
	const [max, setMax] = useState(maxData);
	const [lstBrand, setLstBrand] = useState<CarBrandEntity[]>([]);

	const { data, loading } = useGetListBrandsQuery({
		fetchPolicy: 'cache-first',
		onCompleted(data) {
			if (data) {
				setLstBrand([...(data?.getListBrands ?? [])]);
			}
		},
	});

	/* eslint-disable */
	useEffect(() => {
		setMax(maxData);
	}, []);
	/* eslint-enable */

	return (
		<>
			<Wrapper className={`grid ${gridCols ? gridCols : 'md:grid-cols-6 sm:grid-cols-5 grid-cols-4'} gap-3`}>
				{loading
					? new Array(max).fill(null).map((_, index) => (
							<div
								key={index}
								// href={`/${item.slug}`}
								className="brand xl:p-[30px] box-border p-[10px] rounded flex items-center justify-center"
							>
								<Skeleton active />
							</div>
					  ))
					: lstBrand
							.sort((a: CarBrandEntity, b: CarBrandEntity) =>
								b.isDisplayTopSearch === a.isDisplayTopSearch ? 0 : a.isDisplayTopSearch ? -1 : 1,
							)
							?.map((item, index) => {
								if (index < max) {
									return (
										<Link
											href={`${link}?hang-xe=${item?.slug}`}
											key={index}
											className="brand xl:p-[30px] box-border p-[10px] rounded flex items-center justify-center"
										>
											<img
												src={item?.mediaDetail?.filePathOriginal ?? URL_NOT_AVAILABLE}
												className="w-full"
												alt={item?.slug}
											/>
										</Link>
									);
								}
							})}
			</Wrapper>
			{maxData === data?.getListBrands?.length ? (
				<></>
			) : (
				<div className="flex items-center justify-center mt-[20px] mb-[0px]">
					<button
						onClick={() => {
							if (max < (data?.getListBrands?.length ?? 0)) setMax(data?.getListBrands?.length ?? max);
							else setMax(maxData);
						}}
						className="py-2.5 px-6 bg-white border-blue-text text-blue-text flex gap-[13px] items-center justify-center border-[1px] rounded"
					>
						{max < (data?.getListBrands?.length ?? 0) ? 'Xem thêm' : 'Thu gọn'}
						<img
							style={{ transform: `rotate(${max < (data?.getListBrands?.length ?? 0) ? 0 : 180}deg)` }}
							src="/images/icons/down-circle.svg"
							alt=""
						/>
					</button>
				</div>
			)}
		</>
	);
};

export default memo(BrandCar);

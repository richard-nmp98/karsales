import { useGetListBrandsQuery } from '@/graphql/queries/getListBrands.generated';
import { CarBrandEntity } from '@/graphql/type.interface';
import { handleObjectQuery } from '@/helpers/common';
import { FetchPolicyEnum, keysQuery } from '@/helpers/constant';
import { Skeleton } from 'antd';
import { useRouter } from 'next/router';
import { memo, useEffect, useState } from 'react';
import SelectOptionCustom, { ColorSelectProps } from '../SelectOptionCustom';

type Props = {
	color?: ColorSelectProps;
	showTotalPost?: boolean;
	all?: boolean;
	path: string;
};

const Brand: React.FC<Props> = ({ color = ColorSelectProps.GRAY, showTotalPost = true, all = true, path }) => {
	const router = useRouter();
	const [brands, setBrands] = useState<CarBrandEntity[]>([]);

	const { data: dataBrands, loading: loadingBrands } = useGetListBrandsQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		onCompleted(res) {
			if (res && res.getListBrands) {
				if (!router.query[keysQuery.BRAND]) {
					const _brand = [...res.getListBrands]?.sort((a: CarBrandEntity, b: CarBrandEntity) =>
						b.isDisplayTopSearch === a.isDisplayTopSearch ? 0 : a.isDisplayTopSearch ? -1 : 1,
					);
					handleObjectQuery(router, keysQuery.BRAND, all ? 'tat-ca' : _brand[0].slug, path);
				}
				setBrands([...res.getListBrands]);
			}
		},
	});

	/* eslint-disable */
	useEffect(() => {
		if (!router.query[keysQuery.BRAND] && dataBrands && dataBrands.getListBrands) {
			handleObjectQuery(router, keysQuery.BRAND, all ? 'tat-ca' : dataBrands.getListBrands[0].slug, path);
		}
	}, [router.query]);
	/* eslint-enable */

	return (
		<>
			{loadingBrands ? (
				<div className="w-full skeleton-input-full-width">
					<Skeleton.Input active />
				</div>
			) : (
				<SelectOptionCustom
					placeHolder={`Chọn hãng xe`}
					value={router.query[keysQuery.BRAND]}
					color={color}
					items={[
						all
							? {
									label: 'Tất cả',
									value: 'tat-ca',
							  }
							: {
									label: null,
									value: null,
							  },
						...(brands
							?.sort((a: CarBrandEntity, b: CarBrandEntity) =>
								b.isDisplayTopSearch === a.isDisplayTopSearch ? 0 : a.isDisplayTopSearch ? -1 : 1,
							)
							?.map((item) => {
								return {
									label: `${item?.name} ${showTotalPost ? `(${item?.totalPost})` : ''}` ?? '',
									value: item?.slug?.toString(),
								};
							}) ?? []),
					]}
					onChange={async (value: any) => {
						await handleObjectQuery(router, keysQuery.BRAND, value, path);
					}}
				/>
			)}
		</>
	);
};

export default memo(Brand);

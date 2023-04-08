import { useProvincesQuery } from '@/graphql/queries/provinces.generated';
import { handleObjectQuery } from '@/helpers/common';
import { COUNTRY_DEFAULT, keysQuery } from '@/helpers/constant';
import { Skeleton } from 'antd';
import { useRouter } from 'next/router';
import React, { memo } from 'react';
import SelectOptionCustom, { ColorSelectProps } from '../SelectOptionCustom';

const Place: React.FC<{ path: string }> = ({ path }) => {
	const router = useRouter();

	const { data: dataProvince, loading: loadingProvinces } = useProvincesQuery({
		fetchPolicy: 'cache-first',
		variables: {
			countryCode: COUNTRY_DEFAULT,
			input: {
				skip: 1,
				take: 100,
			},
		},
	});

	return (
		<>
			{loadingProvinces ? (
				<div className="w-full skeleton-input-full-width">
					<Skeleton.Input active />
				</div>
			) : (
				<SelectOptionCustom
					placeHolder={`Chọn tỉnh thành`}
					value={router.query[keysQuery.PROVINCE] ?? 'tat-ca'}
					color={ColorSelectProps.GRAY}
					items={[
						{
							label: 'Tất cả',
							value: 'tat-ca',
						},
						...(dataProvince?.provinces?.items
							?.filter((item) => item.slug !== null)
							.map((item) => {
								return {
									label: item?.name ?? '',
									value: item?.slug?.toString(),
								};
							}) ?? []),
					]}
					onChange={(value: any) => {
						handleObjectQuery(router, keysQuery.PROVINCE, value, path);
					}}
				/>
			)}
		</>
	);
};

export default memo(Place);

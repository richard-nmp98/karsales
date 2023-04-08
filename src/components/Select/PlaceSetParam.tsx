import { useProvincesQuery } from '@/graphql/queries/provinces.generated';
import { COUNTRY_DEFAULT } from '@/helpers/constant';
import { Skeleton } from 'antd';
import React, { memo } from 'react';
import SelectOptionCustom, { ColorSelectProps } from '../SelectOptionCustom';

const Place: React.FC<{ set: any; province: string }> = ({ set, province }) => {
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
					value={province ? province : 'tat-ca'}
					color={ColorSelectProps.GRAY}
					items={[
						{
							label: 'Tất cả',
							value: 'tat-ca',
						},
						...(dataProvince?.provinces?.items.map((item) => {
							return {
								label: item?.name ?? '',
								value: item?.code?.toString(),
							};
						}) ?? []),
					]}
					onChange={(value: any) => {
						set(value);
					}}
				/>
			)}
		</>
	);
};

export default memo(Place);

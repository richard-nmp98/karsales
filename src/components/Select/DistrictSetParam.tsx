import { Skeleton } from 'antd';
import React, { memo } from 'react';
import SelectOptionCustom, { ColorSelectProps } from '../SelectOptionCustom';
import { useDistrictsQuery } from '@/graphql/queries/districts.generated';

const District: React.FC<{ set: any; district: string; provineCode: string }> = ({ set, district, provineCode }) => {
	const { data: dataProvince, loading: loadingProvinces } = useDistrictsQuery({
		fetchPolicy: 'cache-first',
		variables: {
			input: {
				skip: 1,
				take: 100,
				provineCode: provineCode,
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
					placeHolder={`Chọn quận/huyện`}
					value={district ? district : 'tat-ca'}
					color={ColorSelectProps.GRAY}
					items={[
						{
							label: 'Tất cả',
							value: 'tat-ca',
						},
						...(dataProvince?.districts?.items.map((item) => {
							return {
								label: item?.name ?? '',
								value: item?.id?.toString(),
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

export default memo(District);

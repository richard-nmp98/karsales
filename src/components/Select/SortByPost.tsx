import { AppRoutes } from '@/helpers/app.routes';
import { keysQuery, POSTSORTTYPEENUM } from '@/helpers/constant';
import { useRouter } from 'next/router';
import React, { memo } from 'react';
import SelectOptionCustom, { ColorSelectProps } from '../SelectOptionCustom';

const SortByPost: React.FC = () => {
	const router = useRouter();
	return (
		<>
			<SelectOptionCustom
				placeHolder={`Sắp xếp theo`}
				defaultValue={router.query[keysQuery.SORY_BY] ?? 'tat-ca'}
				color={ColorSelectProps.GRAY}
				items={[
					{
						label: 'Sắp xếp theo',
						value: 'tat-ca',
					},
					...POSTSORTTYPEENUM.map((item) => {
						return {
							label: item?.text,
							value: item.link,
						};
					}),
				]}
				onChange={(value: any) => {
					const as: any = undefined;
					router.replace(
						{
							pathname: AppRoutes.buyCar,
							query: {
								...router.query,
								[keysQuery.SORY_BY]: value,
							},
						},
						as,
						{ shallow: true },
					);
				}}
			/>
		</>
	);
};

export default memo(SortByPost);

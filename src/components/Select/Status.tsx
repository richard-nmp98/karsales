import { handleObjectQuery } from '@/helpers/common';
import { CONDITIONLINK, CONDITIONTYPE, keysQuery } from '@/helpers/constant';
import { useRouter } from 'next/router';
import React, { memo, useEffect } from 'react';
import SelectOptionCustom, { ColorSelectProps } from '../SelectOptionCustom';

type Props = {
	color?: ColorSelectProps;
	showTotalPost?: boolean;
	all?: boolean;
	path: string;
};

const Status: React.FC<Props> = ({ color = ColorSelectProps.GRAY, showTotalPost = true, all = true, path }) => {
	const router = useRouter();

	/* eslint-disable */
	useEffect(() => {
		const indexOf = CONDITIONLINK.findIndex((item) => item.link === router.query[keysQuery.STATUS]);
		if (!router.query[keysQuery.STATUS] || indexOf === -1) {
			if (all) {
				handleObjectQuery(router, keysQuery.STATUS, 'tat-ca', path);
			} else {
				handleObjectQuery(router, keysQuery.STATUS, CONDITIONLINK[0].link, path);
			}
		}
	}, []);
	/* eslint-enable */

	return (
		<>
			<SelectOptionCustom
				placeHolder={`Chọn trạng thái xe`}
				value={router.query[keysQuery.STATUS] ?? 'tat-ca'}
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
					...CONDITIONTYPE.map((item) => {
						return {
							label: item?.text,
							value: CONDITIONLINK.find((it) => it?.value === item?.value)?.link,
						};
					}),
				]}
				onChange={(value: any) => {
					handleObjectQuery(router, keysQuery.STATUS, value, path);
				}}
			/>
		</>
	);
};

export default memo(Status);

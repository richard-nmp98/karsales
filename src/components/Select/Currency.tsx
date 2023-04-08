import { PaymentItemCurrencyEnum } from '@/graphql/type.interface';
import { handleObjectQuery } from '@/helpers/common';
import { keysQuery } from '@/helpers/constant';
import { useRouter } from 'next/router';
import React, { memo } from 'react';
import SelectOptionCustom, { ColorSelectProps } from '../SelectOptionCustom';

const Currency: React.FC<{ path: string }> = ({ path }) => {
	const router = useRouter();

	return (
		<>
			<SelectOptionCustom
				placeHolder={`Chọn loại tiền tệ`}
				value={router.query[keysQuery.CURRENCY] ?? PaymentItemCurrencyEnum.VND}
				color={ColorSelectProps.GRAY}
				items={[
					...(Object.values(PaymentItemCurrencyEnum)?.map((item) => {
						return {
							label: item,
							value: item,
						};
					}) ?? []),
				]}
				onChange={(value: any) => {
					handleObjectQuery(router, keysQuery.CURRENCY, value, path);
				}}
			/>
		</>
	);
};

export default memo(Currency);

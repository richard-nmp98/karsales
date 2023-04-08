import { handleObjectQuery } from '@/helpers/common';
import { keysQuery } from '@/helpers/constant';
import { InputNumber } from 'antd';
import { useRouter } from 'next/router';

export const MinPrice: React.FC<{ path: string }> = ({ path }) => {
	const router = useRouter();
	return (
		<>
			<InputNumber
				formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
				defaultValue={Number(router.query[keysQuery.MIN_PRICE])}
				onPressEnter={(event: any) => {
					handleObjectQuery(router, keysQuery.MIN_PRICE, event.target.value.replace(/,/g, ''), path);
				}}
				className="w-full rounded ant-select-h-40 font-normal text-base"
				placeholder="Giá tối thiểu"
				min={0}
			/>
		</>
	);
};

export const MaxPrice: React.FC<{ path: string }> = ({ path }) => {
	const router = useRouter();
	return (
		<>
			<InputNumber
				defaultValue={Number(router.query[keysQuery.MAX_PRICE])}
				formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
				onPressEnter={(event: any) => {
					handleObjectQuery(router, keysQuery.MAX_PRICE, event.target.value.replace(/,/g, ''), path);
				}}
				className="w-full rounded ant-select-h-40 font-normal text-base"
				placeholder="Giá tối đa"
				min={0}
			/>
		</>
	);
};

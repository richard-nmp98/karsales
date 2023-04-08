import { useAppState } from '@/context/AppContext';
import { useGetListCarPurchaseCostProvinceQuery } from '@/graphql/queries/getListCarPurchaseCostProvince.generated';
import { handleObjectQuery } from '@/helpers/common';
import { FetchPolicyEnum, keysQuery } from '@/helpers/constant';
import { Skeleton } from 'antd';
import { useRouter } from 'next/router';
import { memo } from 'react';
import SelectOptionCustom, { ColorSelectProps } from '../SelectOptionCustom';

type Props = {
	color?: ColorSelectProps;
	showTotalPost?: boolean;
	all?: boolean;
	path: string;
};

const RegisterPlace: React.FC<Props> = ({ color = ColorSelectProps.GRAY, all = true, path }) => {
	const router = useRouter();
	const { appState, setAppState } = useAppState();

	const { data: dataCarPurchaseCostProvince, loading: loadingCarPurchaseCostProvince } =
		useGetListCarPurchaseCostProvinceQuery({
			fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
			onCompleted(res) {
				if (res && res.getListCarPurchaseCostProvince) {
					const indexOf = res.getListCarPurchaseCostProvince.findIndex(
						(item) => item.proviceDetail?.slug === router.query[keysQuery.PROVINCE],
					);
					if (!router.query[keysQuery.PROVINCE] || indexOf === -1) {
						handleObjectQuery(
							router,
							keysQuery.PROVINCE,
							res.getListCarPurchaseCostProvince[0]?.proviceDetail?.slug ?? 'tinh-khac',
							path,
						);
						setAppState({
							...appState,
							carPurchaseCostProvince: res.getListCarPurchaseCostProvince[0],
						});
					} else {
						setAppState({
							...appState,
							carPurchaseCostProvince: res?.getListCarPurchaseCostProvince?.find(
								(item) => item.proviceDetail?.slug === router.query[keysQuery.PROVINCE],
							),
						});
					}
				}
			},
		});

	return (
		<>
			{loadingCarPurchaseCostProvince ? (
				<div className="w-full skeleton-input-full-width">
					<Skeleton.Input active />
				</div>
			) : (
				<SelectOptionCustom
					placeHolder={`Chọn tỉnh thành`}
					value={router.query[keysQuery.PROVINCE]}
					color={color}
					items={[
						{
							label: null,
							value: null,
						},
						...(dataCarPurchaseCostProvince?.getListCarPurchaseCostProvince?.map((item) => {
							return {
								label: `${item?.proviceDetail?.name}` ?? '',
								value: item?.proviceDetail?.slug ?? 'tinh-khac',
							};
						}) ?? []),
					]}
					onChange={async (value: any) => {
						await handleObjectQuery(router, keysQuery.PROVINCE, value, path);
						setAppState({
							...appState,
							carPurchaseCostProvince: dataCarPurchaseCostProvince?.getListCarPurchaseCostProvince?.find(
								(item) => (item.proviceDetail?.slug ? item.proviceDetail?.slug : 'tinh-khac') === value,
							),
						});
					}}
				/>
			)}
		</>
	);
};

export default memo(RegisterPlace);

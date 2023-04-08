import { useAppState } from '@/context/AppContext';
import { useGetListCarPurchaseCostProvinceQuery } from '@/graphql/queries/getListCarPurchaseCostProvince.generated';
import { FetchPolicyEnum } from '@/helpers/constant';
import { Skeleton } from 'antd';
import { memo } from 'react';
import SelectOptionCustom, { ColorSelectProps } from '../SelectOptionCustom';

type Props = {
	color?: ColorSelectProps;
	showTotalPost?: boolean;
	all?: boolean;
	path: string;
	setState?: any;
	state: any;
};

const RegisterPlace: React.FC<Props> = (props, { color = ColorSelectProps.GRAY, all = true, path }) => {
	const { appState, setAppState } = useAppState();

	const { data: dataCarPurchaseCostProvince, loading: loadingCarPurchaseCostProvince } =
		useGetListCarPurchaseCostProvinceQuery({
			fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
			onCompleted(res) {
				if (res && res.getListCarPurchaseCostProvince) {
					const indexOf = res.getListCarPurchaseCostProvince.findIndex(
						(item) => item.proviceDetail?.slug === props.state,
					);
					if (!props.state || indexOf === -1) {
						props.setState(res.getListCarPurchaseCostProvince[0]?.proviceDetail?.id);
						setAppState({
							...appState,
							carPurchaseCostProvince: res.getListCarPurchaseCostProvince[0],
						});
					} else {
						setAppState({
							...appState,
							carPurchaseCostProvince: res?.getListCarPurchaseCostProvince?.find(
								(item) => item.proviceDetail?.slug === props.state,
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
					value={props.state}
					color={color}
					items={[
						{
							label: null,
							value: null,
						},
						...(dataCarPurchaseCostProvince?.getListCarPurchaseCostProvince?.map((item) => {
							return {
								label: `${item?.proviceDetail?.name}` ?? '',
								value: item?.proviceDetail?.id,
							};
						}) ?? []),
					]}
					onChange={async (value: any) => {
						await props.setState(value);
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

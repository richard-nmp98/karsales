import { useAppState } from '@/context/AppContext';
import { useGetListModelsQuery } from '@/graphql/queries/getListModels.generated';
import { checkArraySelect, handleObjectQuery } from '@/helpers/common';
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

const Model: React.FC<Props> = ({ color = ColorSelectProps.GRAY, showTotalPost = true, all = true, path }) => {
	const router = useRouter();
	const { appState, setAppState } = useAppState();
	const [brand, setBrand] = useState([]);

	const { data: dataModels, loading: loadingModels } = useGetListModelsQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			input: {
				brand: brand,
			},
		},
		onCompleted(res) {
			if (res && res.getListModels) {
				const indexOf = res.getListModels.findIndex((item) => item.slug === router.query[keysQuery.MODEL]);
				if (!router.query[keysQuery.MODEL] || indexOf === -1) {
					handleObjectQuery(router, keysQuery.MODEL, all ? 'tat-ca' : res.getListModels[0].slug, path);
					setAppState({
						...appState,
						carModel: res.getListModels[0],
					});
				} else {
					setAppState({
						...appState,
						carModel: res?.getListModels?.find((item) => item.slug === router.query[keysQuery.MODEL]),
					});
				}
			}
		},
	});

	/* eslint-disable */
	useEffect(() => {
		if (router.query[keysQuery.BRAND]) {
			setBrand(checkArraySelect(router.query[keysQuery.BRAND]));
		}
	}, [router.query[keysQuery.BRAND]]);
	/* eslint-enable */

	return (
		<>
			{loadingModels ? (
				<div className="w-full skeleton-input-full-width">
					<Skeleton.Input active />
				</div>
			) : (
				<SelectOptionCustom
					placeHolder={`Chọn dòng xe`}
					value={router.query[keysQuery.MODEL]}
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
						...(dataModels?.getListModels?.map((item) => {
							return {
								label: `${item?.name} ${showTotalPost ? `(${item?.totalPost})` : ''}` ?? '',
								value: item?.slug?.toString(),
							};
						}) ?? []),
					]}
					onChange={async (value: any) => {
						await handleObjectQuery(router, keysQuery.MODEL, value, path);
						setAppState({
							...appState,
							carModel: dataModels?.getListModels?.find((item) => item.slug === value),
						});
					}}
				/>
			)}
		</>
	);
};

export default memo(Model);

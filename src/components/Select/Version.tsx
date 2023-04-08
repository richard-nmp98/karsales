import { useAppState } from '@/context/AppContext';
import { useGetListModelsQuery } from '@/graphql/queries/getListModels.generated';
import { useGetListVersionsQuery } from '@/graphql/queries/getListVersions.generated';
import { checkArraySelect } from '@/helpers/common';
import { FetchPolicyEnum, keysQuery } from '@/helpers/constant';
import { Skeleton } from 'antd';
import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';
import SelectOptionCustom, { ColorSelectProps } from '../SelectOptionCustom';

type Props = {
	color?: ColorSelectProps;
	showTotalPost?: boolean;
	all?: boolean;
	path: string;
};

const Version: React.FC<Props> = ({ color = ColorSelectProps.GRAY, all = true, path }) => {
	const router = useRouter();
	const { appState, setAppState } = useAppState();

	const { data: dataModels } = useGetListModelsQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			input: {
				brand: checkArraySelect(router.query[keysQuery.BRAND]),
			},
		},
	});

	const handleObjectVersionQuery = async (router: any, version: any, price: any, path: string) => {
		const as: any = undefined;
		router.replace(
			{
				pathname: path,
				query: {
					...router.query,
					[keysQuery.VERSION]: version,
					[keysQuery.PRICE]: price,
				},
			},
			as,
			{ shallow: true },
		);
	};

	const { data: dataversions, loading: loadingversions } = useGetListVersionsQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			input: {
				model: dataModels?.getListModels?.find((item) => item?.slug === router.query[keysQuery?.MODEL])?.id as string,
			},
		},
		onCompleted(res) {
			if (res && res.getListVersions && dataModels) {
				const indexOf = res.getListVersions.findIndex((item) => item.slug === router.query[keysQuery.VERSION]);
				if (!router.query[keysQuery.VERSION] || indexOf === -1) {
					handleObjectVersionQuery(
						router,
						res.getListVersions[0]?.slug,
						res?.getListVersions[0]?.priceCarVersion,
						path,
					);
					setAppState({
						...appState,
						carVersion: res.getListVersions[0],
					});
				} else {
					setAppState({
						...appState,
						carVersion: res?.getListVersions?.find((item) => item.slug === router.query[keysQuery.VERSION]),
					});
				}
			}
		},
	});

	/* eslint-disable */
	useEffect(() => {
		if (dataversions && dataversions.getListVersions && dataModels) {
			const indexOf = dataversions.getListVersions.findIndex((item) => item.slug === router.query[keysQuery.VERSION]);
			if (!router.query[keysQuery.VERSION] || indexOf === -1) {
				handleObjectVersionQuery(
					router,
					dataversions.getListVersions[0]?.slug,
					dataversions?.getListVersions[0]?.priceCarVersion,
					path,
				);
				setAppState({
					...appState,
					carVersion: dataversions.getListVersions[0],
				});
			} else {
				setAppState({
					...appState,
					carVersion: dataversions?.getListVersions?.find((item) => item.slug === router.query[keysQuery.VERSION]),
				});
			}
		}
	}, [router.query]);
	/* eslint-enable */

	return (
		<>
			{loadingversions ? (
				<div className="w-full skeleton-input-full-width">
					<Skeleton.Input active />
				</div>
			) : (
				<SelectOptionCustom
					placeHolder={`Chọn phiên bản `}
					value={router.query[keysQuery.VERSION]}
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
						...(dataversions?.getListVersions?.map((item) => {
							return {
								label: `${item?.name}` ?? '',
								value: item?.slug?.toString(),
							};
						}) ?? []),
					]}
					onChange={async (value: any) => {
						await handleObjectVersionQuery(
							router,
							value,
							dataversions?.getListVersions?.find((item) => item.slug === value)?.priceCarVersion,
							path,
						);
						setAppState({
							...appState,
							carVersion: dataversions?.getListVersions?.find((item) => item.slug === value),
						});
					}}
				/>
			)}
		</>
	);
};

export default memo(Version);

import { useGetListModelsQuery } from '@/graphql/queries/getListModels.generated';
import { CarModelEntity } from '@/graphql/type.interface';
import { checkArraySelect, handleObjectQuery } from '@/helpers/common';
import { keysQuery } from '@/helpers/constant';
import { Checkbox, Skeleton } from 'antd';
import { useRouter } from 'next/router';
import React, { memo, useEffect, useState } from 'react';

interface CheckBoxCustom {
	checked?: boolean;
	onChange?: any;
}
interface CheckBoxProps extends CheckBoxCustom {
	model?: CarModelEntity;
}

const CheckBoxComponent: React.FC<CheckBoxProps> = (props) => {
	return (
		<>
			<div className="flex justify-between items-center gap-[10px] mb-[10px]">
				<div className="check flex items-center gap-[10px] font-bold text-sm">
					<Checkbox onChange={props?.onChange} value={props?.model?.slug}>
						{props?.model?.name}
					</Checkbox>
				</div>
				<p className="amount font-bold text-sm">{props?.model ? props?.model?.totalPost ?? 0 : ''}</p>
			</div>
		</>
	);
};

const Model: React.FC<{ path: string }> = ({ path }) => {
	const router = useRouter();
	const [brand, setBrand] = useState([]);

	const { data: dataModels, loading: loadingModels } = useGetListModelsQuery({
		fetchPolicy: 'cache-first',
		variables: {
			input: {
				brand: brand,
			},
		},
		onCompleted() {
			if (router.query[keysQuery.MODEL]) {
				handleObjectQuery(router, keysQuery.MODEL, handleChecked('', ''), path);
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

	const updateArray = (input: string): string[] => {
		if (input === '' || input === 'tat-ca') {
			return [];
		}

		return input.split(',');
	};

	const handleChecked = (valueChecked: string, list: any) => {
		const listChecked = updateArray(list);

		const index = listChecked.indexOf(valueChecked);

		if (index >= 0) {
			listChecked.splice(index, 1);
		} else {
			listChecked.push(valueChecked);
		}

		let outputString = 'tat-ca';

		if (listChecked.length > 0) {
			outputString = listChecked.join(',');
		}

		return outputString;
	};

	return (
		<>
			{loadingModels ? (
				new Array(5).fill(null)?.map((_, index) => (
					<div
						className="flex justify-between items-center gap-[10px] mb-[10px] font-bold text-sm skeleton-input-full-width"
						key={index}
					>
						<Skeleton.Input active />
					</div>
				))
			) : (
				<div className="h-[300px] overflow-auto custom-sb pr-[6px] box-border">
					{dataModels?.getListModels?.map((item, index) => {
						if (Number(item?.totalPost) > 0) {
							return (
								<CheckBoxComponent
									checked={
										router.query[keysQuery.MODEL] ? router.query[keysQuery.MODEL].indexOf(item?.slug) !== -1 : false
									}
									onChange={(event: any) => {
										handleObjectQuery(
											router,
											keysQuery.MODEL,
											handleChecked(event.target.value, router.query[keysQuery.MODEL] ?? ''),
											path,
										);
									}}
									model={item}
									key={index}
								/>
							);
						}
					})}
				</div>
			)}
		</>
	);
};

export default memo(Model);

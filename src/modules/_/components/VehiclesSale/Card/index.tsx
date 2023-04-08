import React, { memo, useState } from 'react';
import { Wrapper } from './styled';
import { useGetListPostActiveQuery } from '@/graphql/queries/getListPostActive.generated';
import { PostEntity } from '@/graphql/type.interface';
import { Skeleton } from 'antd';
import Card from '@/components/Posts/Card';

const MAXDATA = 6;

const CardVehicleSale: React.FC = () => {
	const [carsActive, setCarsActive] = useState<PostEntity[]>();

	const { loading } = useGetListPostActiveQuery({
		fetchPolicy: 'cache-first',
		variables: {
			input: {
				skip: 1,
				take: MAXDATA,
			},
		},
		onCompleted(res) {
			if (res) {
				setCarsActive([...(res?.getListPostActive?.items ?? [])]);
			}
		},
	});

	return (
		<>
			<Wrapper className="grid xl:grid-cols-3 sm:grid-cols-2 gap-[20px]">
				{loading
					? new Array(3).fill(null)?.map((_, index) => <Skeleton key={index} />)
					: carsActive?.map((item, index) => <Card key={index} post={item} />)}
			</Wrapper>
		</>
	);
};

export default memo(CardVehicleSale);

import Card from '@/components/Posts/Card';
import { useGetListPostActiveQuery } from '@/graphql/queries/getListPostActive.generated';
import { PostEntity, PostSortType } from '@/graphql/type.interface';
import { Skeleton } from 'antd';
import React, { memo, useState } from 'react';
import { Wrapper } from './styled';

const MAXDATA = 8;

const BrandWidthCar: React.FC = () => {
	const [carsActive, setCarsActive] = useState<PostEntity[]>();

	const { loading } = useGetListPostActiveQuery({
		fetchPolicy: 'cache-first',
		variables: {
			input: {
				skip: 1,
				take: MAXDATA,
				options: {
					sort: PostSortType.TOTAL_VIEW,
				},
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
			<Wrapper className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5">
				{loading
					? new Array(8).fill(null).map((_, index) => <Skeleton key={index} />)
					: carsActive?.map((item, index) => <Card post={item} key={index} />)}
			</Wrapper>
		</>
	);
};

export default memo(BrandWidthCar);

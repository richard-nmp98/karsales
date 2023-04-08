import Card from '@/components/Posts/Card';
import { useGetListPostActiveQuery } from '@/graphql/queries/getListPostActive.generated';
import { ListPostOptionsInput, PostEntity } from '@/graphql/type.interface';
import { FetchPolicyEnum } from '@/helpers/constant';
import { Skeleton } from 'antd';
import { useRouter } from 'next/router';
import React, { memo, useEffect, useState } from 'react';
import { Wrapper } from './styled';

const MAXDATA = 5;

enum TYPEOTHER {
	BODYTYPE = 'BODYTYPE',
	MODEL = 'MODEL',
	BRAND = 'BRAND',
}

type Props = {
	post?: PostEntity | null;
};

const News: React.FC<Props> = ({ post }) => {
	const [carsActive, setCarsActive] = useState<PostEntity[]>();
	const router: any = useRouter();
	const { slug }: any = router?.query ?? '';
	const [typeOther, setTypeOther] = useState<any>({
		type: TYPEOTHER?.BODYTYPE,
		...post?.bodyType,
	});
	const [options, setOptions] = useState<ListPostOptionsInput | null>(null);

	const { loading } = useGetListPostActiveQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_AND_NETWORK,
		variables: {
			input: {
				skip: 1,
				take: MAXDATA,
				options: options,
			},
		},
		onCompleted(res) {
			if (res) {
				if (post) {
					if (res?.getListPostActive?.items?.length === 0) {
						if (typeOther?.type === TYPEOTHER.BODYTYPE) {
							setTypeOther({
								type: TYPEOTHER.MODEL,
								...post?.model,
							});
							setOptions({
								model: [post?.model?.slug ?? ''],
							});
						} else if (typeOther?.type === TYPEOTHER.MODEL) {
							setTypeOther({
								type: TYPEOTHER.BRAND,
								...post?.brand,
							});
							setOptions({
								brand: [post?.brand?.slug ?? ''],
							});
						}
					} else {
						setCarsActive(res?.getListPostActive?.items?.filter((item) => item?.id !== post?.id) ?? []);
					}
				}
			}
		},
	});

	/* eslint-disable */
	useEffect(() => {
		if ((slug?.toString() && post) || (post && !options)) {
			setTypeOther({
				type: TYPEOTHER.BODYTYPE,
				...post?.bodyType,
			});
			setOptions({ bodyType: [post?.bodyType?.slug ?? ''] });
		}
	}, [post, slug]);
	/* eslint-enable */

	return (
		<>
			{carsActive && carsActive?.length > 0 ? (
				<Wrapper className="w-full mb-[0px]">
					<div className="pt-[5px] flex flex-col">
						{loading ? (
							<></>
						) : (
							<div className="tabs flex mb-4 gap-[31px]">
								<div className="text-secondary-500 font-semibold py-2 cursor-pointer xl:text-[32px] sm:text-[20px] text-[24px] tab">
									{typeOther?.name} khác
								</div>
							</div>
						)}
					</div>
					<div className="content sm:flex sm:gap-5 lg:block block items-start">
						<div className="w-full news mb-[0px]">
							{loading ? (
								<div className="group-sub-news">
									<Skeleton active />
									<Skeleton active />
									<Skeleton active />
								</div>
							) : (
								<div className="group-sub-news grid grid-cols-1 gap-[10px]">
									{carsActive?.map((item, index) => {
										if (item?.slug !== slug?.toString() && item?.id !== slug?.toString()) {
											return <Card key={index} post={item} />;
										}
									})}
								</div>
							)}
						</div>
					</div>
				</Wrapper>
			) : (
				<></>
			)}
		</>
	);
};

export default memo(News);

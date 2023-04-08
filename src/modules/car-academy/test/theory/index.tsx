import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import Carousel from '@/components/Carousel';
import { useGetQuestionGroupByTypeQuery } from '@/graphql/queries/getQuestionGroupByType.generated';
import { BannerPositionEnum, QuestionGroupEntity, QuestionGroupTypeEnum } from '@/graphql/type.interface';
import { AppRoutes } from '@/helpers/app.routes';
import { convertToSlug } from '@/helpers/common';
import { FetchPolicyEnum } from '@/helpers/constant';
import { Skeleton } from 'antd';
import { useRouter } from 'next/router';
import { memo, useState } from 'react';
import Question from './components/Question';
import { useGetListQuestionByGroupQuery } from '@/graphql/queries/getListQuestionByGroup.generated';

const Theory: React.FC = () => {
	const [lstItem] = useState<BreadcrumbItem[]>([
		{
			title: 'Học viện ôtô',
			url: AppRoutes.carAcademy,
		},
		{
			title: 'Ôn tập lý thuyết',
		},
		{
			title: 'Bộ đề',
		},
	]);

	const [current] = useState<BreadcrumbItem>({ title: 'xxx' });

	const [dataQuestionGroup, setDataQuestionGroup] = useState<QuestionGroupEntity>();
	const { slug } = useRouter().query;

	const { loading: loadingQuestionTheoryGroup } = useGetQuestionGroupByTypeQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			input: {
				type: QuestionGroupTypeEnum.THI_THU,
			},
		},
		onCompleted(res) {
			if (res && res.getQuestionGroupByType) {
				const _dataQuestionGroup = res.getQuestionGroupByType?.find(
					(item) => `${convertToSlug(item.name)}-${item.id.substring(item.id.length - 2, item.id.length)}` === slug,
				);

				setDataQuestionGroup(_dataQuestionGroup);
			}
		},
	});

	const { data } = useGetListQuestionByGroupQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			input: {
				id: dataQuestionGroup?.id ?? '',
			},
		},
	});

	return (
		<>
			<Carousel position={BannerPositionEnum.WEBSITE_BODY} />
			<Breadcrumb current={current} lstItem={lstItem} />
			<div className="container my-[38px]">
				{loadingQuestionTheoryGroup ? (
					<Skeleton active />
				) : (
					<>
						<p className="text-center text-blue-text font-bold text-[32px] mb-[49px]">
							{dataQuestionGroup?.name ?? '-'}
						</p>
						{data?.getListQuestionByGroup?.map((item, index) => (
							<Question question={item} index={index + 1} key={index} />
						))}
					</>
				)}
			</div>
		</>
	);
};

export default memo(Theory);

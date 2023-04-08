import React, { memo } from 'react';
import { Wrapper } from './styled';
import { ExamQuestionTheory } from '../exam-questions';
import ExamPreparationChapter from '../exam-preparation-chapter';
import { FetchPolicyEnum, QUESTION_THEORY_TYPE } from '@/helpers/constant';
import { AppRoutes } from '@/helpers/app.routes';
import { useGetQuestionGroupByTypeQuery } from '@/graphql/queries/getQuestionGroupByType.generated';
import { QuestionGroupTypeEnum } from '@/graphql/type.interface';
import { Skeleton } from 'antd';
import { useGetTotalQuestionActiveQuery } from '@/graphql/queries/getTotalQuestionActive.generated';

const ExamPreparationTheory: React.FC = () => {
	const { data: dataQuestionTheoryGorup, loading: loadingQuestionTheoryGroup } = useGetQuestionGroupByTypeQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			input: {
				type: QuestionGroupTypeEnum.THI_THU,
			},
		},
	});

	const { data: totalQuestionTheoryActive, loading: loadingTotalQuestionTheoryActive } = useGetTotalQuestionActiveQuery(
		{
			fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		},
	);

	return (
		<>
			<Wrapper>
				<div className="grid grid-cols-12 lg:gap-5 sm:gap-10 mb-[59px]">
					<div className="lg:col-span-3 sm:col-span-5 col-span-12">
						<ExamPreparationChapter chapter={QUESTION_THEORY_TYPE} link={AppRoutes.carAcademyChapterTheory} />
					</div>
					<div className="col-span-1 lg:block lg:relative absolute hidden" />
					<div className="xl:col-span-5 lg:col-span-7 sm:col-span-7 col-span-12">
						<div className="title mb-[21px]">
							<p className="font-normal lg:text-[32px] sm:text-[24px] text-[20px] text-blue-main mb-[20px]">
								Biển báo ngẫu nhiên
							</p>
						</div>
						<div className="traffic-signs">
							<div className="imgs mb-[18px]">
								<img src="https://kar-oto-app.s3.ap-southeast-1.amazonaws.com/uploads/1680338060621.png" alt="" />
							</div>
							<div className="content">
								<p className="content text-base font-normal">
									Trong 18 đề thi sát hạch lái xe B2 mỗi đề gồm 35 câu hỏi, mỗi câu hỏi chỉ có duy nhất Trong 18 đề thi
									sát hạch lái xe B2 mỗi đề gồm 35 câu hỏi, mỗi câu hỏi chỉ có duy nhất Trong 18 đề thi sát hạch lái xe
									B2 mỗi đề gồm 35 câu hỏi, mỗi câu hỏi chỉ có duy nhất Trong 18 đề thi sát hạch lái xe B2 mỗi đề gồm 35
									câu hỏi, mỗi câu hỏi chỉ có duy nhất Trong 18 đề thi sát hạch lái xe B2 mỗi đề gồm 35 câu hỏi, mỗi câu
									hỏi chỉ có duy nhất{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
				{loadingQuestionTheoryGroup || loadingTotalQuestionTheoryActive ? (
					<Skeleton active />
				) : (
					<ExamQuestionTheory
						list={dataQuestionTheoryGorup?.getQuestionGroupByType ?? []}
						numQuestion={totalQuestionTheoryActive?.getTotalQuestionActive ?? 0}
						link={AppRoutes.carAcademyTestTheory}
					/>
				)}
			</Wrapper>
		</>
	);
};

export default memo(ExamPreparationTheory);

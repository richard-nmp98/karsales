import React, { memo } from 'react';
import { Wrapper } from './styled';
import { ExamQuestionSimulation } from '../exam-questions';
import ExamPreparationChapter from '../exam-preparation-chapter';
import { FetchPolicyEnum, QUESTION_SIMULATION_TYPE } from '@/helpers/constant';
import { AppRoutes } from '@/helpers/app.routes';
import { QuestionSimulationGroupTypeEnum } from '@/graphql/type.interface';
import { useGetListQuestionSimulationByTypeQuery } from '@/graphql/queries/getListQuestionSimulationByType.generated';
import { Skeleton } from 'antd';

const ExamPreparationSimulation: React.FC = () => {
	const { data: dataQuestionSimulationGorup, loading: loadingQuestionSimulationGroup } =
		useGetListQuestionSimulationByTypeQuery({
			fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
			variables: {
				input: {
					type: QuestionSimulationGroupTypeEnum.THI_THU,
				},
			},
		});

	return (
		<>
			<Wrapper>
				<div className="grid grid-cols-12 lg:gap-5 sm:gap-10 mb-[59px]">
					<div className="lg:col-span-3 sm:col-span-5 col-span-12">
						<ExamPreparationChapter chapter={QUESTION_SIMULATION_TYPE} link={AppRoutes.carAcademyChapterSimulation} />
					</div>
					<div className="col-span-1 lg:block lg:relative absolute hidden" />
					<div className="xl:col-span-5 lg:col-span-7 sm:col-span-7 col-span-12">
						<div className="title mb-[21px]">
							<p className="font-normal lg:text-[32px] sm:text-[24px] text-[20px] text-blue-main mb-[20px]">
								Tình huống ngẫu nhiên
							</p>
						</div>
						<div className="traffic-signs">
							<div className="imgs mb-[18px]">
								<video
									height="240"
									className="video-player"
									controls
									style={{
										width: '100%',
										background: 'rgb(0, 0, 0)',
									}}
								>
									<source
										src="https://kar-oto-app.s3.ap-southeast-1.amazonaws.com/uploads/1676184691275.mp4"
										type="video/mp4"
									/>
								</video>
								<div className="action flex justify-center mt-[16px]">
									<button className="flex justify-center items-center bg-pink-main rounded w-[260px] h-[56px] font-bold text-[25px] text-white">
										DỪNG
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{loadingQuestionSimulationGroup ? (
					<Skeleton active />
				) : (
					<ExamQuestionSimulation
						list={dataQuestionSimulationGorup?.getListQuestionSimulationByType ?? []}
						link={AppRoutes.carAcademyTestSimulation}
					/>
				)}
			</Wrapper>
		</>
	);
};

export default memo(ExamPreparationSimulation);

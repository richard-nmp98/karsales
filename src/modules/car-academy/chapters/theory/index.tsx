import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';
import Carousel from '@/components/Carousel';
import { BannerPositionEnum, QuestionEntity, QuestionGroupTypeEnum } from '@/graphql/type.interface';
import { AppRoutes } from '@/helpers/app.routes';
import { FetchPolicyEnum, QUESTION_THEORY_TYPE } from '@/helpers/constant';
import { useRouter } from 'next/router';
import React, { memo, useState } from 'react';
import ListQuestion from './components/ListQuestion';
import DetailQuestion from './components/DetailQuestion';
import { useGetListQuestionByTypeQuery } from '@/graphql/queries/getListQuestionByType.generated';
import { Skeleton } from 'antd';

export type Answer = {
	question: number;
	answer: number[];
};

const Theory = () => {
	const [lstItem] = useState<BreadcrumbItem[]>([
		{
			title: 'Học viện ôtô',
			url: AppRoutes.carAcademy,
		},
		{
			title: 'Ôn tập lý thuyết',
		},
	]);

	const router = useRouter();
	const [currentQuestion] = useState(QUESTION_THEORY_TYPE.find((item) => item.link === router?.query?.slug ?? ''));

	const [current] = useState<BreadcrumbItem>({ title: currentQuestion?.text });
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
	const [data, setData] = useState<QuestionEntity[]>([]);
	const [answer, setAnswer] = useState<any>();

	const { loading } = useGetListQuestionByTypeQuery({
		fetchPolicy: FetchPolicyEnum.CACHE_FIRST,
		variables: {
			input: {
				type: currentQuestion?.value as QuestionGroupTypeEnum,
			},
		},
		onCompleted(res) {
			/* eslint-disable */
			if (res && res?.getListQuestionByType) {
				setData([...res?.getListQuestionByType]);
			}
			/* eslint-enable */
		},
	});

	return (
		<>
			<Carousel position={BannerPositionEnum.WEBSITE_BODY} />
			<Breadcrumb current={current} lstItem={lstItem} />
			<div className="container my-[38px]">
				{loading ? (
					<Skeleton active />
				) : (
					<>
						<ListQuestion
							title={currentQuestion?.text}
							numQuestion={data?.length ?? 0}
							currentQuestionIndex={currentQuestionIndex}
							setCurrentQuestionIndex={setCurrentQuestionIndex}
						/>
						<div className="mt-[53px]">
							<DetailQuestion
								answer={answer}
								setAnswer={setAnswer}
								indexQuestion={currentQuestionIndex}
								data={data ? data?.[currentQuestionIndex - 1] : null}
							/>
						</div>
						<div className="flex justify-center items-center gap-5 mt-[52px]">
							<button
								onClick={() => {
									if (currentQuestionIndex > 1) {
										setCurrentQuestionIndex(currentQuestionIndex - 1);
									}
								}}
								className={`w-[85px] h-[35px] text-[15px] ${
									currentQuestionIndex <= 1 ? 'bg-[#D9D9D9]' : 'bg-[#FB4E4C] text-white'
								} rounded`}
							>
								Quay lại
							</button>
							<button
								onClick={() => {
									if (currentQuestionIndex < Number(data?.length ?? 0)) {
										setCurrentQuestionIndex(currentQuestionIndex + 1);
									}
								}}
								className={`w-[85px] h-[35px] text-[15px] ${
									currentQuestionIndex >= Number(data?.length ?? 0) ? 'bg-[#D9D9D9]' : 'bg-[#FB4E4C] text-white'
								} rounded`}
							>
								Tiếp theo
							</button>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default memo(Theory);

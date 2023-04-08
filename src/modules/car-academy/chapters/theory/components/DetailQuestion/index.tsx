import { Radio } from 'antd';
import { memo, useEffect, useState } from 'react';
import { Wrapper } from './styled';
import { QuestionAnswerTypeEnum, QuestionEntity } from '@/graphql/type.interface';

type Props = {
	data?: QuestionEntity | null;
	indexQuestion?: number;
	answer?: any;
	setAnswer: any;
};

const DetailQuestion: React.FC<Props> = (props) => {
	const [question, setQuestion] = useState<string>('');

	useEffect(() => {
		if (props.data) {
			setQuestion(props?.data?.no?.toString() as string);
		}
	}, [props.data]);

	// const handleCheckMulti = (index: number) => {
	// 	if (props?.answer && props?.answer[question]) {
	// 		let answer = []
	// 		if (props?.answer[question].indexOf(index) !== -1) {
	// 			answer = props?.answer[question]
	// 			answer.splice(props?.answer[question].indexOf(index), 1)
	// 		} else {
	// 			answer = [...props?.answer[question], index]
	// 		}
	// 		props.setAnswer({
	// 			...props.answer,
	// 			[question]: [...answer]
	// 		})
	// 	} else {
	// 		props.setAnswer({
	// 			...props.answer,
	// 			[question]: [index]
	// 		})
	// 	}
	// }

	const handleCheckOne = (index: number) => {
		if (props?.answer && props?.answer[question]) {
			props.setAnswer({
				...props.answer,
				[question]: [index],
			});
		} else {
			props.setAnswer({
				...props.answer,
				[question]: [index],
			});
		}
	};

	return (
		<Wrapper>
			<div className="grid grid-cols-12 gap-3">
				<div className="col-span-12">
					<div className="w-full flex md:flex-nowrap flex-wrap grid-cols-12 gap-5">
						<div className="w-[120px]">
							<div className="tex-[15px] text-blue-text bg-[#F0F0F0] border-[1px] rounded border-[#D9D9D9] flex items-center justify-center min-w-[85px] py-[8.5px] px-[1px]">
								Câu {props.indexQuestion}:
							</div>
						</div>
						<div className="md:w-auto w-full">
							<div className="title flex items-center">
								<p className="font-bold text-lg mb-[10px]">{props?.data?.content}</p>
							</div>
							<div className="md:w-auto w-full mb-5">
								{props?.data?.images?.map((img, idx) => (
									<img key={idx} className="max-w-[300px]" src={img ?? ''} alt="" />
								))}
							</div>
							<div className="grid">
								{props.data?.answerType === QuestionAnswerTypeEnum.SELECT_ONE ? (
									<Radio.Group
										className="grid"
										value={props?.answer && props?.answer[question] ? props?.answer[question][0] : -1}
									>
										{props?.data?.answers?.map((item, index) => (
											<Radio
												onClick={(e) => handleCheckOne(index)}
												value={index}
												key={index}
												className={`
																mb-3
																${
																	props?.answer && props?.answer[question] && props?.answer[question]?.length > 0
																		? props?.answer[question].indexOf(index) !== -1 && item?.correctAnswer
																			? 'correct'
																			: 'incorrect'
																		: ''
																}
															`}
											>
												{item?.content}
											</Radio>
										))}
									</Radio.Group>
								) : (
									<></>
								)}
							</div>
						</div>
					</div>
					{props?.data?.explainAnswer || props?.data?.imageExplainAnswer ? (
						<div className="w-full flex md:flex-nowrap flex-wrap gap-5 mt-[34px]">
							<div className="md:w-auto w-full">
								<p className="font-bold text-lg">Giải thích</p>
								<p
									className="text-lg"
									dangerouslySetInnerHTML={{
										__html: props?.data?.explainAnswer ?? '',
									}}
								></p>
							</div>
							<div className="md:w-auto w-full">
								<img className="max-w-[300px]" src={props?.data?.imageExplainAnswer ?? ''} alt="" />
							</div>
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		</Wrapper>
	);
};

export default memo(DetailQuestion);

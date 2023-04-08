import { memo } from 'react';
import { Wrapper } from './styled';
type Props = {
	title?: string;
	numQuestion?: number;
	currentQuestionIndex?: number;
	setCurrentQuestionIndex?: any;
};

const ListQuestion: React.FC<Props> = (props) => {
	return (
		<Wrapper>
			<p className="text-center text-blue-text font-bold text-[32px] mb-[49px]">{props.title ?? '-'}</p>
			<div className="lts-question">
				<div className={`grid lg:gap-2 gap-1 list-question`}>
					{new Array(props?.numQuestion).fill(null).map((_, index) => (
						<div
							onClick={() => props.setCurrentQuestionIndex(index + 1)}
							key={index}
							className={`md:col-span-1 ssrsm:col-span-2 col-span-3 sm:text-[15px] text-[12px] ${
								index + 1 === props.currentQuestionIndex ? 'bg-[#FB4E4C] text-white' : 'bg-[#F0F0F0] text-blue-text'
							} border-[1px] rounded border-[#D9D9D9] flex items-center justify-center sm:py-[8.5px] py-[5px] px-[1px]`}
						>
							Câu {index + 1}
						</div>
					))}
				</div>
			</div>
		</Wrapper>
	);
};

export default memo(ListQuestion);

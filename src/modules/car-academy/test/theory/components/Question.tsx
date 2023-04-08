import { memo } from 'react';
import { Wrapper } from './styled';
import { QuestionEntity } from '@/graphql/type.interface';

type Props = {
	question: QuestionEntity;
	index: number;
};

const Question: React.FC<Props> = (props) => {
	return (
		<>
			<Wrapper>
				Câu {props.index}&nbsp;
				{props?.question?.content}
			</Wrapper>
		</>
	);
};

export default memo(Question);

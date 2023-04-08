import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetListQuestionQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetListQuestionQueryResponse = { __typename?: 'Query' } & {
	getListQuestion?: Types.Maybe<
		Array<
			{ __typename?: 'QuestionEntity' } & Pick<
				Types.QuestionEntity,
				'answerType' | 'content' | 'explainAnswer' | 'id' | 'imageExplainAnswer' | 'images' | 'isActive' | 'no' | 'type'
			> & {
					answers?: Types.Maybe<
						Array<
							{ __typename?: 'QuestionAnswerEntity' } & Pick<
								Types.QuestionAnswerEntity,
								'content' | 'correctAnswer' | 'id' | 'no' | 'parentNo' | 'questionId'
							>
						>
					>;
				}
		>
	>;
};

export const GetListQuestionDocument = gql`
	query getListQuestion {
		getListQuestion {
			answers {
				content
				correctAnswer
				id
				no
				parentNo
				questionId
			}
			answerType
			content
			explainAnswer
			id
			imageExplainAnswer
			images
			isActive
			no
			type
		}
	}
`;
export function useGetListQuestionQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<GetListQuestionQueryResponse, GetListQuestionQueryVariables>,
) {
	return ApolloReactHooks.useQuery<GetListQuestionQueryResponse, GetListQuestionQueryVariables>(
		GetListQuestionDocument,
		baseOptions,
	);
}
export function useGetListQuestionLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetListQuestionQueryResponse, GetListQuestionQueryVariables>,
) {
	return ApolloReactHooks.useLazyQuery<GetListQuestionQueryResponse, GetListQuestionQueryVariables>(
		GetListQuestionDocument,
		baseOptions,
	);
}
export type GetListQuestionQueryHookResult = ReturnType<typeof useGetListQuestionQuery>;
export type GetListQuestionLazyQueryHookResult = ReturnType<typeof useGetListQuestionLazyQuery>;
export type GetListQuestionQueryResult = ApolloReactCommon.QueryResult<
	GetListQuestionQueryResponse,
	GetListQuestionQueryVariables
>;

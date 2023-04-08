import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetListQuestionByTypeQueryVariables = Types.Exact<{
	input: Types.QuestionGroupByTypeInput;
}>;

export type GetListQuestionByTypeQueryResponse = { __typename?: 'Query' } & {
	getListQuestionByType?: Types.Maybe<
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

export const GetListQuestionByTypeDocument = gql`
	query getListQuestionByType($input: QuestionGroupByTypeInput!) {
		getListQuestionByType(input: $input) {
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
export function useGetListQuestionByTypeQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		GetListQuestionByTypeQueryResponse,
		GetListQuestionByTypeQueryVariables
	>,
) {
	return ApolloReactHooks.useQuery<GetListQuestionByTypeQueryResponse, GetListQuestionByTypeQueryVariables>(
		GetListQuestionByTypeDocument,
		baseOptions,
	);
}
export function useGetListQuestionByTypeLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetListQuestionByTypeQueryResponse,
		GetListQuestionByTypeQueryVariables
	>,
) {
	return ApolloReactHooks.useLazyQuery<GetListQuestionByTypeQueryResponse, GetListQuestionByTypeQueryVariables>(
		GetListQuestionByTypeDocument,
		baseOptions,
	);
}
export type GetListQuestionByTypeQueryHookResult = ReturnType<typeof useGetListQuestionByTypeQuery>;
export type GetListQuestionByTypeLazyQueryHookResult = ReturnType<typeof useGetListQuestionByTypeLazyQuery>;
export type GetListQuestionByTypeQueryResult = ApolloReactCommon.QueryResult<
	GetListQuestionByTypeQueryResponse,
	GetListQuestionByTypeQueryVariables
>;

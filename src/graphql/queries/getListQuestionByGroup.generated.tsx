import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetListQuestionByGroupQueryVariables = Types.Exact<{
	input: Types.DetailInput;
}>;

export type GetListQuestionByGroupQueryResponse = { __typename?: 'Query' } & {
	getListQuestionByGroup?: Types.Maybe<
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

export const GetListQuestionByGroupDocument = gql`
	query getListQuestionByGroup($input: DetailInput!) {
		getListQuestionByGroup(input: $input) {
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
export function useGetListQuestionByGroupQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		GetListQuestionByGroupQueryResponse,
		GetListQuestionByGroupQueryVariables
	>,
) {
	return ApolloReactHooks.useQuery<GetListQuestionByGroupQueryResponse, GetListQuestionByGroupQueryVariables>(
		GetListQuestionByGroupDocument,
		baseOptions,
	);
}
export function useGetListQuestionByGroupLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetListQuestionByGroupQueryResponse,
		GetListQuestionByGroupQueryVariables
	>,
) {
	return ApolloReactHooks.useLazyQuery<GetListQuestionByGroupQueryResponse, GetListQuestionByGroupQueryVariables>(
		GetListQuestionByGroupDocument,
		baseOptions,
	);
}
export type GetListQuestionByGroupQueryHookResult = ReturnType<typeof useGetListQuestionByGroupQuery>;
export type GetListQuestionByGroupLazyQueryHookResult = ReturnType<typeof useGetListQuestionByGroupLazyQuery>;
export type GetListQuestionByGroupQueryResult = ApolloReactCommon.QueryResult<
	GetListQuestionByGroupQueryResponse,
	GetListQuestionByGroupQueryVariables
>;

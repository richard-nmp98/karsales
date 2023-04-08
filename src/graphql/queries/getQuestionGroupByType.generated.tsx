import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetQuestionGroupByTypeQueryVariables = Types.Exact<{
	input: Types.QuestionGroupByTypeInput;
}>;

export type GetQuestionGroupByTypeQueryResponse = { __typename?: 'Query' } & {
	getQuestionGroupByType?: Types.Maybe<
		Array<
			{ __typename?: 'QuestionGroupEntity' } & Pick<
				Types.QuestionGroupEntity,
				'createdAt' | 'id' | 'name' | 'questions' | 'type' | 'updatedAt'
			>
		>
	>;
};

export const GetQuestionGroupByTypeDocument = gql`
	query getQuestionGroupByType($input: QuestionGroupByTypeInput!) {
		getQuestionGroupByType(input: $input) {
			createdAt
			id
			name
			questions
			type
			updatedAt
		}
	}
`;
export function useGetQuestionGroupByTypeQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		GetQuestionGroupByTypeQueryResponse,
		GetQuestionGroupByTypeQueryVariables
	>,
) {
	return ApolloReactHooks.useQuery<GetQuestionGroupByTypeQueryResponse, GetQuestionGroupByTypeQueryVariables>(
		GetQuestionGroupByTypeDocument,
		baseOptions,
	);
}
export function useGetQuestionGroupByTypeLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetQuestionGroupByTypeQueryResponse,
		GetQuestionGroupByTypeQueryVariables
	>,
) {
	return ApolloReactHooks.useLazyQuery<GetQuestionGroupByTypeQueryResponse, GetQuestionGroupByTypeQueryVariables>(
		GetQuestionGroupByTypeDocument,
		baseOptions,
	);
}
export type GetQuestionGroupByTypeQueryHookResult = ReturnType<typeof useGetQuestionGroupByTypeQuery>;
export type GetQuestionGroupByTypeLazyQueryHookResult = ReturnType<typeof useGetQuestionGroupByTypeLazyQuery>;
export type GetQuestionGroupByTypeQueryResult = ApolloReactCommon.QueryResult<
	GetQuestionGroupByTypeQueryResponse,
	GetQuestionGroupByTypeQueryVariables
>;

import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetTotalQuestionActiveQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetTotalQuestionActiveQueryResponse = { __typename?: 'Query' } & Pick<
	Types.Query,
	'getTotalQuestionActive'
>;

export const GetTotalQuestionActiveDocument = gql`
	query getTotalQuestionActive {
		getTotalQuestionActive
	}
`;
export function useGetTotalQuestionActiveQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		GetTotalQuestionActiveQueryResponse,
		GetTotalQuestionActiveQueryVariables
	>,
) {
	return ApolloReactHooks.useQuery<GetTotalQuestionActiveQueryResponse, GetTotalQuestionActiveQueryVariables>(
		GetTotalQuestionActiveDocument,
		baseOptions,
	);
}
export function useGetTotalQuestionActiveLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetTotalQuestionActiveQueryResponse,
		GetTotalQuestionActiveQueryVariables
	>,
) {
	return ApolloReactHooks.useLazyQuery<GetTotalQuestionActiveQueryResponse, GetTotalQuestionActiveQueryVariables>(
		GetTotalQuestionActiveDocument,
		baseOptions,
	);
}
export type GetTotalQuestionActiveQueryHookResult = ReturnType<typeof useGetTotalQuestionActiveQuery>;
export type GetTotalQuestionActiveLazyQueryHookResult = ReturnType<typeof useGetTotalQuestionActiveLazyQuery>;
export type GetTotalQuestionActiveQueryResult = ApolloReactCommon.QueryResult<
	GetTotalQuestionActiveQueryResponse,
	GetTotalQuestionActiveQueryVariables
>;

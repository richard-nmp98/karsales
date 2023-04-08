import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetReviewsCatetoriesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetReviewsCatetoriesQueryResponse = { __typename?: 'Query' } & {
	getReviewsCatetories?: Types.Maybe<
		Array<
			{ __typename?: 'ReviewCategoriesEntity' } & Pick<
				Types.ReviewCategoriesEntity,
				'createdAt' | 'id' | 'isActive' | 'nameEn' | 'nameVi' | 'slug' | 'total' | 'updatedAt'
			>
		>
	>;
};

export const GetReviewsCatetoriesDocument = gql`
	query getReviewsCatetories {
		getReviewsCatetories {
			createdAt
			id
			isActive
			nameEn
			nameVi
			slug
			total
			updatedAt
		}
	}
`;
export function useGetReviewsCatetoriesQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		GetReviewsCatetoriesQueryResponse,
		GetReviewsCatetoriesQueryVariables
	>,
) {
	return ApolloReactHooks.useQuery<GetReviewsCatetoriesQueryResponse, GetReviewsCatetoriesQueryVariables>(
		GetReviewsCatetoriesDocument,
		baseOptions,
	);
}
export function useGetReviewsCatetoriesLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetReviewsCatetoriesQueryResponse,
		GetReviewsCatetoriesQueryVariables
	>,
) {
	return ApolloReactHooks.useLazyQuery<GetReviewsCatetoriesQueryResponse, GetReviewsCatetoriesQueryVariables>(
		GetReviewsCatetoriesDocument,
		baseOptions,
	);
}
export type GetReviewsCatetoriesQueryHookResult = ReturnType<typeof useGetReviewsCatetoriesQuery>;
export type GetReviewsCatetoriesLazyQueryHookResult = ReturnType<typeof useGetReviewsCatetoriesLazyQuery>;
export type GetReviewsCatetoriesQueryResult = ApolloReactCommon.QueryResult<
	GetReviewsCatetoriesQueryResponse,
	GetReviewsCatetoriesQueryVariables
>;

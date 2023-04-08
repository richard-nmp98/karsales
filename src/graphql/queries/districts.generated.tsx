import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type DistrictsQueryVariables = Types.Exact<{
	input: Types.DistrictsPagingInput;
}>;

export type DistrictsQueryResponse = { __typename?: 'Query' } & {
	districts?: Types.Maybe<
		{ __typename?: 'DistrictsConnection' } & {
			items: Array<
				{ __typename?: 'DistrictsEntity' } & Pick<
					Types.DistrictsEntity,
					'id' | 'isActive' | 'name' | 'prefix' | 'provinceCode'
				>
			>;
			links: { __typename?: 'PaginationLinks' } & Pick<Types.PaginationLinks, 'first' | 'last' | 'next' | 'previous'>;
			meta: { __typename?: 'PaginationMeta' } & Pick<
				Types.PaginationMeta,
				'currentPage' | 'itemCount' | 'itemsPerPage' | 'next' | 'previous' | 'totalItems' | 'totalPages'
			>;
		}
	>;
};

export const DistrictsDocument = gql`
	query districts($input: DistrictsPagingInput!) {
		districts(input: $input) {
			items {
				id
				isActive
				name
				prefix
				provinceCode
			}
			links {
				first
				last
				next
				previous
			}
			meta {
				currentPage
				itemCount
				itemsPerPage
				next
				previous
				totalItems
				totalPages
			}
		}
	}
`;
export function useDistrictsQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<DistrictsQueryResponse, DistrictsQueryVariables>,
) {
	return ApolloReactHooks.useQuery<DistrictsQueryResponse, DistrictsQueryVariables>(DistrictsDocument, baseOptions);
}
export function useDistrictsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DistrictsQueryResponse, DistrictsQueryVariables>,
) {
	return ApolloReactHooks.useLazyQuery<DistrictsQueryResponse, DistrictsQueryVariables>(DistrictsDocument, baseOptions);
}
export type DistrictsQueryHookResult = ReturnType<typeof useDistrictsQuery>;
export type DistrictsLazyQueryHookResult = ReturnType<typeof useDistrictsLazyQuery>;
export type DistrictsQueryResult = ApolloReactCommon.QueryResult<DistrictsQueryResponse, DistrictsQueryVariables>;

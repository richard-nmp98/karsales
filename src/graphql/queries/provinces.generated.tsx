import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type ProvincesQueryVariables = Types.Exact<{
	countryCode: Types.Scalars['String'];
	input: Types.PagingCommonInput;
}>;

export type ProvincesQueryResponse = { __typename?: 'Query' } & {
	provinces?: Types.Maybe<
		{ __typename?: 'ProviceConnection' } & {
			items: Array<
				{ __typename?: 'ProviceEntity' } & Pick<
					Types.ProviceEntity,
					'code' | 'countryCode' | 'id' | 'isActive' | 'name' | 'slug'
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

export const ProvincesDocument = gql`
	query provinces($countryCode: String!, $input: PagingCommonInput!) {
		provinces(countryCode: $countryCode, input: $input) {
			items {
				code
				countryCode
				id
				isActive
				name
				slug
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
export function useProvincesQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<ProvincesQueryResponse, ProvincesQueryVariables>,
) {
	return ApolloReactHooks.useQuery<ProvincesQueryResponse, ProvincesQueryVariables>(ProvincesDocument, baseOptions);
}
export function useProvincesLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProvincesQueryResponse, ProvincesQueryVariables>,
) {
	return ApolloReactHooks.useLazyQuery<ProvincesQueryResponse, ProvincesQueryVariables>(ProvincesDocument, baseOptions);
}
export type ProvincesQueryHookResult = ReturnType<typeof useProvincesQuery>;
export type ProvincesLazyQueryHookResult = ReturnType<typeof useProvincesLazyQuery>;
export type ProvincesQueryResult = ApolloReactCommon.QueryResult<ProvincesQueryResponse, ProvincesQueryVariables>;

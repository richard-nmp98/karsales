import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type ListBannerPositionQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ListBannerPositionQueryResponse = { __typename?: 'Query' } & {
	listBannerPosition?: Types.Maybe<
		Array<
			{ __typename?: 'BannerPositionEntity' } & Pick<
				Types.BannerPositionEntity,
				'createdAt' | 'id' | 'name' | 'ratioHeight' | 'ratioWidth' | 'type' | 'updatedAt'
			>
		>
	>;
};

export const ListBannerPositionDocument = gql`
	query listBannerPosition {
		listBannerPosition {
			createdAt
			id
			name
			ratioHeight
			ratioWidth
			type
			updatedAt
		}
	}
`;
export function useListBannerPositionQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<ListBannerPositionQueryResponse, ListBannerPositionQueryVariables>,
) {
	return ApolloReactHooks.useQuery<ListBannerPositionQueryResponse, ListBannerPositionQueryVariables>(
		ListBannerPositionDocument,
		baseOptions,
	);
}
export function useListBannerPositionLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		ListBannerPositionQueryResponse,
		ListBannerPositionQueryVariables
	>,
) {
	return ApolloReactHooks.useLazyQuery<ListBannerPositionQueryResponse, ListBannerPositionQueryVariables>(
		ListBannerPositionDocument,
		baseOptions,
	);
}
export type ListBannerPositionQueryHookResult = ReturnType<typeof useListBannerPositionQuery>;
export type ListBannerPositionLazyQueryHookResult = ReturnType<typeof useListBannerPositionLazyQuery>;
export type ListBannerPositionQueryResult = ApolloReactCommon.QueryResult<
	ListBannerPositionQueryResponse,
	ListBannerPositionQueryVariables
>;

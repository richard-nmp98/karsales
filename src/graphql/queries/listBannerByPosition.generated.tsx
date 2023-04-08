import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type ListBannerByPositionQueryVariables = Types.Exact<{
	input: Types.BannerPositionInput;
}>;

export type ListBannerByPositionQueryResponse = { __typename?: 'Query' } & {
	listBannerByPosition?: Types.Maybe<
		Array<
			{ __typename?: 'BannerGroupEntity' } & Pick<
				Types.BannerGroupEntity,
				'createdAt' | 'id' | 'isActive' | 'linkBanner' | 'mediaIds' | 'name' | 'positionId' | 'updatedAt'
			> & {
					medias?: Types.Maybe<
						Array<
							{ __typename?: 'Media' } & Pick<
								Types.Media,
								| 'createdAt'
								| 'deletedAt'
								| 'fileName'
								| 'filePathLG'
								| 'filePathOriginal'
								| 'filePathSM'
								| 'id'
								| 'isDeleted'
								| 'mimeType'
								| 'updatedAt'
								| 'uploadBy'
							>
						>
					>;
				}
		>
	>;
};

export const ListBannerByPositionDocument = gql`
	query listBannerByPosition($input: BannerPositionInput!) {
		listBannerByPosition(input: $input) {
			createdAt
			id
			isActive
			linkBanner
			mediaIds
			medias {
				createdAt
				deletedAt
				fileName
				filePathLG
				filePathOriginal
				filePathSM
				id
				isDeleted
				mimeType
				updatedAt
				uploadBy
			}
			name
			positionId
			updatedAt
		}
	}
`;
export function useListBannerByPositionQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		ListBannerByPositionQueryResponse,
		ListBannerByPositionQueryVariables
	>,
) {
	return ApolloReactHooks.useQuery<ListBannerByPositionQueryResponse, ListBannerByPositionQueryVariables>(
		ListBannerByPositionDocument,
		baseOptions,
	);
}
export function useListBannerByPositionLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		ListBannerByPositionQueryResponse,
		ListBannerByPositionQueryVariables
	>,
) {
	return ApolloReactHooks.useLazyQuery<ListBannerByPositionQueryResponse, ListBannerByPositionQueryVariables>(
		ListBannerByPositionDocument,
		baseOptions,
	);
}
export type ListBannerByPositionQueryHookResult = ReturnType<typeof useListBannerByPositionQuery>;
export type ListBannerByPositionLazyQueryHookResult = ReturnType<typeof useListBannerByPositionLazyQuery>;
export type ListBannerByPositionQueryResult = ApolloReactCommon.QueryResult<
	ListBannerByPositionQueryResponse,
	ListBannerByPositionQueryVariables
>;

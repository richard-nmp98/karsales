import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetListReviewsQueryVariables = Types.Exact<{
	input: Types.PagingReviewsInput;
}>;

export type GetListReviewsQueryResponse = { __typename?: 'Query' } & {
	getListReviews?: Types.Maybe<
		{ __typename?: 'ReviewConnection' } & {
			items: Array<
				{ __typename?: 'ReviewsEntity' } & Pick<
					Types.ReviewsEntity,
					| 'category'
					| 'contentEn'
					| 'contentVi'
					| 'createdAt'
					| 'descriptionEn'
					| 'descriptionVi'
					| 'id'
					| 'isActive'
					| 'mediaIds'
					| 'nameEn'
					| 'nameVi'
					| 'slug'
					| 'thumnail'
					| 'updatedAt'
				> & {
						categories?: Types.Maybe<
							{ __typename?: 'ReviewCategoriesEntity' } & Pick<
								Types.ReviewCategoriesEntity,
								'createdAt' | 'id' | 'isActive' | 'nameEn' | 'nameVi' | 'slug' | 'total' | 'updatedAt'
							>
						>;
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
			>;
			links: { __typename?: 'PaginationLinks' } & Pick<Types.PaginationLinks, 'first' | 'last' | 'next' | 'previous'>;
			meta: { __typename?: 'PaginationMeta' } & Pick<
				Types.PaginationMeta,
				'currentPage' | 'itemCount' | 'itemsPerPage' | 'next' | 'previous' | 'totalItems' | 'totalPages'
			>;
		}
	>;
};

export const GetListReviewsDocument = gql`
	query getListReviews($input: PagingReviewsInput!) {
		getListReviews(input: $input) {
			items {
				categories {
					createdAt
					id
					isActive
					nameEn
					nameVi
					slug
					total
					updatedAt
				}
				category
				contentEn
				contentVi
				createdAt
				descriptionEn
				descriptionVi
				id
				isActive
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
				nameEn
				nameVi
				slug
				thumnail
				updatedAt
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
export function useGetListReviewsQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<GetListReviewsQueryResponse, GetListReviewsQueryVariables>,
) {
	return ApolloReactHooks.useQuery<GetListReviewsQueryResponse, GetListReviewsQueryVariables>(
		GetListReviewsDocument,
		baseOptions,
	);
}
export function useGetListReviewsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetListReviewsQueryResponse, GetListReviewsQueryVariables>,
) {
	return ApolloReactHooks.useLazyQuery<GetListReviewsQueryResponse, GetListReviewsQueryVariables>(
		GetListReviewsDocument,
		baseOptions,
	);
}
export type GetListReviewsQueryHookResult = ReturnType<typeof useGetListReviewsQuery>;
export type GetListReviewsLazyQueryHookResult = ReturnType<typeof useGetListReviewsLazyQuery>;
export type GetListReviewsQueryResult = ApolloReactCommon.QueryResult<
	GetListReviewsQueryResponse,
	GetListReviewsQueryVariables
>;

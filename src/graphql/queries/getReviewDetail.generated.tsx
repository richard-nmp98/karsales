import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetReviewDetailQueryVariables = Types.Exact<{
	slug: Types.Scalars['String'];
}>;

export type GetReviewDetailQueryResponse = { __typename?: 'Query' } & {
	getReviewDetail?: Types.Maybe<
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
};

export const GetReviewDetailDocument = gql`
	query getReviewDetail($slug: String!) {
		getReviewDetail(slug: $slug) {
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
	}
`;
export function useGetReviewDetailQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<GetReviewDetailQueryResponse, GetReviewDetailQueryVariables>,
) {
	return ApolloReactHooks.useQuery<GetReviewDetailQueryResponse, GetReviewDetailQueryVariables>(
		GetReviewDetailDocument,
		baseOptions,
	);
}
export function useGetReviewDetailLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetReviewDetailQueryResponse, GetReviewDetailQueryVariables>,
) {
	return ApolloReactHooks.useLazyQuery<GetReviewDetailQueryResponse, GetReviewDetailQueryVariables>(
		GetReviewDetailDocument,
		baseOptions,
	);
}
export type GetReviewDetailQueryHookResult = ReturnType<typeof useGetReviewDetailQuery>;
export type GetReviewDetailLazyQueryHookResult = ReturnType<typeof useGetReviewDetailLazyQuery>;
export type GetReviewDetailQueryResult = ApolloReactCommon.QueryResult<
	GetReviewDetailQueryResponse,
	GetReviewDetailQueryVariables
>;

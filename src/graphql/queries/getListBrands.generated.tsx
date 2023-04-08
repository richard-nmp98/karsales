import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetListBrandsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetListBrandsQueryResponse = { __typename?: 'Query' } & {
	getListBrands?: Types.Maybe<
		Array<
			{ __typename?: 'CarBrandEntity' } & Pick<
				Types.CarBrandEntity,
				'id' | 'image' | 'isActive' | 'isDisplayTopSearch' | 'mediaId' | 'name' | 'slug' | 'totalPost'
			> & {
					mediaDetail?: Types.Maybe<
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
					>;
				}
		>
	>;
};

export const GetListBrandsDocument = gql`
	query getListBrands {
		getListBrands {
			id
			image
			isActive
			isDisplayTopSearch
			mediaDetail {
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
			mediaId
			name
			slug
			totalPost
		}
	}
`;
export function useGetListBrandsQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<GetListBrandsQueryResponse, GetListBrandsQueryVariables>,
) {
	return ApolloReactHooks.useQuery<GetListBrandsQueryResponse, GetListBrandsQueryVariables>(
		GetListBrandsDocument,
		baseOptions,
	);
}
export function useGetListBrandsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetListBrandsQueryResponse, GetListBrandsQueryVariables>,
) {
	return ApolloReactHooks.useLazyQuery<GetListBrandsQueryResponse, GetListBrandsQueryVariables>(
		GetListBrandsDocument,
		baseOptions,
	);
}
export type GetListBrandsQueryHookResult = ReturnType<typeof useGetListBrandsQuery>;
export type GetListBrandsLazyQueryHookResult = ReturnType<typeof useGetListBrandsLazyQuery>;
export type GetListBrandsQueryResult = ApolloReactCommon.QueryResult<
	GetListBrandsQueryResponse,
	GetListBrandsQueryVariables
>;

import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetListModelsQueryVariables = Types.Exact<{
	input: Types.CarModelListInput;
}>;

export type GetListModelsQueryResponse = { __typename?: 'Query' } & {
	getListModels?: Types.Maybe<
		Array<
			{ __typename?: 'CarModelEntity' } & Pick<
				Types.CarModelEntity,
				'brand' | 'id' | 'image' | 'isActive' | 'name' | 'slug' | 'totalPost'
			> & {
					brandMeta?: Types.Maybe<
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
					>;
				}
		>
	>;
};

export const GetListModelsDocument = gql`
	query getListModels($input: CarModelListInput!) {
		getListModels(input: $input) {
			brand
			brandMeta {
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
			id
			image
			isActive
			name
			slug
			totalPost
		}
	}
`;
export function useGetListModelsQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<GetListModelsQueryResponse, GetListModelsQueryVariables>,
) {
	return ApolloReactHooks.useQuery<GetListModelsQueryResponse, GetListModelsQueryVariables>(
		GetListModelsDocument,
		baseOptions,
	);
}
export function useGetListModelsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetListModelsQueryResponse, GetListModelsQueryVariables>,
) {
	return ApolloReactHooks.useLazyQuery<GetListModelsQueryResponse, GetListModelsQueryVariables>(
		GetListModelsDocument,
		baseOptions,
	);
}
export type GetListModelsQueryHookResult = ReturnType<typeof useGetListModelsQuery>;
export type GetListModelsLazyQueryHookResult = ReturnType<typeof useGetListModelsLazyQuery>;
export type GetListModelsQueryResult = ApolloReactCommon.QueryResult<
	GetListModelsQueryResponse,
	GetListModelsQueryVariables
>;

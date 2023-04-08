import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetListVersionsQueryVariables = Types.Exact<{
	input: Types.CarVersionListInput;
}>;

export type GetListVersionsQueryResponse = { __typename?: 'Query' } & {
	getListVersions?: Types.Maybe<
		Array<
			{ __typename?: 'CarVersionEntity' } & Pick<
				Types.CarVersionEntity,
				| 'brand'
				| 'createdAt'
				| 'id'
				| 'image'
				| 'isActive'
				| 'mediaId'
				| 'model'
				| 'name'
				| 'numKilometerCarRun'
				| 'priceCarVersion'
				| 'slug'
				| 'typeCarVersion'
				| 'updatedAt'
				| 'yearManufacture'
			> & {
					brandDetail?: Types.Maybe<
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
					modelDetail?: Types.Maybe<
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
					>;
				}
		>
	>;
};

export const GetListVersionsDocument = gql`
	query getListVersions($input: CarVersionListInput!) {
		getListVersions(input: $input) {
			brand
			brandDetail {
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
			createdAt
			id
			image
			isActive
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
			model
			modelDetail {
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
			name
			numKilometerCarRun
			priceCarVersion
			slug
			typeCarVersion
			updatedAt
			yearManufacture
		}
	}
`;
export function useGetListVersionsQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<GetListVersionsQueryResponse, GetListVersionsQueryVariables>,
) {
	return ApolloReactHooks.useQuery<GetListVersionsQueryResponse, GetListVersionsQueryVariables>(
		GetListVersionsDocument,
		baseOptions,
	);
}
export function useGetListVersionsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetListVersionsQueryResponse, GetListVersionsQueryVariables>,
) {
	return ApolloReactHooks.useLazyQuery<GetListVersionsQueryResponse, GetListVersionsQueryVariables>(
		GetListVersionsDocument,
		baseOptions,
	);
}
export type GetListVersionsQueryHookResult = ReturnType<typeof useGetListVersionsQuery>;
export type GetListVersionsLazyQueryHookResult = ReturnType<typeof useGetListVersionsLazyQuery>;
export type GetListVersionsQueryResult = ApolloReactCommon.QueryResult<
	GetListVersionsQueryResponse,
	GetListVersionsQueryVariables
>;

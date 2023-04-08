import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type CenterDriverLisensePaginationQueryVariables = Types.Exact<{
	input: Types.ListCenterDriverLisenseInput;
}>;

export type CenterDriverLisensePaginationQueryResponse = { __typename?: 'Query' } & {
	centerDriverLisensePagination?: Types.Maybe<
		{ __typename?: 'CenterDriverLicenseConnection' } & {
			items: Array<
				{ __typename?: 'CenterDriverLicenseEntity' } & Pick<
					Types.CenterDriverLicenseEntity,
					| 'address'
					| 'averageRating'
					| 'createdAt'
					| 'description'
					| 'district'
					| 'email'
					| 'id'
					| 'isActive'
					| 'phone'
					| 'province'
					| 'slug'
					| 'title'
					| 'totalRating'
					| 'totalRatingScore'
					| 'updatedAt'
					| 'ward'
					| 'website'
				> & {
						districtDetail?: Types.Maybe<
							{ __typename?: 'DistrictsEntity' } & Pick<
								Types.DistrictsEntity,
								'id' | 'isActive' | 'name' | 'prefix' | 'provinceCode'
							>
						>;
						medias?: Types.Maybe<
							Array<
								{ __typename?: 'CenterDriverLicenseMediasEntity' } & Pick<
									Types.CenterDriverLicenseMediasEntity,
									'centerId' | 'createdAt' | 'id' | 'mediaId' | 'updatedAt'
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
						provinceDetail?: Types.Maybe<
							{ __typename?: 'ProviceEntity' } & Pick<
								Types.ProviceEntity,
								'code' | 'countryCode' | 'id' | 'isActive' | 'name' | 'slug'
							>
						>;
						wardDetail?: Types.Maybe<
							{ __typename?: 'WardsEntity' } & Pick<
								Types.WardsEntity,
								'districtCode' | 'id' | 'isActive' | 'name' | 'prefix' | 'provinceCode'
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

export const CenterDriverLisensePaginationDocument = gql`
	query centerDriverLisensePagination($input: ListCenterDriverLisenseInput!) {
		centerDriverLisensePagination(input: $input) {
			items {
				address
				averageRating
				createdAt
				description
				district
				districtDetail {
					id
					isActive
					name
					prefix
					provinceCode
				}
				email
				id
				isActive
				medias {
					centerId
					createdAt
					id
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
					updatedAt
				}
				phone
				province
				provinceDetail {
					code
					countryCode
					id
					isActive
					name
					slug
				}
				slug
				title
				totalRating
				totalRatingScore
				updatedAt
				ward
				wardDetail {
					districtCode
					id
					isActive
					name
					prefix
					provinceCode
				}
				website
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
export function useCenterDriverLisensePaginationQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		CenterDriverLisensePaginationQueryResponse,
		CenterDriverLisensePaginationQueryVariables
	>,
) {
	return ApolloReactHooks.useQuery<
		CenterDriverLisensePaginationQueryResponse,
		CenterDriverLisensePaginationQueryVariables
	>(CenterDriverLisensePaginationDocument, baseOptions);
}
export function useCenterDriverLisensePaginationLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		CenterDriverLisensePaginationQueryResponse,
		CenterDriverLisensePaginationQueryVariables
	>,
) {
	return ApolloReactHooks.useLazyQuery<
		CenterDriverLisensePaginationQueryResponse,
		CenterDriverLisensePaginationQueryVariables
	>(CenterDriverLisensePaginationDocument, baseOptions);
}
export type CenterDriverLisensePaginationQueryHookResult = ReturnType<typeof useCenterDriverLisensePaginationQuery>;
export type CenterDriverLisensePaginationLazyQueryHookResult = ReturnType<
	typeof useCenterDriverLisensePaginationLazyQuery
>;
export type CenterDriverLisensePaginationQueryResult = ApolloReactCommon.QueryResult<
	CenterDriverLisensePaginationQueryResponse,
	CenterDriverLisensePaginationQueryVariables
>;

import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetListPostActiveQueryVariables = Types.Exact<{
	input: Types.ListPostInput;
}>;

export type GetListPostActiveQueryResponse = { __typename?: 'Query' } & {
	getListPostActive?: Types.Maybe<
		{ __typename?: 'PostConnection' } & {
			items: Array<
				{ __typename?: 'PostEntity' } & Pick<
					Types.PostEntity,
					| 'bannerPositionId'
					| 'cityId'
					| 'condition'
					| 'countryCode'
					| 'createdAt'
					| 'currency'
					| 'description'
					| 'door'
					| 'hiddenPrice'
					| 'id'
					| 'includeTax'
					| 'inspection'
					| 'isReport'
					| 'isSaved'
					| 'odometer'
					| 'offer'
					| 'planExpried'
					| 'planId'
					| 'plateHidden'
					| 'price'
					| 'regExprice'
					| 'regPlate'
					| 'remoteAssessment'
					| 'roadworthyCeftificate'
					| 'seat'
					| 'showHiddenPrice'
					| 'slug'
					| 'status'
					| 'stepDraft'
					| 'title'
					| 'totalView'
					| 'transmission'
					| 'updatedAt'
					| 'userId'
					| 'videoUrl'
					| 'year'
				> & {
						bannerGroup?: Types.Maybe<
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
						>;
						bodyType?: Types.Maybe<
							{ __typename?: 'CarBodyTypeEntity' } & Pick<
								Types.CarBodyTypeEntity,
								'createdAt' | 'id' | 'isActive' | 'name' | 'slug'
							>
						>;
						brand?: Types.Maybe<
							{ __typename?: 'CarBrandEntity' } & Pick<
								Types.CarBrandEntity,
								'id' | 'image' | 'isActive' | 'isDisplayTopSearch' | 'mediaId' | 'name' | 'slug'
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
						city?: Types.Maybe<
							{ __typename?: 'ProviceEntity' } & Pick<
								Types.ProviceEntity,
								'code' | 'countryCode' | 'id' | 'isActive' | 'name' | 'slug'
							>
						>;
						colour?: Types.Maybe<
							{ __typename?: 'CarColourEntity' } & Pick<
								Types.CarColourEntity,
								'createdAt' | 'id' | 'isActive' | 'name' | 'slug'
							>
						>;
						driverType?: Types.Maybe<
							{ __typename?: 'CarDriverTypeEntity' } & Pick<
								Types.CarDriverTypeEntity,
								'createdAt' | 'id' | 'isActive' | 'nameEn' | 'nameVi' | 'slug'
							>
						>;
						fuelEconomy?: Types.Maybe<
							{ __typename?: 'CarFuelEconomyEntity' } & Pick<
								Types.CarFuelEconomyEntity,
								'createdAt' | 'id' | 'isActive' | 'isLess' | 'kilometer' | 'liter' | 'nameEn' | 'nameVi'
							>
						>;
						fuelType?: Types.Maybe<
							{ __typename?: 'CarFuelTypeEntity' } & Pick<
								Types.CarFuelTypeEntity,
								'createdAt' | 'id' | 'isActive' | 'name' | 'slug'
							>
						>;
						hidePlateMedias?: Types.Maybe<
							Array<
								{ __typename?: 'PostMediasEntity' } & Pick<
									Types.PostMediasEntity,
									'createdAt' | 'id' | 'isFeatured' | 'isHidePlate' | 'mediaId' | 'postId' | 'updatedAt'
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
						medias?: Types.Maybe<
							Array<
								{ __typename?: 'PostMediasEntity' } & Pick<
									Types.PostMediasEntity,
									'createdAt' | 'id' | 'isFeatured' | 'isHidePlate' | 'mediaId' | 'postId' | 'updatedAt'
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
						model?: Types.Maybe<
							{ __typename?: 'CarModelEntity' } & Pick<
								Types.CarModelEntity,
								'brand' | 'id' | 'image' | 'isActive' | 'name' | 'slug'
							> & {
									brandMeta?: Types.Maybe<
										{ __typename?: 'CarBrandEntity' } & Pick<
											Types.CarBrandEntity,
											'id' | 'image' | 'isActive' | 'isDisplayTopSearch' | 'mediaId' | 'name' | 'slug'
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
						statusReasonRejected?: Types.Maybe<
							{ __typename?: 'PostStatusLogsEntity' } & Pick<
								Types.PostStatusLogsEntity,
								| 'createdAt'
								| 'id'
								| 'note'
								| 'planId'
								| 'postId'
								| 'remainingPlanDay'
								| 'remainingPlanMinutes'
								| 'remainingPlanUnit'
								| 'status'
								| 'updatedAt'
								| 'updatedById'
							>
						>;
						user?: Types.Maybe<
							{ __typename?: 'UserEntity' } & Pick<
								Types.UserEntity,
								| 'avatar'
								| 'createdAt'
								| 'dob'
								| 'email'
								| 'firstName'
								| 'hasPassword'
								| 'id'
								| 'isActive'
								| 'isActiveEmail'
								| 'isActivePhone'
								| 'isWithdraw'
								| 'lastLoginAt'
								| 'lastName'
								| 'phone'
								| 'prefixPhone'
								| 'referralCode'
								| 'storeName'
								| 'updatedAt'
								| 'username'
								| 'withdrawReason'
							> & {
									avatarMedia?: Types.Maybe<
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
									metadata?: Types.Maybe<
										{ __typename?: 'UserMetadata' } & Pick<
											Types.UserMetadata,
											| 'avgRating'
											| 'cityId'
											| 'countryId'
											| 'enableEmailNotification'
											| 'enableNotification'
											| 'enablePromotionsEmailNotification'
											| 'enablePromotionsNotification'
											| 'enableSMS'
											| 'id'
											| 'language'
											| 'totalRating'
											| 'userId'
										> & {
												country?: Types.Maybe<
													{ __typename?: 'CountriesEntity' } & Pick<Types.CountriesEntity, 'code' | 'id' | 'name'>
												>;
												provice?: Types.Maybe<
													{ __typename?: 'ProviceEntity' } & Pick<
														Types.ProviceEntity,
														'code' | 'countryCode' | 'id' | 'isActive' | 'name' | 'slug'
													>
												>;
											}
									>;
									userBalance?: Types.Maybe<
										{ __typename?: 'UserBalanceEntity' } & Pick<
											Types.UserBalanceEntity,
											'amount' | 'id' | 'promotion' | 'userId'
										>
									>;
								}
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

export const GetListPostActiveDocument = gql`
	query getListPostActive($input: ListPostInput!) {
		getListPostActive(input: $input) {
			items {
				bannerGroup {
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
				bannerPositionId
				bodyType {
					createdAt
					id
					isActive
					name
					slug
				}
				brand {
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
				}
				city {
					code
					countryCode
					id
					isActive
					name
					slug
				}
				cityId
				colour {
					createdAt
					id
					isActive
					name
					slug
				}
				condition
				countryCode
				createdAt
				currency
				description
				door
				driverType {
					createdAt
					id
					isActive
					nameEn
					nameVi
					slug
				}
				fuelEconomy {
					createdAt
					id
					isActive
					isLess
					kilometer
					liter
					nameEn
					nameVi
				}
				fuelType {
					createdAt
					id
					isActive
					name
					slug
				}
				hiddenPrice
				hidePlateMedias {
					createdAt
					id
					isFeatured
					isHidePlate
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
					postId
					updatedAt
				}
				id
				includeTax
				inspection
				isReport
				isSaved
				medias {
					createdAt
					id
					isFeatured
					isHidePlate
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
					postId
					updatedAt
				}
				model {
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
					}
					id
					image
					isActive
					name
					slug
				}
				odometer
				offer
				planExpried
				planId
				plateHidden
				price
				regExprice
				regPlate
				remoteAssessment
				roadworthyCeftificate
				seat
				showHiddenPrice
				slug
				status
				statusReasonRejected {
					createdAt
					id
					note
					planId
					postId
					remainingPlanDay
					remainingPlanMinutes
					remainingPlanUnit
					status
					updatedAt
					updatedById
				}
				stepDraft
				title
				totalView
				transmission
				updatedAt
				user {
					avatar
					avatarMedia {
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
					createdAt
					dob
					email
					firstName
					hasPassword
					id
					isActive
					isActiveEmail
					isActivePhone
					isWithdraw
					lastLoginAt
					lastName
					metadata {
						avgRating
						cityId
						country {
							code
							id
							name
						}
						countryId
						enableEmailNotification
						enableNotification
						enablePromotionsEmailNotification
						enablePromotionsNotification
						enableSMS
						id
						language
						provice {
							code
							countryCode
							id
							isActive
							name
							slug
						}
						totalRating
						userId
					}
					phone
					prefixPhone
					referralCode
					storeName
					updatedAt
					userBalance {
						amount
						id
						promotion
						userId
					}
					username
					withdrawReason
				}
				userId
				videoUrl
				year
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
export function useGetListPostActiveQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<GetListPostActiveQueryResponse, GetListPostActiveQueryVariables>,
) {
	return ApolloReactHooks.useQuery<GetListPostActiveQueryResponse, GetListPostActiveQueryVariables>(
		GetListPostActiveDocument,
		baseOptions,
	);
}
export function useGetListPostActiveLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetListPostActiveQueryResponse, GetListPostActiveQueryVariables>,
) {
	return ApolloReactHooks.useLazyQuery<GetListPostActiveQueryResponse, GetListPostActiveQueryVariables>(
		GetListPostActiveDocument,
		baseOptions,
	);
}
export type GetListPostActiveQueryHookResult = ReturnType<typeof useGetListPostActiveQuery>;
export type GetListPostActiveLazyQueryHookResult = ReturnType<typeof useGetListPostActiveLazyQuery>;
export type GetListPostActiveQueryResult = ApolloReactCommon.QueryResult<
	GetListPostActiveQueryResponse,
	GetListPostActiveQueryVariables
>;

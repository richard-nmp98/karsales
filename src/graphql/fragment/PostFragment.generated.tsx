import * as Types from '../type.interface';

import gql from 'graphql-tag';
export type PostFragmentFragment = { __typename?: 'PostEntity' } & Pick<
	Types.PostEntity,
	| 'id'
	| 'createdAt'
	| 'updatedAt'
	| 'title'
	| 'plateHidden'
	| 'videoUrl'
	| 'condition'
	| 'price'
	| 'currency'
	| 'includeTax'
	| 'countryCode'
	| 'userId'
	| 'cityId'
	| 'odometer'
	| 'stepDraft'
	| 'year'
	| 'regPlate'
	| 'regExprice'
	| 'transmission'
	| 'status'
	| 'description'
	| 'offer'
	| 'inspection'
	| 'planExpried'
	| 'remoteAssessment'
	| 'roadworthyCeftificate'
	| 'planId'
	| 'seat'
	| 'door'
> & {
		medias?: Types.Maybe<
			Array<
				{ __typename?: 'PostMediasEntity' } & Pick<
					Types.PostMediasEntity,
					'id' | 'postId' | 'mediaId' | 'isFeatured' | 'createdAt' | 'updatedAt'
				> & {
						mediaDetail?: Types.Maybe<
							{ __typename?: 'Media' } & Pick<
								Types.Media,
								| 'id'
								| 'fileName'
								| 'filePathSM'
								| 'filePathLG'
								| 'filePathOriginal'
								| 'mimeType'
								| 'uploadBy'
								| 'isDeleted'
								| 'deletedAt'
								| 'createdAt'
								| 'updatedAt'
							>
						>;
					}
			>
		>;
		brand?: Types.Maybe<
			{ __typename?: 'CarBrandEntity' } & Pick<Types.CarBrandEntity, 'id' | 'name' | 'slug' | 'image' | 'isActive'>
		>;
		model?: Types.Maybe<
			{ __typename?: 'CarModelEntity' } & Pick<
				Types.CarModelEntity,
				'id' | 'name' | 'image' | 'brand' | 'slug' | 'isActive'
			> & {
					brandMeta?: Types.Maybe<
						{ __typename?: 'CarBrandEntity' } & Pick<
							Types.CarBrandEntity,
							'id' | 'name' | 'slug' | 'image' | 'isActive'
						>
					>;
				}
		>;
		bodyType?: Types.Maybe<
			{ __typename?: 'CarBodyTypeEntity' } & Pick<
				Types.CarBodyTypeEntity,
				'id' | 'name' | 'slug' | 'isActive' | 'createdAt'
			>
		>;
		colour?: Types.Maybe<
			{ __typename?: 'CarColourEntity' } & Pick<
				Types.CarColourEntity,
				'id' | 'name' | 'slug' | 'isActive' | 'createdAt'
			>
		>;
		fuelType?: Types.Maybe<
			{ __typename?: 'CarFuelTypeEntity' } & Pick<
				Types.CarFuelTypeEntity,
				'id' | 'name' | 'slug' | 'isActive' | 'createdAt'
			>
		>;
		fuelEconomy?: Types.Maybe<
			{ __typename?: 'CarFuelEconomyEntity' } & Pick<
				Types.CarFuelEconomyEntity,
				'id' | 'nameVi' | 'nameEn' | 'liter' | 'kilometer' | 'isLess' | 'isActive' | 'createdAt'
			>
		>;
		driverType?: Types.Maybe<
			{ __typename?: 'CarDriverTypeEntity' } & Pick<
				Types.CarDriverTypeEntity,
				'id' | 'nameEn' | 'nameVi' | 'slug' | 'isActive' | 'createdAt'
			>
		>;
		city?: Types.Maybe<{ __typename?: 'ProviceEntity' } & Pick<Types.ProviceEntity, 'id' | 'name' | 'countryCode'>>;
		user?: Types.Maybe<
			{ __typename?: 'UserEntity' } & Pick<
				Types.UserEntity,
				| 'id'
				| 'email'
				| 'username'
				| 'phone'
				| 'prefixPhone'
				| 'firstName'
				| 'lastName'
				| 'avatar'
				| 'dob'
				| 'isActive'
				| 'createdAt'
				| 'updatedAt'
				| 'isActiveEmail'
				| 'isActivePhone'
				| 'referralCode'
			> & {
					avatarMedia?: Types.Maybe<
						{ __typename?: 'Media' } & Pick<
							Types.Media,
							| 'id'
							| 'fileName'
							| 'filePathSM'
							| 'filePathLG'
							| 'filePathOriginal'
							| 'mimeType'
							| 'uploadBy'
							| 'isDeleted'
							| 'deletedAt'
							| 'createdAt'
							| 'updatedAt'
						>
					>;
				}
		>;
	};

export const PostFragmentFragmentDoc = gql`
	fragment PostFragment on PostEntity {
		id
		createdAt
		updatedAt
		title
		plateHidden
		videoUrl
		condition
		price
		currency
		includeTax
		countryCode
		userId
		cityId
		odometer
		stepDraft
		year
		regPlate
		regExprice
		transmission
		status
		description
		offer
		inspection
		planExpried
		remoteAssessment
		roadworthyCeftificate
		planId
		medias {
			id
			postId
			mediaId
			isFeatured
			createdAt
			updatedAt
			mediaDetail {
				id
				fileName
				filePathSM
				filePathLG
				filePathOriginal
				mimeType
				uploadBy
				isDeleted
				deletedAt
				createdAt
				updatedAt
			}
		}
		brand {
			id
			name
			slug
			image
			isActive
		}
		model {
			id
			name
			image
			brand
			slug
			isActive
			brandMeta {
				id
				name
				slug
				image
				isActive
			}
		}
		bodyType {
			id
			name
			slug
			isActive
			createdAt
		}
		colour {
			id
			name
			slug
			isActive
			createdAt
		}
		fuelType {
			id
			name
			slug
			isActive
			createdAt
		}
		fuelEconomy {
			id
			nameVi
			nameEn
			liter
			kilometer
			isLess
			isActive
			createdAt
		}
		driverType {
			id
			nameEn
			nameVi
			slug
			isActive
			createdAt
		}
		seat
		door
		city {
			id
			name
			countryCode
		}
		user {
			id
			email
			username
			phone
			prefixPhone
			firstName
			lastName
			avatar
			dob
			isActive
			createdAt
			updatedAt
			isActiveEmail
			isActivePhone
			referralCode
			avatarMedia {
				id
				fileName
				filePathSM
				filePathLG
				filePathOriginal
				mimeType
				uploadBy
				isDeleted
				deletedAt
				createdAt
				updatedAt
			}
		}
	}
`;

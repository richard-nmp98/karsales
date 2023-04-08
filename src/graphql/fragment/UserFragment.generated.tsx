import * as Types from '../type.interface';

import gql from 'graphql-tag';
export type UserFragmentFragment = { __typename?: 'UserEntity' } & Pick<
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
	| 'hasPassword'
> & {
		metadata?: Types.Maybe<
			{ __typename?: 'UserMetadata' } & Pick<
				Types.UserMetadata,
				| 'id'
				| 'countryId'
				| 'cityId'
				| 'userId'
				| 'enableNotification'
				| 'enableEmailNotification'
				| 'enableSMS'
				| 'enablePromotionsNotification'
				| 'enablePromotionsEmailNotification'
			> & {
					provice?: Types.Maybe<
						{ __typename?: 'ProviceEntity' } & Pick<Types.ProviceEntity, 'id' | 'name' | 'countryCode'>
					>;
					country?: Types.Maybe<
						{ __typename?: 'CountriesEntity' } & Pick<Types.CountriesEntity, 'id' | 'name' | 'code'>
					>;
				}
		>;
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
	};

export const UserFragmentFragmentDoc = gql`
	fragment UserFragment on UserEntity {
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
		metadata {
			id
			countryId
			cityId
			userId
			enableNotification
			enableEmailNotification
			enableSMS
			enablePromotionsNotification
			enablePromotionsEmailNotification
			provice {
				id
				name
				countryCode
			}
			country {
				id
				name
				code
			}
		}
		hasPassword
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
`;

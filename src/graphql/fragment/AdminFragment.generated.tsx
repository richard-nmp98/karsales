import * as Types from '../type.interface';

import gql from 'graphql-tag';
export type AdminUserFragmentFragment = { __typename?: 'AdminUser' } & Pick<
	Types.AdminUser,
	'id' | 'firstName' | 'email' | 'lastName' | 'isActive' | 'fullName'
>;

export const AdminUserFragmentFragmentDoc = gql`
	fragment AdminUserFragment on AdminUser {
		id
		firstName
		email
		lastName
		isActive
		fullName
	}
`;

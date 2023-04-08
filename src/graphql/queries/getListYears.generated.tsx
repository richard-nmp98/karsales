import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetListYearsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetListYearsQueryResponse = { __typename?: 'Query' } & {
	getListYears?: Types.Maybe<
		Array<{ __typename?: 'CarYearEntity' } & Pick<Types.CarYearEntity, 'id' | 'name' | 'isActive'>>
	>;
};

export const GetListYearsDocument = gql`
	query getListYears {
		getListYears {
			id
			name
			isActive
		}
	}
`;
export function useGetListYearsQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<GetListYearsQueryResponse, GetListYearsQueryVariables>,
) {
	return ApolloReactHooks.useQuery<GetListYearsQueryResponse, GetListYearsQueryVariables>(
		GetListYearsDocument,
		baseOptions,
	);
}
export function useGetListYearsLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetListYearsQueryResponse, GetListYearsQueryVariables>,
) {
	return ApolloReactHooks.useLazyQuery<GetListYearsQueryResponse, GetListYearsQueryVariables>(
		GetListYearsDocument,
		baseOptions,
	);
}
export type GetListYearsQueryHookResult = ReturnType<typeof useGetListYearsQuery>;
export type GetListYearsLazyQueryHookResult = ReturnType<typeof useGetListYearsLazyQuery>;
export type GetListYearsQueryResult = ApolloReactCommon.QueryResult<
	GetListYearsQueryResponse,
	GetListYearsQueryVariables
>;

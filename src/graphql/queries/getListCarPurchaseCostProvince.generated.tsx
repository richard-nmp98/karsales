import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetListCarPurchaseCostProvinceQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetListCarPurchaseCostProvinceQueryResponse = { __typename?: 'Query' } & {
	getListCarPurchaseCostProvince?: Types.Maybe<
		Array<
			{ __typename?: 'CarPurchaseCostProvinceEntity' } & Pick<
				Types.CarPurchaseCostProvinceEntity,
				| 'bodyInsuranceOneYear'
				| 'civilInsurance'
				| 'createdAt'
				| 'id'
				| 'isActive'
				| 'licensePlateFee'
				| 'otherCost'
				| 'provinceId'
				| 'registrationFeeNewCar'
				| 'registrationFeeOldCar'
				| 'registry'
				| 'roadMaintenanceFee'
				| 'updatedAt'
			> & {
					proviceDetail?: Types.Maybe<
						{ __typename?: 'ProviceEntity' } & Pick<
							Types.ProviceEntity,
							'code' | 'countryCode' | 'id' | 'isActive' | 'name' | 'slug'
						>
					>;
				}
		>
	>;
};

export const GetListCarPurchaseCostProvinceDocument = gql`
	query getListCarPurchaseCostProvince {
		getListCarPurchaseCostProvince {
			bodyInsuranceOneYear
			civilInsurance
			createdAt
			id
			isActive
			licensePlateFee
			otherCost
			proviceDetail {
				code
				countryCode
				id
				isActive
				name
				slug
			}
			provinceId
			registrationFeeNewCar
			registrationFeeOldCar
			registry
			roadMaintenanceFee
			updatedAt
		}
	}
`;
export function useGetListCarPurchaseCostProvinceQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		GetListCarPurchaseCostProvinceQueryResponse,
		GetListCarPurchaseCostProvinceQueryVariables
	>,
) {
	return ApolloReactHooks.useQuery<
		GetListCarPurchaseCostProvinceQueryResponse,
		GetListCarPurchaseCostProvinceQueryVariables
	>(GetListCarPurchaseCostProvinceDocument, baseOptions);
}
export function useGetListCarPurchaseCostProvinceLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetListCarPurchaseCostProvinceQueryResponse,
		GetListCarPurchaseCostProvinceQueryVariables
	>,
) {
	return ApolloReactHooks.useLazyQuery<
		GetListCarPurchaseCostProvinceQueryResponse,
		GetListCarPurchaseCostProvinceQueryVariables
	>(GetListCarPurchaseCostProvinceDocument, baseOptions);
}
export type GetListCarPurchaseCostProvinceQueryHookResult = ReturnType<typeof useGetListCarPurchaseCostProvinceQuery>;
export type GetListCarPurchaseCostProvinceLazyQueryHookResult = ReturnType<
	typeof useGetListCarPurchaseCostProvinceLazyQuery
>;
export type GetListCarPurchaseCostProvinceQueryResult = ApolloReactCommon.QueryResult<
	GetListCarPurchaseCostProvinceQueryResponse,
	GetListCarPurchaseCostProvinceQueryVariables
>;

import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetCarPurchaseCostProvinceByIdQueryVariables = Types.Exact<{
	provinceId: Types.Scalars['String'];
}>;

export type GetCarPurchaseCostProvinceByIdQueryResponse = { __typename?: 'Query' } & {
	getCarPurchaseCostProvinceById?: Types.Maybe<
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

export const GetCarPurchaseCostProvinceByIdDocument = gql`
	query getCarPurchaseCostProvinceById($provinceId: String!) {
		getCarPurchaseCostProvinceById(provinceId: $provinceId) {
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
export function useGetCarPurchaseCostProvinceByIdQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		GetCarPurchaseCostProvinceByIdQueryResponse,
		GetCarPurchaseCostProvinceByIdQueryVariables
	>,
) {
	return ApolloReactHooks.useQuery<
		GetCarPurchaseCostProvinceByIdQueryResponse,
		GetCarPurchaseCostProvinceByIdQueryVariables
	>(GetCarPurchaseCostProvinceByIdDocument, baseOptions);
}
export function useGetCarPurchaseCostProvinceByIdLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetCarPurchaseCostProvinceByIdQueryResponse,
		GetCarPurchaseCostProvinceByIdQueryVariables
	>,
) {
	return ApolloReactHooks.useLazyQuery<
		GetCarPurchaseCostProvinceByIdQueryResponse,
		GetCarPurchaseCostProvinceByIdQueryVariables
	>(GetCarPurchaseCostProvinceByIdDocument, baseOptions);
}
export type GetCarPurchaseCostProvinceByIdQueryHookResult = ReturnType<typeof useGetCarPurchaseCostProvinceByIdQuery>;
export type GetCarPurchaseCostProvinceByIdLazyQueryHookResult = ReturnType<
	typeof useGetCarPurchaseCostProvinceByIdLazyQuery
>;
export type GetCarPurchaseCostProvinceByIdQueryResult = ApolloReactCommon.QueryResult<
	GetCarPurchaseCostProvinceByIdQueryResponse,
	GetCarPurchaseCostProvinceByIdQueryVariables
>;

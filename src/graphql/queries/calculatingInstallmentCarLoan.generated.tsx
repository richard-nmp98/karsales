import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type CalculatingInstallmentCarLoanQueryVariables = Types.Exact<{
	input: Types.CalculatingInstallmentCarLoanInput;
}>;

export type CalculatingInstallmentCarLoanQueryResponse = { __typename?: 'Query' } & {
	calculatingInstallmentCarLoan?: Types.Maybe<
		{ __typename?: 'CarPurchaseCostEstimateMaster' } & Pick<
			Types.CarPurchaseCostEstimateMaster,
			| 'bodyInsuranceOneYear'
			| 'civilInsurance'
			| 'interestRate'
			| 'licensePlateFee'
			| 'loanTime'
			| 'prepaidCarAmountRate'
			| 'priceCarVersion'
			| 'pricePrepaidCar'
			| 'registrationFee'
			| 'registry'
			| 'roadMaintenanceFee'
			| 'rollingPrice'
			| 'totalAmountRemainPrincipalAndInterest'
			| 'totalCost'
			| 'totalEstimatedCarPurchaseCost'
			| 'totalInterest'
			| 'totalLoanAmount'
		> & {
				listCarPurchaseCostEstimaterDetails: Array<
					{ __typename?: 'CarPurchaseCostEstimaterDetails' } & Pick<
						Types.CarPurchaseCostEstimaterDetails,
						'interestAmount' | 'principalAmount' | 'remainAmount' | 'session' | 'totalAmount'
					>
				>;
			}
	>;
};

export const CalculatingInstallmentCarLoanDocument = gql`
	query calculatingInstallmentCarLoan($input: CalculatingInstallmentCarLoanInput!) {
		calculatingInstallmentCarLoan(input: $input) {
			bodyInsuranceOneYear
			civilInsurance
			interestRate
			licensePlateFee
			listCarPurchaseCostEstimaterDetails {
				interestAmount
				principalAmount
				remainAmount
				session
				totalAmount
			}
			loanTime
			prepaidCarAmountRate
			priceCarVersion
			pricePrepaidCar
			registrationFee
			registry
			roadMaintenanceFee
			rollingPrice
			totalAmountRemainPrincipalAndInterest
			totalCost
			totalEstimatedCarPurchaseCost
			totalInterest
			totalLoanAmount
		}
	}
`;
export function useCalculatingInstallmentCarLoanQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		CalculatingInstallmentCarLoanQueryResponse,
		CalculatingInstallmentCarLoanQueryVariables
	>,
) {
	return ApolloReactHooks.useQuery<
		CalculatingInstallmentCarLoanQueryResponse,
		CalculatingInstallmentCarLoanQueryVariables
	>(CalculatingInstallmentCarLoanDocument, baseOptions);
}
export function useCalculatingInstallmentCarLoanLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		CalculatingInstallmentCarLoanQueryResponse,
		CalculatingInstallmentCarLoanQueryVariables
	>,
) {
	return ApolloReactHooks.useLazyQuery<
		CalculatingInstallmentCarLoanQueryResponse,
		CalculatingInstallmentCarLoanQueryVariables
	>(CalculatingInstallmentCarLoanDocument, baseOptions);
}
export type CalculatingInstallmentCarLoanQueryHookResult = ReturnType<typeof useCalculatingInstallmentCarLoanQuery>;
export type CalculatingInstallmentCarLoanLazyQueryHookResult = ReturnType<
	typeof useCalculatingInstallmentCarLoanLazyQuery
>;
export type CalculatingInstallmentCarLoanQueryResult = ApolloReactCommon.QueryResult<
	CalculatingInstallmentCarLoanQueryResponse,
	CalculatingInstallmentCarLoanQueryVariables
>;

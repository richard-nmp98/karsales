import * as Types from '../type.interface';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type GetListQuestionSimulationByTypeQueryVariables = Types.Exact<{
	input: Types.QuestionSimulationGroupByTypeInput;
}>;

export type GetListQuestionSimulationByTypeQueryResponse = { __typename?: 'Query' } & {
	getListQuestionSimulationByType?: Types.Maybe<
		Array<
			{ __typename?: 'QuestionSimulationEntity' } & Pick<
				Types.QuestionSimulationEntity,
				'content' | 'explainAnswer' | 'id' | 'images' | 'no' | 'pointLastOfUser' | 'type' | 'videos'
			> & {
					answers?: Types.Maybe<
						Array<
							{ __typename?: 'QuestionAnswerSimulationEntity' } & Pick<
								Types.QuestionAnswerSimulationEntity,
								| 'id'
								| 'minuteFrom'
								| 'minuteTo'
								| 'no'
								| 'parentNo'
								| 'point'
								| 'questionId'
								| 'secondFrom'
								| 'secondTo'
							>
						>
					>;
					imageDetail?: Types.Maybe<
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
};

export const GetListQuestionSimulationByTypeDocument = gql`
	query getListQuestionSimulationByType($input: QuestionSimulationGroupByTypeInput!) {
		getListQuestionSimulationByType(input: $input) {
			answers {
				id
				minuteFrom
				minuteTo
				no
				parentNo
				point
				questionId
				secondFrom
				secondTo
			}
			content
			explainAnswer
			id
			imageDetail {
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
			images
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
			no
			pointLastOfUser
			type
			videos
		}
	}
`;
export function useGetListQuestionSimulationByTypeQuery(
	baseOptions?: ApolloReactHooks.QueryHookOptions<
		GetListQuestionSimulationByTypeQueryResponse,
		GetListQuestionSimulationByTypeQueryVariables
	>,
) {
	return ApolloReactHooks.useQuery<
		GetListQuestionSimulationByTypeQueryResponse,
		GetListQuestionSimulationByTypeQueryVariables
	>(GetListQuestionSimulationByTypeDocument, baseOptions);
}
export function useGetListQuestionSimulationByTypeLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
		GetListQuestionSimulationByTypeQueryResponse,
		GetListQuestionSimulationByTypeQueryVariables
	>,
) {
	return ApolloReactHooks.useLazyQuery<
		GetListQuestionSimulationByTypeQueryResponse,
		GetListQuestionSimulationByTypeQueryVariables
	>(GetListQuestionSimulationByTypeDocument, baseOptions);
}
export type GetListQuestionSimulationByTypeQueryHookResult = ReturnType<typeof useGetListQuestionSimulationByTypeQuery>;
export type GetListQuestionSimulationByTypeLazyQueryHookResult = ReturnType<
	typeof useGetListQuestionSimulationByTypeLazyQuery
>;
export type GetListQuestionSimulationByTypeQueryResult = ApolloReactCommon.QueryResult<
	GetListQuestionSimulationByTypeQueryResponse,
	GetListQuestionSimulationByTypeQueryVariables
>;

import $api from '../../../app/api/interceptor'
import { IVocabulary } from '../../../types/vocabulary'

export interface GetVocabularyByUserIdParams {
	userId: number
}

export type GetVocabularyByUserIdConfig =
	AxiosRequestConfig<GetVocabularyByUserIdParams>

export const getVocabularyByUserId = ({
	params,
	config,
}: GetVocabularyByUserIdConfig) => {
	return $api.get<IVocabulary[]>(`/lingro/vocabulary/${params.userId}`, config)
}

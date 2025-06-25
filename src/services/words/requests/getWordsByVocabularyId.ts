import $api from '../../../app/api/interceptor'
import { IWord } from '../../../types/words'

export interface getWordsByVocabularyIdParams {
	vocab_id: number
}

export type getWordsByVocabularyIdConfig =
	AxiosRequestConfig<getWordsByVocabularyIdParams>

export const getWordsByVocabularyId = ({
	params,
	config,
}: getWordsByVocabularyIdConfig) => {
	return $api.get<IWord[]>(`/lingro/word/${params.vocab_id}`, config)
}

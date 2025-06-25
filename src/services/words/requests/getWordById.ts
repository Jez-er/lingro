import $api from '../../../app/api/interceptor'
import { IWord } from '../../../types/words'

export interface getWordByIdParams {
	id: number
}

export type getWordByIdConfig = AxiosRequestConfig<getWordByIdParams>

export const getWordById = ({ config, params }: getWordByIdConfig) => {
	return $api.get<IWord>(`/lingro/word/word/${params.id}/`, config)
}

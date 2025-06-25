import $api from '../../../app/api/interceptor'

export interface postAddNewWordParams {
	vovabularyId: number
	word: string
	translation: string[]
}

export type postAddNewWordConfig = AxiosRequestConfig<postAddNewWordParams>

export const postAddNewWord = ({ config, params }: postAddNewWordConfig) => {
	console.log('postAddNewWord', params.translation)
	return $api.post(
		'/lingro/word/',
		{
			vocabulary_id: params.vovabularyId,
			word: params.word,
			translate: params.translation,
		},
		config
	)
}

import $api from '../../../app/api/interceptor'

export interface CreateVocabularyParams {
	LanguageId: string
	UserId: number
}

export type CreateVocabularyConfig = AxiosRequestConfig<CreateVocabularyParams>

export const postCreateVocabulary = ({
	params,
	config,
}: CreateVocabularyConfig) => {
	return $api.post(
		'/lingro/vocabulary/',
		{
			user_id: params.UserId,
			language_id: Number(params.LanguageId),
		},
		config
	)
}

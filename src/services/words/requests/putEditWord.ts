import $api from '../../../app/api/interceptor'

export interface EditWordParams {
	id: number
	word: string
	translation: string[]
}

export type EditWordConfig = AxiosRequestConfig<EditWordParams>

export const putEditWord = ({ config, params }: EditWordConfig) => {
	return $api.put(`/lingro/word/word/${params.id}`, params, config)
}

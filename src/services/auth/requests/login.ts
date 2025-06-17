import $api from '../../../app/api/interceptor'
import { ILoginFields } from '../../../types'

export interface LoginParams {
	data: ILoginFields
}

export const postLogin = async ({ data }: LoginParams) => {
	const response = await $api.post('/auth/login', data)

	if (response.data.tokens.access_token)
		localStorage.setItem('accessToken', response.data.tokens.access_token)

	return response
}

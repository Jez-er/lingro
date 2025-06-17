import $api from '../../../app/api/interceptor'

export type LogoutConfig = AxiosRequestConfig

export const postLogOut = async () => {
	return $api.post('/auth/logout')
}

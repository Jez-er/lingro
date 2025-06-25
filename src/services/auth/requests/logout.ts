import $api from '../../../app/api/interceptor'

export type LogoutConfig = AxiosRequestConfig

export const postLogOut = async () => {
	localStorage.removeItem('accessToken')
	return $api.post('/auth/logout')
}

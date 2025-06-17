import axios, { type CreateAxiosDefaults } from 'axios'
import { postRefresh } from '../../services/auth/requests/refresh'
import $PAGES from '../routes/pages.config'
import { errorCatch } from './error'

const options: CreateAxiosDefaults = {
	baseURL: import.meta.env.VITE_SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
}

const $api = axios.create(options)

$api.interceptors.request.use(config => {
	const accessToken = localStorage.getItem('accessToken')

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

$api.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				error?.response?.status === 401 ||
				errorCatch(error) === 'Unauthorized') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await postRefresh()
				return $api.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'Unauthorized') {
					localStorage.removeItem('accessToken')
					window.location.href = $PAGES.AUTH.LOGIN
				}
			}
		}

		throw error
	}
)

export default $api

import $api from '../../../app/api/interceptor'

export const postRefresh = async () => {
	return $api.post('/auth/refreh')
}

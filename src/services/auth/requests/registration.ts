import $api from '../../../app/api/interceptor'
import { IRegistrationFields } from '../../../types'

export interface RegistrationParams {
	data: IRegistrationFields
}

export type RegistrationConfig = AxiosRequestConfig<RegistrationParams>

export const postRegistration = async ({
	params,
	config,
}: RegistrationConfig) => {
	return $api.post('/auth/registration', params.data, config)
}

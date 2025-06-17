import { useMutation } from '@tanstack/react-query'
import { postRegistration, RegistrationConfig } from '../requests/registration'

export const useRegistration = (
	settings?: MutationSettings<RegistrationConfig, typeof postRegistration>
) => {
	return useMutation({
		mutationKey: ['UserRegistration'],
		mutationFn: ({ params, config }) =>
			postRegistration({ params, config: { ...settings?.config, ...config } }),
		...settings?.options,
	})
}

import { useMutation } from '@tanstack/react-query'
import {
	postAddNewWord,
	postAddNewWordConfig,
} from '../requests/postAddNewWord'

export const useAddNewWord = (
	settings?: MutationSettings<postAddNewWordConfig, typeof postAddNewWord>
) => {
	return useMutation({
		mutationKey: ['addNewWord'],
		mutationFn: ({ config, params }) =>
			postAddNewWord({ params, config: { ...settings?.config, ...config } }),
		...settings?.options,
	})
}

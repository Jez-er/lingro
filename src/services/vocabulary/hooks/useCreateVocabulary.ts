import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
	CreateVocabularyConfig,
	postCreateVocabulary,
} from '../requests/postCreateVocabulary'

export const useCreateVocabulary = (
	settings?: MutationSettings<
		CreateVocabularyConfig,
		typeof postCreateVocabulary
	>
) => {
	const client = useQueryClient()

	return useMutation({
		mutationKey: ['CreateNewVocabulary'],
		mutationFn: ({ params, config }) =>
			postCreateVocabulary({
				params,
				config: { ...settings?.config, ...config },
			}),
		onSuccess: (data, variables, context) => {
			client.invalidateQueries({ queryKey: ['GetVocabularyByUserID'] })
			client.refetchQueries({ queryKey: ['GetVocabularyByUserID'] })
			settings?.options?.onSuccess?.(data, variables, context)
		},
		...settings?.options,
	})
}

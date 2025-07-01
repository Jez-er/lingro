import { useMutation } from '@tanstack/react-query'
import { EditWordConfig, putEditWord } from '../requests/putEditWord'

export const useEditWord = (
	settings?: MutationSettings<EditWordConfig, typeof putEditWord>
) => {
	return useMutation({
		mutationKey: ['editWord'],
		mutationFn: ({ params, config }) =>
			putEditWord({ params, config: { ...settings?.config, ...config } }),
		...settings?.options,
	})
}
